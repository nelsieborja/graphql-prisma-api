function product(parent, args, context) {
  return context.prisma.productOverviewImage({ id: parent.id }).product();
}

module.exports = {
  product
};
