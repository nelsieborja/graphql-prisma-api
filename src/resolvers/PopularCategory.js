function category(parent, args, context) {
  return context.prisma.popularCategory({ id: parent.id }).category();
}

module.exports = {
  category
};
