function product(parent, args, context) {
  return context.prisma.stars({ id: parent.id }).product();
}

module.exports = {
  product
};
