const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./src/generated/prisma-client');

// Query Resolvers
const Query = require('./src/resolvers/Query');
// Mutation Resolvers
const Mutation = require('./src/resolvers/Mutation');
// Type Resolvers
const Category = require('./src/resolvers/Category');
const PopularCategory = require('./src/resolvers/PopularCategory');
const Product = require('./src/resolvers/Product');
const ProductVariant = require('./src/resolvers/ProductVariant');
const ProductVariantSpec = require('./src/resolvers/ProductVariantSpec');
const ProductOverviewImage = require('./src/resolvers/ProductOverviewImage');
const ProductOverviewText = require('./src/resolvers/ProductOverviewText');
const ProductSpec = require('./src/resolvers/ProductSpec');
const ProductSpecDesc = require('./src/resolvers/ProductSpecDesc');
const Banner = require('./src/resolvers/Banner');
const Review = require('./src/resolvers/Review');
const Stars = require('./src/resolvers/Stars');
const TopPick = require('./src/resolvers/TopPick');
const User = require('./src/resolvers/User');
const Vote = require('./src/resolvers/Vote');
const Cart = require('./src/resolvers/Cart');

// GraphQL API Schema
const typeDefs = './src/schema.graphql';

const resolvers = {
  Query,
  Mutation,
  Category,
  PopularCategory,
  Product,
  ProductVariant,
  ProductVariantSpec,
  ProductOverviewImage,
  ProductOverviewText,
  ProductSpec,
  ProductSpecDesc,
  Banner,
  Review,
  Stars,
  TopPick,
  User,
  Vote,
  Cart
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: request => ({
    ...request,
    prisma
  })
});

const { PORT = 3001 } = process.env;

server.start({ port: PORT }, ({ port }) =>
  console.log(`> API Server is running on http://localhost:${port}`)
);
