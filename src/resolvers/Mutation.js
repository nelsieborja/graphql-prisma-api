const bcrypt = require('bcryptjs');
const { ANONYMOUS, getUserID, createToken } = require('../utils');

async function signup(parent, args, context) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });

  return {
    token: createToken(user.id),
    user
  };
}

async function login(parent, { email, password }, context) {
  const user = await context.prisma.user({ email: email });
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  return {
    token: createToken(user.id),
    user
  };
}

async function reviewProduct(
  parent,
  { title, description, productID, starID = '', starKey, starValue },
  context
) {
  const userID = getUserID(context, true);
  const reviewParam = {
    title,
    description,
    product: { connect: { id: productID } }
  };

  if (userID !== ANONYMOUS) {
    reviewParam.author = {
      connect: { id: userID }
    };
  }

  return {
    review: context.prisma.createReview(reviewParam),
    stars: context.prisma.upsertStars({
      where: {
        id: starID
      },
      create: {
        [starKey]: starValue,
        product: {
          connect: { id: productID }
        }
      },
      update: {
        [starKey]: starValue
      }
    })
  };
}

async function voteReview(parent, { id = '', positive, negative, reviewID }, context) {
  return context.prisma.upsertVote({
    where: {
      id
    },
    create: {
      positive,
      negative,
      review: {
        connect: { id: reviewID }
      }
    },
    update: {
      positive,
      negative
    }
  });
}

async function updateCart(parent, { userID, productID, qty }, context) {
  const _userID = userID || getUserID(context);

  const $where = {
    product: {
      id: productID
    },
    user: {
      id: _userID
    }
  };

  const productExists = await context.prisma.$exists.cart($where);

  // Update
  if (productExists) {
    const $whereAND = {
      AND: [$where]
    };

    // Delete product
    if (!qty) {
      await context.prisma.deleteManyCarts($whereAND);
    }

    await context.prisma.updateManyCarts({
      where: $whereAND,
      data: {
        qty
      }
    });

    return null;
  }

  // CREATE
  return await context.prisma.createCart({
    qty,
    user: {
      connect: { id: _userID }
    },
    product: {
      connect: { id: productID }
    }
  });

  // return context.prisma.upsertCart({
  //   where: {
  //     id
  //   },
  //   create: {
  //     product: {
  //       connect: {
  //         id: productID
  //       }
  //     },
  //     qty
  //   },
  //   update: {
  //     qty
  //   }
  // });
}

// async function deleteCart(parent, { productID }, context) {
//   const userID = getUserID(context);

//   return await context.prisma.deleteManyCarts({
//     where: {
//       AND: {
//         user: {
//           id: userID
//         },
//         product: {
//           id: productID
//         }
//       }
//     }
//   });

//   // return await context.prisma.carts({
//   //   where: {
//   //     AND: {
//   //       user: {
//   //         id: userID
//   //       },
//   //       product: {
//   //         id: productID
//   //       }
//   //     }
//   //   }
//   // });
// }

module.exports = {
  signup,
  login,
  reviewProduct,
  voteReview,
  updateCart
};
