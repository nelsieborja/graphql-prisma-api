function product(parent, args, context) {
  return context.prisma.productOverviewText({ id: parent.id }).product();
}

module.exports = {
  product
};
