function images(parent, args, context) {
  return context.prisma.banner({ id: parent.id }).images();
}

module.exports = {
  images
};
