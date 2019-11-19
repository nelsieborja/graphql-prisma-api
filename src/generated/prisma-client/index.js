"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Banner",
    embedded: false
  },
  {
    name: "BannerImage",
    embedded: false
  },
  {
    name: "Cart",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "CategoryKey",
    embedded: false
  },
  {
    name: "PopularCategory",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "ProductImage",
    embedded: false
  },
  {
    name: "ProductOverviewImage",
    embedded: false
  },
  {
    name: "ProductOverviewText",
    embedded: false
  },
  {
    name: "ProductSpec",
    embedded: false
  },
  {
    name: "ProductSpecDesc",
    embedded: false
  },
  {
    name: "ProductVariant",
    embedded: false
  },
  {
    name: "ProductVariantSpec",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  },
  {
    name: "Stars",
    embedded: false
  },
  {
    name: "TopPick",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Variant",
    embedded: false
  },
  {
    name: "VariantType",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/nelsie/carrefour/dev`,
  secret: `<APP_SECRET>`
});
exports.prisma = new exports.Prisma();
