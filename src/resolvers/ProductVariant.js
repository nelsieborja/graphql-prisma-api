function colors(parent, args, context) {
  return context.prisma.productVariant({ id: parent.id }).colors();
}

function sizes(parent, args, context) {
  return context.prisma.productVariant({ id: parent.id }).sizes();
}

function specs(parent, args, context) {
  return context.prisma.productVariant({ id: parent.id }).specs();
}

module.exports = {
  colors,
  sizes,
  specs
};
