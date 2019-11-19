function productSpec(parent, args, context) {
  return context.prisma.productSpecDesc({ id: parent.id }).productSpec();
}

module.exports = {
  productSpec
};
