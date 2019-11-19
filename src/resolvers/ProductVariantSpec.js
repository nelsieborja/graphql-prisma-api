function color(parent, args, context) {
  return context.prisma.productVariantSpec({ id: parent.id }).color();
}

function size(parent, args, context) {
  return context.prisma.productVariantSpec({ id: parent.id }).size();
}

module.exports = {
  color,
  size
};
