const { updateCart } = require('./Mutation');
const { getUserID } = require('../utils');

async function categories(parent, args, context) {
  return await context.prisma.categories();
}

async function popularCategories(parent, args, context) {
  return await context.prisma.popularCategories();
}

async function product(parent, { productID }, context) {
  return await context.prisma.product({
    id: productID
  });
}

async function products(parent, { filter = '', productID = null, categoryID = null }, context) {
  const andExpression = [];

  if (productID) {
    andExpression.push({ id: productID });
  }

  if (categoryID) {
    andExpression.push({
      category: {
        id: categoryID
      }
    });
  }

  return await context.prisma.products({
    where: {
      AND: andExpression,
      OR: [
        { name_contains: filter },
        { brand_contains: filter },
        { price_contains: filter },
        { searchString_contains: filter },
        {
          category: {
            name_contains: filter
          }
        }
      ]
    }
  });
}

async function banners(parent, { marketing = null, skip = 0, first = null }, context) {
  const params = { skip };

  if (first) {
    params.first = first;
  }

  if (marketing) {
    params.where = {
      marketing
    };
  }

  return await context.prisma.banners(params);
}

async function topPicks(parent, { skip = 0, first = null }, context) {
  const params = { skip };

  if (first) {
    params.first = first;
  }

  return await context.prisma.topPicks(params);
}

async function bannersTopPick(parent, { marketing = null }, context) {
  const params = {};

  if (marketing) {
    params.where = {
      marketing
    };
  }

  return {
    banners: await context.prisma.banners(params),
    topPicks: await context.prisma.topPicks(),
    popularCategories: await context.prisma.popularCategories()
  };
}

async function variants(parent, { type = null }, context) {
  const params = {};

  if (type) {
    params.where = {
      type
    };
  }

  return await context.prisma.variants(params);
}

async function cart(parent, { cartCookie }, context) {
  const userID = getUserID(context);

  // Insert Cart Cookie first
  if (cartCookie) {
    const cartCookieJSON = JSON.parse(cartCookie);

    for (const productID of Object.keys(cartCookieJSON)) {
      const qty = parseInt(cartCookieJSON[productID], 10);
      if (qty < 1) continue;
      await updateCart(parent, { userID, productID, qty }, context);
    }
  }

  return await context.prisma.carts({
    where: {
      user: {
        id: userID
      }
    }
  });
}

module.exports = {
  categories,
  popularCategories,
  product,
  products,
  banners,
  topPicks,
  bannersTopPick,
  variants,
  cart
};
