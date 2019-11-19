function reviews(parent, args, context) {
  return context.prisma.user({ id: parent.id }).reviews();
}

// function votes(parent, args, context) {
//   return context.prisma.user({ id: parent.id }).votes();
// }

module.exports = {
  reviews
  // votes
};
