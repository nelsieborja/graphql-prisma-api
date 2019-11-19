function category(parent, args, context) {
  return context.prisma.product({ id: parent.id }).category();
}

function images(parent, args, context) {
  return context.prisma.product({ id: parent.id }).images();
}

function variants(parent, args, context) {
  return context.prisma.product({ id: parent.id }).variants();
}

function stars(parent, args, context) {
  return context.prisma.product({ id: parent.id }).stars();
}

function reviews(parent, args, context) {
  return context.prisma.product({ id: parent.id }).reviews();
}

function overview(parent, args, context) {
  return {
    texts: context.prisma.product({ id: parent.id }).overviewTexts(),
    images: context.prisma.product({ id: parent.id }).overviewImages()
  };
}

function specs(parent, args, context) {
  return context.prisma.product({ id: parent.id }).specs();
}

module.exports = {
  category,
  images,
  variants,
  stars,
  reviews,
  overview,
  specs
};
