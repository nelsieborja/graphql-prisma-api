function user(parent, args, context) {
  return context.prisma.cart({ id: parent.id }).user();
}

function product(parent, args, context) {
  return context.prisma.cart({ id: parent.id }).product();
}

module.exports = {
  user,
  product
};
