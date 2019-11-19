function products(parent, args, context) {
  return context.prisma.topPick({ id: parent.id }).products();
}

module.exports = {
  products
};
