function productSpecDescs(parent, args, context) {
  return context.prisma.productSpec({ id: parent.id }).productSpecDescs();
}

function product(parent, args, context) {
  return context.prisma.productSpec({ id: parent.id }).product();
}

module.exports = {
  productSpecDescs,
  product
};
