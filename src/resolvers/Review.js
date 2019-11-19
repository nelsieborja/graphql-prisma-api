function product(parent, args, context) {
  return context.prisma.review({ id: parent.id }).product();
}

function author(parent, args, context) {
  return context.prisma.review({ id: parent.id }).author();
}

function votes(parent, args, context) {
  return context.prisma.review({ id: parent.id }).votes();
}

module.exports = {
  product,
  author,
  votes
};
