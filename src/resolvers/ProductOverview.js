function texts(parent, args, context) {
  return context.prisma.productOverview({ id: parent.id }).texts();
}

function images(parent, args, context) {
  return context.prisma.productOverview({ id: parent.id }).images();
}

module.exports = {
  texts,
  images
};
