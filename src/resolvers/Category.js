function products(parent, args, context) {
  return context.prisma.category({ id: parent.id }).products();
}

module.exports = {
  products
};
