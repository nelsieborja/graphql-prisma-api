module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBanner {
  count: Int!
}

type AggregateBannerImage {
  count: Int!
}

type AggregateCart {
  count: Int!
}

type AggregateCategory {
  count: Int!
}

type AggregatePopularCategory {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateProductImage {
  count: Int!
}

type AggregateProductOverviewImage {
  count: Int!
}

type AggregateProductOverviewText {
  count: Int!
}

type AggregateProductSpec {
  count: Int!
}

type AggregateProductSpecDesc {
  count: Int!
}

type AggregateProductVariant {
  count: Int!
}

type AggregateProductVariantSpec {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type AggregateStars {
  count: Int!
}

type AggregateTopPick {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVariant {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type Banner {
  id: ID!
  marketing: String!
  images(where: BannerImageWhereInput, orderBy: BannerImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BannerImage!]
}

type BannerConnection {
  pageInfo: PageInfo!
  edges: [BannerEdge]!
  aggregate: AggregateBanner!
}

input BannerCreateInput {
  marketing: String!
  images: BannerImageCreateManyWithoutBannerInput
}

input BannerCreateOneWithoutImagesInput {
  create: BannerCreateWithoutImagesInput
  connect: BannerWhereUniqueInput
}

input BannerCreateWithoutImagesInput {
  marketing: String!
}

type BannerEdge {
  node: Banner!
  cursor: String!
}

type BannerImage {
  id: ID!
  banner: Banner!
  image: String!
  alt: String
  url: String
  css: String
}

type BannerImageConnection {
  pageInfo: PageInfo!
  edges: [BannerImageEdge]!
  aggregate: AggregateBannerImage!
}

input BannerImageCreateInput {
  banner: BannerCreateOneWithoutImagesInput!
  image: String!
  alt: String
  url: String
  css: String
}

input BannerImageCreateManyWithoutBannerInput {
  create: [BannerImageCreateWithoutBannerInput!]
  connect: [BannerImageWhereUniqueInput!]
}

input BannerImageCreateWithoutBannerInput {
  image: String!
  alt: String
  url: String
  css: String
}

type BannerImageEdge {
  node: BannerImage!
  cursor: String!
}

enum BannerImageOrderByInput {
  id_ASC
  id_DESC
  image_ASC
  image_DESC
  alt_ASC
  alt_DESC
  url_ASC
  url_DESC
  css_ASC
  css_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BannerImagePreviousValues {
  id: ID!
  image: String!
  alt: String
  url: String
  css: String
}

input BannerImageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  alt: String
  alt_not: String
  alt_in: [String!]
  alt_not_in: [String!]
  alt_lt: String
  alt_lte: String
  alt_gt: String
  alt_gte: String
  alt_contains: String
  alt_not_contains: String
  alt_starts_with: String
  alt_not_starts_with: String
  alt_ends_with: String
  alt_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  css: String
  css_not: String
  css_in: [String!]
  css_not_in: [String!]
  css_lt: String
  css_lte: String
  css_gt: String
  css_gte: String
  css_contains: String
  css_not_contains: String
  css_starts_with: String
  css_not_starts_with: String
  css_ends_with: String
  css_not_ends_with: String
  AND: [BannerImageScalarWhereInput!]
  OR: [BannerImageScalarWhereInput!]
  NOT: [BannerImageScalarWhereInput!]
}

type BannerImageSubscriptionPayload {
  mutation: MutationType!
  node: BannerImage
  updatedFields: [String!]
  previousValues: BannerImagePreviousValues
}

input BannerImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BannerImageWhereInput
  AND: [BannerImageSubscriptionWhereInput!]
  OR: [BannerImageSubscriptionWhereInput!]
  NOT: [BannerImageSubscriptionWhereInput!]
}

input BannerImageUpdateInput {
  banner: BannerUpdateOneRequiredWithoutImagesInput
  image: String
  alt: String
  url: String
  css: String
}

input BannerImageUpdateManyDataInput {
  image: String
  alt: String
  url: String
  css: String
}

input BannerImageUpdateManyMutationInput {
  image: String
  alt: String
  url: String
  css: String
}

input BannerImageUpdateManyWithoutBannerInput {
  create: [BannerImageCreateWithoutBannerInput!]
  delete: [BannerImageWhereUniqueInput!]
  connect: [BannerImageWhereUniqueInput!]
  disconnect: [BannerImageWhereUniqueInput!]
  update: [BannerImageUpdateWithWhereUniqueWithoutBannerInput!]
  upsert: [BannerImageUpsertWithWhereUniqueWithoutBannerInput!]
  deleteMany: [BannerImageScalarWhereInput!]
  updateMany: [BannerImageUpdateManyWithWhereNestedInput!]
}

input BannerImageUpdateManyWithWhereNestedInput {
  where: BannerImageScalarWhereInput!
  data: BannerImageUpdateManyDataInput!
}

input BannerImageUpdateWithoutBannerDataInput {
  image: String
  alt: String
  url: String
  css: String
}

input BannerImageUpdateWithWhereUniqueWithoutBannerInput {
  where: BannerImageWhereUniqueInput!
  data: BannerImageUpdateWithoutBannerDataInput!
}

input BannerImageUpsertWithWhereUniqueWithoutBannerInput {
  where: BannerImageWhereUniqueInput!
  update: BannerImageUpdateWithoutBannerDataInput!
  create: BannerImageCreateWithoutBannerInput!
}

input BannerImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  banner: BannerWhereInput
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  alt: String
  alt_not: String
  alt_in: [String!]
  alt_not_in: [String!]
  alt_lt: String
  alt_lte: String
  alt_gt: String
  alt_gte: String
  alt_contains: String
  alt_not_contains: String
  alt_starts_with: String
  alt_not_starts_with: String
  alt_ends_with: String
  alt_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  css: String
  css_not: String
  css_in: [String!]
  css_not_in: [String!]
  css_lt: String
  css_lte: String
  css_gt: String
  css_gte: String
  css_contains: String
  css_not_contains: String
  css_starts_with: String
  css_not_starts_with: String
  css_ends_with: String
  css_not_ends_with: String
  AND: [BannerImageWhereInput!]
  OR: [BannerImageWhereInput!]
  NOT: [BannerImageWhereInput!]
}

input BannerImageWhereUniqueInput {
  id: ID
}

enum BannerOrderByInput {
  id_ASC
  id_DESC
  marketing_ASC
  marketing_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BannerPreviousValues {
  id: ID!
  marketing: String!
}

type BannerSubscriptionPayload {
  mutation: MutationType!
  node: Banner
  updatedFields: [String!]
  previousValues: BannerPreviousValues
}

input BannerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BannerWhereInput
  AND: [BannerSubscriptionWhereInput!]
  OR: [BannerSubscriptionWhereInput!]
  NOT: [BannerSubscriptionWhereInput!]
}

input BannerUpdateInput {
  marketing: String
  images: BannerImageUpdateManyWithoutBannerInput
}

input BannerUpdateManyMutationInput {
  marketing: String
}

input BannerUpdateOneRequiredWithoutImagesInput {
  create: BannerCreateWithoutImagesInput
  update: BannerUpdateWithoutImagesDataInput
  upsert: BannerUpsertWithoutImagesInput
  connect: BannerWhereUniqueInput
}

input BannerUpdateWithoutImagesDataInput {
  marketing: String
}

input BannerUpsertWithoutImagesInput {
  update: BannerUpdateWithoutImagesDataInput!
  create: BannerCreateWithoutImagesInput!
}

input BannerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  marketing: String
  marketing_not: String
  marketing_in: [String!]
  marketing_not_in: [String!]
  marketing_lt: String
  marketing_lte: String
  marketing_gt: String
  marketing_gte: String
  marketing_contains: String
  marketing_not_contains: String
  marketing_starts_with: String
  marketing_not_starts_with: String
  marketing_ends_with: String
  marketing_not_ends_with: String
  images_every: BannerImageWhereInput
  images_some: BannerImageWhereInput
  images_none: BannerImageWhereInput
  AND: [BannerWhereInput!]
  OR: [BannerWhereInput!]
  NOT: [BannerWhereInput!]
}

input BannerWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Cart {
  id: ID!
  user: User!
  product: Product!
  qty: Int
}

type CartConnection {
  pageInfo: PageInfo!
  edges: [CartEdge]!
  aggregate: AggregateCart!
}

input CartCreateInput {
  user: UserCreateOneInput!
  product: ProductCreateOneInput!
  qty: Int
}

type CartEdge {
  node: Cart!
  cursor: String!
}

enum CartOrderByInput {
  id_ASC
  id_DESC
  qty_ASC
  qty_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CartPreviousValues {
  id: ID!
  qty: Int
}

type CartSubscriptionPayload {
  mutation: MutationType!
  node: Cart
  updatedFields: [String!]
  previousValues: CartPreviousValues
}

input CartSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CartWhereInput
  AND: [CartSubscriptionWhereInput!]
  OR: [CartSubscriptionWhereInput!]
  NOT: [CartSubscriptionWhereInput!]
}

input CartUpdateInput {
  user: UserUpdateOneRequiredInput
  product: ProductUpdateOneRequiredInput
  qty: Int
}

input CartUpdateManyMutationInput {
  qty: Int
}

input CartWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  product: ProductWhereInput
  qty: Int
  qty_not: Int
  qty_in: [Int!]
  qty_not_in: [Int!]
  qty_lt: Int
  qty_lte: Int
  qty_gt: Int
  qty_gte: Int
  AND: [CartWhereInput!]
  OR: [CartWhereInput!]
  NOT: [CartWhereInput!]
}

input CartWhereUniqueInput {
  id: ID
}

type Category {
  id: ID!
  categoryKey: CategoryKey
  name: String!
  subCategories: [String!]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  categoryKey: CategoryKey
  name: String!
  subCategories: CategoryCreatesubCategoriesInput
  products: ProductCreateManyWithoutCategoryInput
}

input CategoryCreateOneInput {
  create: CategoryCreateInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateOneWithoutProductsInput {
  create: CategoryCreateWithoutProductsInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreatesubCategoriesInput {
  set: [String!]
}

input CategoryCreateWithoutProductsInput {
  categoryKey: CategoryKey
  name: String!
  subCategories: CategoryCreatesubCategoriesInput
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryKey {
  PHONES
  ELECTRONICS
  LAPTOPS
  GROCERIES
  FRESH_FOOD
  FROZEN_FOOD
  APPLIANCES
  FURNITURE
  HOUSEHOLD
  OUTDOOR
  BABY_WORLD
  TOYS
  BEAUTY
  WATCHES
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  categoryKey_ASC
  categoryKey_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CategoryPreviousValues {
  id: ID!
  categoryKey: CategoryKey
  name: String!
  subCategories: [String!]!
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
  OR: [CategorySubscriptionWhereInput!]
  NOT: [CategorySubscriptionWhereInput!]
}

input CategoryUpdateDataInput {
  categoryKey: CategoryKey
  name: String
  subCategories: CategoryUpdatesubCategoriesInput
  products: ProductUpdateManyWithoutCategoryInput
}

input CategoryUpdateInput {
  categoryKey: CategoryKey
  name: String
  subCategories: CategoryUpdatesubCategoriesInput
  products: ProductUpdateManyWithoutCategoryInput
}

input CategoryUpdateManyMutationInput {
  categoryKey: CategoryKey
  name: String
  subCategories: CategoryUpdatesubCategoriesInput
}

input CategoryUpdateOneInput {
  create: CategoryCreateInput
  update: CategoryUpdateDataInput
  upsert: CategoryUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CategoryWhereUniqueInput
}

input CategoryUpdateOneWithoutProductsInput {
  create: CategoryCreateWithoutProductsInput
  update: CategoryUpdateWithoutProductsDataInput
  upsert: CategoryUpsertWithoutProductsInput
  delete: Boolean
  disconnect: Boolean
  connect: CategoryWhereUniqueInput
}

input CategoryUpdatesubCategoriesInput {
  set: [String!]
}

input CategoryUpdateWithoutProductsDataInput {
  categoryKey: CategoryKey
  name: String
  subCategories: CategoryUpdatesubCategoriesInput
}

input CategoryUpsertNestedInput {
  update: CategoryUpdateDataInput!
  create: CategoryCreateInput!
}

input CategoryUpsertWithoutProductsInput {
  update: CategoryUpdateWithoutProductsDataInput!
  create: CategoryCreateWithoutProductsInput!
}

input CategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  categoryKey: CategoryKey
  categoryKey_not: CategoryKey
  categoryKey_in: [CategoryKey!]
  categoryKey_not_in: [CategoryKey!]
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  id: ID
  categoryKey: CategoryKey
}

scalar DateTime

scalar Long

type Mutation {
  createBanner(data: BannerCreateInput!): Banner!
  updateBanner(data: BannerUpdateInput!, where: BannerWhereUniqueInput!): Banner
  updateManyBanners(data: BannerUpdateManyMutationInput!, where: BannerWhereInput): BatchPayload!
  upsertBanner(where: BannerWhereUniqueInput!, create: BannerCreateInput!, update: BannerUpdateInput!): Banner!
  deleteBanner(where: BannerWhereUniqueInput!): Banner
  deleteManyBanners(where: BannerWhereInput): BatchPayload!
  createBannerImage(data: BannerImageCreateInput!): BannerImage!
  updateBannerImage(data: BannerImageUpdateInput!, where: BannerImageWhereUniqueInput!): BannerImage
  updateManyBannerImages(data: BannerImageUpdateManyMutationInput!, where: BannerImageWhereInput): BatchPayload!
  upsertBannerImage(where: BannerImageWhereUniqueInput!, create: BannerImageCreateInput!, update: BannerImageUpdateInput!): BannerImage!
  deleteBannerImage(where: BannerImageWhereUniqueInput!): BannerImage
  deleteManyBannerImages(where: BannerImageWhereInput): BatchPayload!
  createCart(data: CartCreateInput!): Cart!
  updateCart(data: CartUpdateInput!, where: CartWhereUniqueInput!): Cart
  updateManyCarts(data: CartUpdateManyMutationInput!, where: CartWhereInput): BatchPayload!
  upsertCart(where: CartWhereUniqueInput!, create: CartCreateInput!, update: CartUpdateInput!): Cart!
  deleteCart(where: CartWhereUniqueInput!): Cart
  deleteManyCarts(where: CartWhereInput): BatchPayload!
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createPopularCategory(data: PopularCategoryCreateInput!): PopularCategory!
  updatePopularCategory(data: PopularCategoryUpdateInput!, where: PopularCategoryWhereUniqueInput!): PopularCategory
  updateManyPopularCategories(data: PopularCategoryUpdateManyMutationInput!, where: PopularCategoryWhereInput): BatchPayload!
  upsertPopularCategory(where: PopularCategoryWhereUniqueInput!, create: PopularCategoryCreateInput!, update: PopularCategoryUpdateInput!): PopularCategory!
  deletePopularCategory(where: PopularCategoryWhereUniqueInput!): PopularCategory
  deleteManyPopularCategories(where: PopularCategoryWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createProductImage(data: ProductImageCreateInput!): ProductImage!
  updateProductImage(data: ProductImageUpdateInput!, where: ProductImageWhereUniqueInput!): ProductImage
  updateManyProductImages(data: ProductImageUpdateManyMutationInput!, where: ProductImageWhereInput): BatchPayload!
  upsertProductImage(where: ProductImageWhereUniqueInput!, create: ProductImageCreateInput!, update: ProductImageUpdateInput!): ProductImage!
  deleteProductImage(where: ProductImageWhereUniqueInput!): ProductImage
  deleteManyProductImages(where: ProductImageWhereInput): BatchPayload!
  createProductOverviewImage(data: ProductOverviewImageCreateInput!): ProductOverviewImage!
  updateProductOverviewImage(data: ProductOverviewImageUpdateInput!, where: ProductOverviewImageWhereUniqueInput!): ProductOverviewImage
  updateManyProductOverviewImages(data: ProductOverviewImageUpdateManyMutationInput!, where: ProductOverviewImageWhereInput): BatchPayload!
  upsertProductOverviewImage(where: ProductOverviewImageWhereUniqueInput!, create: ProductOverviewImageCreateInput!, update: ProductOverviewImageUpdateInput!): ProductOverviewImage!
  deleteProductOverviewImage(where: ProductOverviewImageWhereUniqueInput!): ProductOverviewImage
  deleteManyProductOverviewImages(where: ProductOverviewImageWhereInput): BatchPayload!
  createProductOverviewText(data: ProductOverviewTextCreateInput!): ProductOverviewText!
  updateProductOverviewText(data: ProductOverviewTextUpdateInput!, where: ProductOverviewTextWhereUniqueInput!): ProductOverviewText
  updateManyProductOverviewTexts(data: ProductOverviewTextUpdateManyMutationInput!, where: ProductOverviewTextWhereInput): BatchPayload!
  upsertProductOverviewText(where: ProductOverviewTextWhereUniqueInput!, create: ProductOverviewTextCreateInput!, update: ProductOverviewTextUpdateInput!): ProductOverviewText!
  deleteProductOverviewText(where: ProductOverviewTextWhereUniqueInput!): ProductOverviewText
  deleteManyProductOverviewTexts(where: ProductOverviewTextWhereInput): BatchPayload!
  createProductSpec(data: ProductSpecCreateInput!): ProductSpec!
  updateProductSpec(data: ProductSpecUpdateInput!, where: ProductSpecWhereUniqueInput!): ProductSpec
  updateManyProductSpecs(data: ProductSpecUpdateManyMutationInput!, where: ProductSpecWhereInput): BatchPayload!
  upsertProductSpec(where: ProductSpecWhereUniqueInput!, create: ProductSpecCreateInput!, update: ProductSpecUpdateInput!): ProductSpec!
  deleteProductSpec(where: ProductSpecWhereUniqueInput!): ProductSpec
  deleteManyProductSpecs(where: ProductSpecWhereInput): BatchPayload!
  createProductSpecDesc(data: ProductSpecDescCreateInput!): ProductSpecDesc!
  updateProductSpecDesc(data: ProductSpecDescUpdateInput!, where: ProductSpecDescWhereUniqueInput!): ProductSpecDesc
  updateManyProductSpecDescs(data: ProductSpecDescUpdateManyMutationInput!, where: ProductSpecDescWhereInput): BatchPayload!
  upsertProductSpecDesc(where: ProductSpecDescWhereUniqueInput!, create: ProductSpecDescCreateInput!, update: ProductSpecDescUpdateInput!): ProductSpecDesc!
  deleteProductSpecDesc(where: ProductSpecDescWhereUniqueInput!): ProductSpecDesc
  deleteManyProductSpecDescs(where: ProductSpecDescWhereInput): BatchPayload!
  createProductVariant(data: ProductVariantCreateInput!): ProductVariant!
  updateProductVariant(data: ProductVariantUpdateInput!, where: ProductVariantWhereUniqueInput!): ProductVariant
  upsertProductVariant(where: ProductVariantWhereUniqueInput!, create: ProductVariantCreateInput!, update: ProductVariantUpdateInput!): ProductVariant!
  deleteProductVariant(where: ProductVariantWhereUniqueInput!): ProductVariant
  deleteManyProductVariants(where: ProductVariantWhereInput): BatchPayload!
  createProductVariantSpec(data: ProductVariantSpecCreateInput!): ProductVariantSpec!
  updateProductVariantSpec(data: ProductVariantSpecUpdateInput!, where: ProductVariantSpecWhereUniqueInput!): ProductVariantSpec
  upsertProductVariantSpec(where: ProductVariantSpecWhereUniqueInput!, create: ProductVariantSpecCreateInput!, update: ProductVariantSpecUpdateInput!): ProductVariantSpec!
  deleteProductVariantSpec(where: ProductVariantSpecWhereUniqueInput!): ProductVariantSpec
  deleteManyProductVariantSpecs(where: ProductVariantSpecWhereInput): BatchPayload!
  createReview(data: ReviewCreateInput!): Review!
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateManyReviews(data: ReviewUpdateManyMutationInput!, where: ReviewWhereInput): BatchPayload!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  createStars(data: StarsCreateInput!): Stars!
  updateStars(data: StarsUpdateInput!, where: StarsWhereUniqueInput!): Stars
  updateManyStarses(data: StarsUpdateManyMutationInput!, where: StarsWhereInput): BatchPayload!
  upsertStars(where: StarsWhereUniqueInput!, create: StarsCreateInput!, update: StarsUpdateInput!): Stars!
  deleteStars(where: StarsWhereUniqueInput!): Stars
  deleteManyStarses(where: StarsWhereInput): BatchPayload!
  createTopPick(data: TopPickCreateInput!): TopPick!
  updateTopPick(data: TopPickUpdateInput!, where: TopPickWhereUniqueInput!): TopPick
  updateManyTopPicks(data: TopPickUpdateManyMutationInput!, where: TopPickWhereInput): BatchPayload!
  upsertTopPick(where: TopPickWhereUniqueInput!, create: TopPickCreateInput!, update: TopPickUpdateInput!): TopPick!
  deleteTopPick(where: TopPickWhereUniqueInput!): TopPick
  deleteManyTopPicks(where: TopPickWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVariant(data: VariantCreateInput!): Variant!
  updateVariant(data: VariantUpdateInput!, where: VariantWhereUniqueInput!): Variant
  updateManyVariants(data: VariantUpdateManyMutationInput!, where: VariantWhereInput): BatchPayload!
  upsertVariant(where: VariantWhereUniqueInput!, create: VariantCreateInput!, update: VariantUpdateInput!): Variant!
  deleteVariant(where: VariantWhereUniqueInput!): Variant
  deleteManyVariants(where: VariantWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  updateManyVotes(data: VoteUpdateManyMutationInput!, where: VoteWhereInput): BatchPayload!
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type PopularCategory {
  id: ID!
  category: Category
  image: String
}

type PopularCategoryConnection {
  pageInfo: PageInfo!
  edges: [PopularCategoryEdge]!
  aggregate: AggregatePopularCategory!
}

input PopularCategoryCreateInput {
  category: CategoryCreateOneInput
  image: String
}

type PopularCategoryEdge {
  node: PopularCategory!
  cursor: String!
}

enum PopularCategoryOrderByInput {
  id_ASC
  id_DESC
  image_ASC
  image_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PopularCategoryPreviousValues {
  id: ID!
  image: String
}

type PopularCategorySubscriptionPayload {
  mutation: MutationType!
  node: PopularCategory
  updatedFields: [String!]
  previousValues: PopularCategoryPreviousValues
}

input PopularCategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PopularCategoryWhereInput
  AND: [PopularCategorySubscriptionWhereInput!]
  OR: [PopularCategorySubscriptionWhereInput!]
  NOT: [PopularCategorySubscriptionWhereInput!]
}

input PopularCategoryUpdateInput {
  category: CategoryUpdateOneInput
  image: String
}

input PopularCategoryUpdateManyMutationInput {
  image: String
}

input PopularCategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  category: CategoryWhereInput
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  AND: [PopularCategoryWhereInput!]
  OR: [PopularCategoryWhereInput!]
  NOT: [PopularCategoryWhereInput!]
}

input PopularCategoryWhereUniqueInput {
  id: ID
}

type Product {
  id: ID!
  name: String!
  brand: String
  category: Category
  price: String!
  unit: String
  discount: Int
  images: ProductImage
  badges: [String!]!
  miscs: [String!]!
  variants: ProductVariant
  stars: Stars
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  overviewTexts(where: ProductOverviewTextWhereInput, orderBy: ProductOverviewTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductOverviewText!]
  overviewImages(where: ProductOverviewImageWhereInput, orderBy: ProductOverviewImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductOverviewImage!]
  specs(where: ProductSpecWhereInput, orderBy: ProductSpecOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductSpec!]
  searchString: String
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreatebadgesInput {
  set: [String!]
}

input ProductCreateInput {
  name: String!
  brand: String
  category: CategoryCreateOneWithoutProductsInput
  price: String!
  unit: String
  discount: Int
  images: ProductImageCreateOneWithoutProductInput
  badges: ProductCreatebadgesInput
  miscs: ProductCreatemiscsInput
  variants: ProductVariantCreateOneWithoutProductInput
  stars: StarsCreateOneWithoutProductInput
  reviews: ReviewCreateManyWithoutProductInput
  overviewTexts: ProductOverviewTextCreateManyWithoutProductInput
  overviewImages: ProductOverviewImageCreateManyWithoutProductInput
  specs: ProductSpecCreateManyWithoutProductInput
  searchString: String
}

input ProductCreateManyInput {
  create: [ProductCreateInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutCategoryInput {
  create: [ProductCreateWithoutCategoryInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreatemiscsInput {
  set: [String!]
}

input ProductCreateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutImagesInput {
  create: ProductCreateWithoutImagesInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutOverviewImagesInput {
  create: ProductCreateWithoutOverviewImagesInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutOverviewTextsInput {
  create: ProductCreateWithoutOverviewTextsInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutReviewsInput {
  create: ProductCreateWithoutReviewsInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutSpecsInput {
  create: ProductCreateWithoutSpecsInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutStarsInput {
  create: ProductCreateWithoutStarsInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutVariantsInput {
  create: ProductCreateWithoutVariantsInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutCategoryInput {
  name: String!
  brand: String
  price: String!
  unit: String
  discount: Int
  images: ProductImageCreateOneWithoutProductInput
  badges: ProductCreatebadgesInput
  miscs: ProductCreatemiscsInput
  variants: ProductVariantCreateOneWithoutProductInput
  stars: StarsCreateOneWithoutProductInput
  reviews: ReviewCreateManyWithoutProductInput
  overviewTexts: ProductOverviewTextCreateManyWithoutProductInput
  overviewImages: ProductOverviewImageCreateManyWithoutProductInput
  specs: ProductSpecCreateManyWithoutProductInput
  searchString: String
}

input ProductCreateWithoutImagesInput {
  name: String!
  brand: String
  category: CategoryCreateOneWithoutProductsInput
  price: String!
  unit: String
  discount: Int
  badges: ProductCreatebadgesInput
  miscs: ProductCreatemiscsInput
  variants: ProductVariantCreateOneWithoutProductInput
  stars: StarsCreateOneWithoutProductInput
  reviews: ReviewCreateManyWithoutProductInput
  overviewTexts: ProductOverviewTextCreateManyWithoutProductInput
  overviewImages: ProductOverviewImageCreateManyWithoutProductInput
  specs: ProductSpecCreateManyWithoutProductInput
  searchString: String
}

input ProductCreateWithoutOverviewImagesInput {
  name: String!
  brand: String
  category: CategoryCreateOneWithoutProductsInput
  price: String!
  unit: String
  discount: Int
  images: ProductImageCreateOneWithoutProductInput
  badges: ProductCreatebadgesInput
  miscs: ProductCreatemiscsInput
  variants: ProductVariantCreateOneWithoutProductInput
  stars: StarsCreateOneWithoutProductInput
  reviews: ReviewCreateManyWithoutProductInput
  overviewTexts: ProductOverviewTextCreateManyWithoutProductInput
  specs: ProductSpecCreateManyWithoutProductInput
  searchString: String
}

input ProductCreateWithoutOverviewTextsInput {
  name: String!
  brand: String
  category: CategoryCreateOneWithoutProductsInput
  price: String!
  unit: String
  discount: Int
  images: ProductImageCreateOneWithoutProductInput
  badges: ProductCreatebadgesInput
  miscs: ProductCreatemiscsInput
  variants: ProductVariantCreateOneWithoutProductInput
  stars: StarsCreateOneWithoutProductInput
  reviews: ReviewCreateManyWithoutProductInput
  overviewImages: ProductOverviewImageCreateManyWithoutProductInput
  specs: ProductSpecCreateManyWithoutProductInput
  searchString: String
}

input ProductCreateWithoutReviewsInput {
  name: String!
  brand: String
  category: CategoryCreateOneWithoutProductsInput
  price: String!
  unit: String
  discount: Int
  images: ProductImageCreateOneWithoutProductInput
  badges: ProductCreatebadgesInput
  miscs: ProductCreatemiscsInput
  variants: ProductVariantCreateOneWithoutProductInput
  stars: StarsCreateOneWithoutProductInput
  overviewTexts: ProductOverviewTextCreateManyWithoutProductInput
  overviewImages: ProductOverviewImageCreateManyWithoutProductInput
  specs: ProductSpecCreateManyWithoutProductInput
  searchString: String
}

input ProductCreateWithoutSpecsInput {
  name: String!
  brand: String
  category: CategoryCreateOneWithoutProductsInput
  price: String!
  unit: String
  discount: Int
  images: ProductImageCreateOneWithoutProductInput
  badges: ProductCreatebadgesInput
  miscs: ProductCreatemiscsInput
  variants: ProductVariantCreateOneWithoutProductInput
  stars: StarsCreateOneWithoutProductInput
  reviews: ReviewCreateManyWithoutProductInput
  overviewTexts: ProductOverviewTextCreateManyWithoutProductInput
  overviewImages: ProductOverviewImageCreateManyWithoutProductInput
  searchString: String
}

input ProductCreateWithoutStarsInput {
  name: String!
  brand: String
  category: CategoryCreateOneWithoutProductsInput
  price: String!
  unit: String
  discount: Int
  images: ProductImageCreateOneWithoutProductInput
  badges: ProductCreatebadgesInput
  miscs: ProductCreatemiscsInput
  variants: ProductVariantCreateOneWithoutProductInput
  reviews: ReviewCreateManyWithoutProductInput
  overviewTexts: ProductOverviewTextCreateManyWithoutProductInput
  overviewImages: ProductOverviewImageCreateManyWithoutProductInput
  specs: ProductSpecCreateManyWithoutProductInput
  searchString: String
}

input ProductCreateWithoutVariantsInput {
  name: String!
  brand: String
  category: CategoryCreateOneWithoutProductsInput
  price: String!
  unit: String
  discount: Int
  images: ProductImageCreateOneWithoutProductInput
  badges: ProductCreatebadgesInput
  miscs: ProductCreatemiscsInput
  stars: StarsCreateOneWithoutProductInput
  reviews: ReviewCreateManyWithoutProductInput
  overviewTexts: ProductOverviewTextCreateManyWithoutProductInput
  overviewImages: ProductOverviewImageCreateManyWithoutProductInput
  specs: ProductSpecCreateManyWithoutProductInput
  searchString: String
}

type ProductEdge {
  node: Product!
  cursor: String!
}

type ProductImage {
  id: ID!
  product: Product!
  small: String
  medium: String
  large: [String!]!
}

type ProductImageConnection {
  pageInfo: PageInfo!
  edges: [ProductImageEdge]!
  aggregate: AggregateProductImage!
}

input ProductImageCreateInput {
  product: ProductCreateOneWithoutImagesInput!
  small: String
  medium: String
  large: ProductImageCreatelargeInput
}

input ProductImageCreatelargeInput {
  set: [String!]
}

input ProductImageCreateOneWithoutProductInput {
  create: ProductImageCreateWithoutProductInput
  connect: ProductImageWhereUniqueInput
}

input ProductImageCreateWithoutProductInput {
  small: String
  medium: String
  large: ProductImageCreatelargeInput
}

type ProductImageEdge {
  node: ProductImage!
  cursor: String!
}

enum ProductImageOrderByInput {
  id_ASC
  id_DESC
  small_ASC
  small_DESC
  medium_ASC
  medium_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductImagePreviousValues {
  id: ID!
  small: String
  medium: String
  large: [String!]!
}

type ProductImageSubscriptionPayload {
  mutation: MutationType!
  node: ProductImage
  updatedFields: [String!]
  previousValues: ProductImagePreviousValues
}

input ProductImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductImageWhereInput
  AND: [ProductImageSubscriptionWhereInput!]
  OR: [ProductImageSubscriptionWhereInput!]
  NOT: [ProductImageSubscriptionWhereInput!]
}

input ProductImageUpdateInput {
  product: ProductUpdateOneRequiredWithoutImagesInput
  small: String
  medium: String
  large: ProductImageUpdatelargeInput
}

input ProductImageUpdatelargeInput {
  set: [String!]
}

input ProductImageUpdateManyMutationInput {
  small: String
  medium: String
  large: ProductImageUpdatelargeInput
}

input ProductImageUpdateOneWithoutProductInput {
  create: ProductImageCreateWithoutProductInput
  update: ProductImageUpdateWithoutProductDataInput
  upsert: ProductImageUpsertWithoutProductInput
  delete: Boolean
  disconnect: Boolean
  connect: ProductImageWhereUniqueInput
}

input ProductImageUpdateWithoutProductDataInput {
  small: String
  medium: String
  large: ProductImageUpdatelargeInput
}

input ProductImageUpsertWithoutProductInput {
  update: ProductImageUpdateWithoutProductDataInput!
  create: ProductImageCreateWithoutProductInput!
}

input ProductImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  product: ProductWhereInput
  small: String
  small_not: String
  small_in: [String!]
  small_not_in: [String!]
  small_lt: String
  small_lte: String
  small_gt: String
  small_gte: String
  small_contains: String
  small_not_contains: String
  small_starts_with: String
  small_not_starts_with: String
  small_ends_with: String
  small_not_ends_with: String
  medium: String
  medium_not: String
  medium_in: [String!]
  medium_not_in: [String!]
  medium_lt: String
  medium_lte: String
  medium_gt: String
  medium_gte: String
  medium_contains: String
  medium_not_contains: String
  medium_starts_with: String
  medium_not_starts_with: String
  medium_ends_with: String
  medium_not_ends_with: String
  AND: [ProductImageWhereInput!]
  OR: [ProductImageWhereInput!]
  NOT: [ProductImageWhereInput!]
}

input ProductImageWhereUniqueInput {
  id: ID
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  brand_ASC
  brand_DESC
  price_ASC
  price_DESC
  unit_ASC
  unit_DESC
  discount_ASC
  discount_DESC
  searchString_ASC
  searchString_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductOverviewImage {
  id: ID!
  label: String
  image: String
  product: Product!
}

type ProductOverviewImageConnection {
  pageInfo: PageInfo!
  edges: [ProductOverviewImageEdge]!
  aggregate: AggregateProductOverviewImage!
}

input ProductOverviewImageCreateInput {
  label: String
  image: String
  product: ProductCreateOneWithoutOverviewImagesInput!
}

input ProductOverviewImageCreateManyWithoutProductInput {
  create: [ProductOverviewImageCreateWithoutProductInput!]
  connect: [ProductOverviewImageWhereUniqueInput!]
}

input ProductOverviewImageCreateWithoutProductInput {
  label: String
  image: String
}

type ProductOverviewImageEdge {
  node: ProductOverviewImage!
  cursor: String!
}

enum ProductOverviewImageOrderByInput {
  id_ASC
  id_DESC
  label_ASC
  label_DESC
  image_ASC
  image_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductOverviewImagePreviousValues {
  id: ID!
  label: String
  image: String
}

input ProductOverviewImageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  AND: [ProductOverviewImageScalarWhereInput!]
  OR: [ProductOverviewImageScalarWhereInput!]
  NOT: [ProductOverviewImageScalarWhereInput!]
}

type ProductOverviewImageSubscriptionPayload {
  mutation: MutationType!
  node: ProductOverviewImage
  updatedFields: [String!]
  previousValues: ProductOverviewImagePreviousValues
}

input ProductOverviewImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductOverviewImageWhereInput
  AND: [ProductOverviewImageSubscriptionWhereInput!]
  OR: [ProductOverviewImageSubscriptionWhereInput!]
  NOT: [ProductOverviewImageSubscriptionWhereInput!]
}

input ProductOverviewImageUpdateInput {
  label: String
  image: String
  product: ProductUpdateOneRequiredWithoutOverviewImagesInput
}

input ProductOverviewImageUpdateManyDataInput {
  label: String
  image: String
}

input ProductOverviewImageUpdateManyMutationInput {
  label: String
  image: String
}

input ProductOverviewImageUpdateManyWithoutProductInput {
  create: [ProductOverviewImageCreateWithoutProductInput!]
  delete: [ProductOverviewImageWhereUniqueInput!]
  connect: [ProductOverviewImageWhereUniqueInput!]
  disconnect: [ProductOverviewImageWhereUniqueInput!]
  update: [ProductOverviewImageUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [ProductOverviewImageUpsertWithWhereUniqueWithoutProductInput!]
  deleteMany: [ProductOverviewImageScalarWhereInput!]
  updateMany: [ProductOverviewImageUpdateManyWithWhereNestedInput!]
}

input ProductOverviewImageUpdateManyWithWhereNestedInput {
  where: ProductOverviewImageScalarWhereInput!
  data: ProductOverviewImageUpdateManyDataInput!
}

input ProductOverviewImageUpdateWithoutProductDataInput {
  label: String
  image: String
}

input ProductOverviewImageUpdateWithWhereUniqueWithoutProductInput {
  where: ProductOverviewImageWhereUniqueInput!
  data: ProductOverviewImageUpdateWithoutProductDataInput!
}

input ProductOverviewImageUpsertWithWhereUniqueWithoutProductInput {
  where: ProductOverviewImageWhereUniqueInput!
  update: ProductOverviewImageUpdateWithoutProductDataInput!
  create: ProductOverviewImageCreateWithoutProductInput!
}

input ProductOverviewImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  product: ProductWhereInput
  AND: [ProductOverviewImageWhereInput!]
  OR: [ProductOverviewImageWhereInput!]
  NOT: [ProductOverviewImageWhereInput!]
}

input ProductOverviewImageWhereUniqueInput {
  id: ID
}

type ProductOverviewText {
  id: ID!
  text: String
  pairs: [String!]!
  product: Product!
}

type ProductOverviewTextConnection {
  pageInfo: PageInfo!
  edges: [ProductOverviewTextEdge]!
  aggregate: AggregateProductOverviewText!
}

input ProductOverviewTextCreateInput {
  text: String
  pairs: ProductOverviewTextCreatepairsInput
  product: ProductCreateOneWithoutOverviewTextsInput!
}

input ProductOverviewTextCreateManyWithoutProductInput {
  create: [ProductOverviewTextCreateWithoutProductInput!]
  connect: [ProductOverviewTextWhereUniqueInput!]
}

input ProductOverviewTextCreatepairsInput {
  set: [String!]
}

input ProductOverviewTextCreateWithoutProductInput {
  text: String
  pairs: ProductOverviewTextCreatepairsInput
}

type ProductOverviewTextEdge {
  node: ProductOverviewText!
  cursor: String!
}

enum ProductOverviewTextOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductOverviewTextPreviousValues {
  id: ID!
  text: String
  pairs: [String!]!
}

input ProductOverviewTextScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [ProductOverviewTextScalarWhereInput!]
  OR: [ProductOverviewTextScalarWhereInput!]
  NOT: [ProductOverviewTextScalarWhereInput!]
}

type ProductOverviewTextSubscriptionPayload {
  mutation: MutationType!
  node: ProductOverviewText
  updatedFields: [String!]
  previousValues: ProductOverviewTextPreviousValues
}

input ProductOverviewTextSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductOverviewTextWhereInput
  AND: [ProductOverviewTextSubscriptionWhereInput!]
  OR: [ProductOverviewTextSubscriptionWhereInput!]
  NOT: [ProductOverviewTextSubscriptionWhereInput!]
}

input ProductOverviewTextUpdateInput {
  text: String
  pairs: ProductOverviewTextUpdatepairsInput
  product: ProductUpdateOneRequiredWithoutOverviewTextsInput
}

input ProductOverviewTextUpdateManyDataInput {
  text: String
  pairs: ProductOverviewTextUpdatepairsInput
}

input ProductOverviewTextUpdateManyMutationInput {
  text: String
  pairs: ProductOverviewTextUpdatepairsInput
}

input ProductOverviewTextUpdateManyWithoutProductInput {
  create: [ProductOverviewTextCreateWithoutProductInput!]
  delete: [ProductOverviewTextWhereUniqueInput!]
  connect: [ProductOverviewTextWhereUniqueInput!]
  disconnect: [ProductOverviewTextWhereUniqueInput!]
  update: [ProductOverviewTextUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [ProductOverviewTextUpsertWithWhereUniqueWithoutProductInput!]
  deleteMany: [ProductOverviewTextScalarWhereInput!]
  updateMany: [ProductOverviewTextUpdateManyWithWhereNestedInput!]
}

input ProductOverviewTextUpdateManyWithWhereNestedInput {
  where: ProductOverviewTextScalarWhereInput!
  data: ProductOverviewTextUpdateManyDataInput!
}

input ProductOverviewTextUpdatepairsInput {
  set: [String!]
}

input ProductOverviewTextUpdateWithoutProductDataInput {
  text: String
  pairs: ProductOverviewTextUpdatepairsInput
}

input ProductOverviewTextUpdateWithWhereUniqueWithoutProductInput {
  where: ProductOverviewTextWhereUniqueInput!
  data: ProductOverviewTextUpdateWithoutProductDataInput!
}

input ProductOverviewTextUpsertWithWhereUniqueWithoutProductInput {
  where: ProductOverviewTextWhereUniqueInput!
  update: ProductOverviewTextUpdateWithoutProductDataInput!
  create: ProductOverviewTextCreateWithoutProductInput!
}

input ProductOverviewTextWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  product: ProductWhereInput
  AND: [ProductOverviewTextWhereInput!]
  OR: [ProductOverviewTextWhereInput!]
  NOT: [ProductOverviewTextWhereInput!]
}

input ProductOverviewTextWhereUniqueInput {
  id: ID
}

type ProductPreviousValues {
  id: ID!
  name: String!
  brand: String
  price: String!
  unit: String
  discount: Int
  badges: [String!]!
  miscs: [String!]!
  searchString: String
}

input ProductScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  brand: String
  brand_not: String
  brand_in: [String!]
  brand_not_in: [String!]
  brand_lt: String
  brand_lte: String
  brand_gt: String
  brand_gte: String
  brand_contains: String
  brand_not_contains: String
  brand_starts_with: String
  brand_not_starts_with: String
  brand_ends_with: String
  brand_not_ends_with: String
  price: String
  price_not: String
  price_in: [String!]
  price_not_in: [String!]
  price_lt: String
  price_lte: String
  price_gt: String
  price_gte: String
  price_contains: String
  price_not_contains: String
  price_starts_with: String
  price_not_starts_with: String
  price_ends_with: String
  price_not_ends_with: String
  unit: String
  unit_not: String
  unit_in: [String!]
  unit_not_in: [String!]
  unit_lt: String
  unit_lte: String
  unit_gt: String
  unit_gte: String
  unit_contains: String
  unit_not_contains: String
  unit_starts_with: String
  unit_not_starts_with: String
  unit_ends_with: String
  unit_not_ends_with: String
  discount: Int
  discount_not: Int
  discount_in: [Int!]
  discount_not_in: [Int!]
  discount_lt: Int
  discount_lte: Int
  discount_gt: Int
  discount_gte: Int
  searchString: String
  searchString_not: String
  searchString_in: [String!]
  searchString_not_in: [String!]
  searchString_lt: String
  searchString_lte: String
  searchString_gt: String
  searchString_gte: String
  searchString_contains: String
  searchString_not_contains: String
  searchString_starts_with: String
  searchString_not_starts_with: String
  searchString_ends_with: String
  searchString_not_ends_with: String
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
}

type ProductSpec {
  id: ID!
  title: String!
  badges: [String!]!
  productSpecDescs(where: ProductSpecDescWhereInput, orderBy: ProductSpecDescOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductSpecDesc!]
  product: Product!
}

type ProductSpecConnection {
  pageInfo: PageInfo!
  edges: [ProductSpecEdge]!
  aggregate: AggregateProductSpec!
}

input ProductSpecCreatebadgesInput {
  set: [String!]
}

input ProductSpecCreateInput {
  title: String!
  badges: ProductSpecCreatebadgesInput
  productSpecDescs: ProductSpecDescCreateManyWithoutProductSpecInput
  product: ProductCreateOneWithoutSpecsInput!
}

input ProductSpecCreateManyWithoutProductInput {
  create: [ProductSpecCreateWithoutProductInput!]
  connect: [ProductSpecWhereUniqueInput!]
}

input ProductSpecCreateOneWithoutProductSpecDescsInput {
  create: ProductSpecCreateWithoutProductSpecDescsInput
  connect: ProductSpecWhereUniqueInput
}

input ProductSpecCreateWithoutProductInput {
  title: String!
  badges: ProductSpecCreatebadgesInput
  productSpecDescs: ProductSpecDescCreateManyWithoutProductSpecInput
}

input ProductSpecCreateWithoutProductSpecDescsInput {
  title: String!
  badges: ProductSpecCreatebadgesInput
  product: ProductCreateOneWithoutSpecsInput!
}

type ProductSpecDesc {
  id: ID!
  title: String
  texts: [String!]!
  productSpec: ProductSpec!
}

type ProductSpecDescConnection {
  pageInfo: PageInfo!
  edges: [ProductSpecDescEdge]!
  aggregate: AggregateProductSpecDesc!
}

input ProductSpecDescCreateInput {
  title: String
  texts: ProductSpecDescCreatetextsInput
  productSpec: ProductSpecCreateOneWithoutProductSpecDescsInput!
}

input ProductSpecDescCreateManyWithoutProductSpecInput {
  create: [ProductSpecDescCreateWithoutProductSpecInput!]
  connect: [ProductSpecDescWhereUniqueInput!]
}

input ProductSpecDescCreatetextsInput {
  set: [String!]
}

input ProductSpecDescCreateWithoutProductSpecInput {
  title: String
  texts: ProductSpecDescCreatetextsInput
}

type ProductSpecDescEdge {
  node: ProductSpecDesc!
  cursor: String!
}

enum ProductSpecDescOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductSpecDescPreviousValues {
  id: ID!
  title: String
  texts: [String!]!
}

input ProductSpecDescScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [ProductSpecDescScalarWhereInput!]
  OR: [ProductSpecDescScalarWhereInput!]
  NOT: [ProductSpecDescScalarWhereInput!]
}

type ProductSpecDescSubscriptionPayload {
  mutation: MutationType!
  node: ProductSpecDesc
  updatedFields: [String!]
  previousValues: ProductSpecDescPreviousValues
}

input ProductSpecDescSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductSpecDescWhereInput
  AND: [ProductSpecDescSubscriptionWhereInput!]
  OR: [ProductSpecDescSubscriptionWhereInput!]
  NOT: [ProductSpecDescSubscriptionWhereInput!]
}

input ProductSpecDescUpdateInput {
  title: String
  texts: ProductSpecDescUpdatetextsInput
  productSpec: ProductSpecUpdateOneRequiredWithoutProductSpecDescsInput
}

input ProductSpecDescUpdateManyDataInput {
  title: String
  texts: ProductSpecDescUpdatetextsInput
}

input ProductSpecDescUpdateManyMutationInput {
  title: String
  texts: ProductSpecDescUpdatetextsInput
}

input ProductSpecDescUpdateManyWithoutProductSpecInput {
  create: [ProductSpecDescCreateWithoutProductSpecInput!]
  delete: [ProductSpecDescWhereUniqueInput!]
  connect: [ProductSpecDescWhereUniqueInput!]
  disconnect: [ProductSpecDescWhereUniqueInput!]
  update: [ProductSpecDescUpdateWithWhereUniqueWithoutProductSpecInput!]
  upsert: [ProductSpecDescUpsertWithWhereUniqueWithoutProductSpecInput!]
  deleteMany: [ProductSpecDescScalarWhereInput!]
  updateMany: [ProductSpecDescUpdateManyWithWhereNestedInput!]
}

input ProductSpecDescUpdateManyWithWhereNestedInput {
  where: ProductSpecDescScalarWhereInput!
  data: ProductSpecDescUpdateManyDataInput!
}

input ProductSpecDescUpdatetextsInput {
  set: [String!]
}

input ProductSpecDescUpdateWithoutProductSpecDataInput {
  title: String
  texts: ProductSpecDescUpdatetextsInput
}

input ProductSpecDescUpdateWithWhereUniqueWithoutProductSpecInput {
  where: ProductSpecDescWhereUniqueInput!
  data: ProductSpecDescUpdateWithoutProductSpecDataInput!
}

input ProductSpecDescUpsertWithWhereUniqueWithoutProductSpecInput {
  where: ProductSpecDescWhereUniqueInput!
  update: ProductSpecDescUpdateWithoutProductSpecDataInput!
  create: ProductSpecDescCreateWithoutProductSpecInput!
}

input ProductSpecDescWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  productSpec: ProductSpecWhereInput
  AND: [ProductSpecDescWhereInput!]
  OR: [ProductSpecDescWhereInput!]
  NOT: [ProductSpecDescWhereInput!]
}

input ProductSpecDescWhereUniqueInput {
  id: ID
}

type ProductSpecEdge {
  node: ProductSpec!
  cursor: String!
}

enum ProductSpecOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductSpecPreviousValues {
  id: ID!
  title: String!
  badges: [String!]!
}

input ProductSpecScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [ProductSpecScalarWhereInput!]
  OR: [ProductSpecScalarWhereInput!]
  NOT: [ProductSpecScalarWhereInput!]
}

type ProductSpecSubscriptionPayload {
  mutation: MutationType!
  node: ProductSpec
  updatedFields: [String!]
  previousValues: ProductSpecPreviousValues
}

input ProductSpecSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductSpecWhereInput
  AND: [ProductSpecSubscriptionWhereInput!]
  OR: [ProductSpecSubscriptionWhereInput!]
  NOT: [ProductSpecSubscriptionWhereInput!]
}

input ProductSpecUpdatebadgesInput {
  set: [String!]
}

input ProductSpecUpdateInput {
  title: String
  badges: ProductSpecUpdatebadgesInput
  productSpecDescs: ProductSpecDescUpdateManyWithoutProductSpecInput
  product: ProductUpdateOneRequiredWithoutSpecsInput
}

input ProductSpecUpdateManyDataInput {
  title: String
  badges: ProductSpecUpdatebadgesInput
}

input ProductSpecUpdateManyMutationInput {
  title: String
  badges: ProductSpecUpdatebadgesInput
}

input ProductSpecUpdateManyWithoutProductInput {
  create: [ProductSpecCreateWithoutProductInput!]
  delete: [ProductSpecWhereUniqueInput!]
  connect: [ProductSpecWhereUniqueInput!]
  disconnect: [ProductSpecWhereUniqueInput!]
  update: [ProductSpecUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [ProductSpecUpsertWithWhereUniqueWithoutProductInput!]
  deleteMany: [ProductSpecScalarWhereInput!]
  updateMany: [ProductSpecUpdateManyWithWhereNestedInput!]
}

input ProductSpecUpdateManyWithWhereNestedInput {
  where: ProductSpecScalarWhereInput!
  data: ProductSpecUpdateManyDataInput!
}

input ProductSpecUpdateOneRequiredWithoutProductSpecDescsInput {
  create: ProductSpecCreateWithoutProductSpecDescsInput
  update: ProductSpecUpdateWithoutProductSpecDescsDataInput
  upsert: ProductSpecUpsertWithoutProductSpecDescsInput
  connect: ProductSpecWhereUniqueInput
}

input ProductSpecUpdateWithoutProductDataInput {
  title: String
  badges: ProductSpecUpdatebadgesInput
  productSpecDescs: ProductSpecDescUpdateManyWithoutProductSpecInput
}

input ProductSpecUpdateWithoutProductSpecDescsDataInput {
  title: String
  badges: ProductSpecUpdatebadgesInput
  product: ProductUpdateOneRequiredWithoutSpecsInput
}

input ProductSpecUpdateWithWhereUniqueWithoutProductInput {
  where: ProductSpecWhereUniqueInput!
  data: ProductSpecUpdateWithoutProductDataInput!
}

input ProductSpecUpsertWithoutProductSpecDescsInput {
  update: ProductSpecUpdateWithoutProductSpecDescsDataInput!
  create: ProductSpecCreateWithoutProductSpecDescsInput!
}

input ProductSpecUpsertWithWhereUniqueWithoutProductInput {
  where: ProductSpecWhereUniqueInput!
  update: ProductSpecUpdateWithoutProductDataInput!
  create: ProductSpecCreateWithoutProductInput!
}

input ProductSpecWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  productSpecDescs_every: ProductSpecDescWhereInput
  productSpecDescs_some: ProductSpecDescWhereInput
  productSpecDescs_none: ProductSpecDescWhereInput
  product: ProductWhereInput
  AND: [ProductSpecWhereInput!]
  OR: [ProductSpecWhereInput!]
  NOT: [ProductSpecWhereInput!]
}

input ProductSpecWhereUniqueInput {
  id: ID
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdatebadgesInput {
  set: [String!]
}

input ProductUpdateDataInput {
  name: String
  brand: String
  category: CategoryUpdateOneWithoutProductsInput
  price: String
  unit: String
  discount: Int
  images: ProductImageUpdateOneWithoutProductInput
  badges: ProductUpdatebadgesInput
  miscs: ProductUpdatemiscsInput
  variants: ProductVariantUpdateOneWithoutProductInput
  stars: StarsUpdateOneWithoutProductInput
  reviews: ReviewUpdateManyWithoutProductInput
  overviewTexts: ProductOverviewTextUpdateManyWithoutProductInput
  overviewImages: ProductOverviewImageUpdateManyWithoutProductInput
  specs: ProductSpecUpdateManyWithoutProductInput
  searchString: String
}

input ProductUpdateInput {
  name: String
  brand: String
  category: CategoryUpdateOneWithoutProductsInput
  price: String
  unit: String
  discount: Int
  images: ProductImageUpdateOneWithoutProductInput
  badges: ProductUpdatebadgesInput
  miscs: ProductUpdatemiscsInput
  variants: ProductVariantUpdateOneWithoutProductInput
  stars: StarsUpdateOneWithoutProductInput
  reviews: ReviewUpdateManyWithoutProductInput
  overviewTexts: ProductOverviewTextUpdateManyWithoutProductInput
  overviewImages: ProductOverviewImageUpdateManyWithoutProductInput
  specs: ProductSpecUpdateManyWithoutProductInput
  searchString: String
}

input ProductUpdateManyDataInput {
  name: String
  brand: String
  price: String
  unit: String
  discount: Int
  badges: ProductUpdatebadgesInput
  miscs: ProductUpdatemiscsInput
  searchString: String
}

input ProductUpdateManyInput {
  create: [ProductCreateInput!]
  update: [ProductUpdateWithWhereUniqueNestedInput!]
  upsert: [ProductUpsertWithWhereUniqueNestedInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyMutationInput {
  name: String
  brand: String
  price: String
  unit: String
  discount: Int
  badges: ProductUpdatebadgesInput
  miscs: ProductUpdatemiscsInput
  searchString: String
}

input ProductUpdateManyWithoutCategoryInput {
  create: [ProductCreateWithoutCategoryInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutCategoryInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutCategoryInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdatemiscsInput {
  set: [String!]
}

input ProductUpdateOneRequiredInput {
  create: ProductCreateInput
  update: ProductUpdateDataInput
  upsert: ProductUpsertNestedInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateOneRequiredWithoutImagesInput {
  create: ProductCreateWithoutImagesInput
  update: ProductUpdateWithoutImagesDataInput
  upsert: ProductUpsertWithoutImagesInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateOneRequiredWithoutOverviewImagesInput {
  create: ProductCreateWithoutOverviewImagesInput
  update: ProductUpdateWithoutOverviewImagesDataInput
  upsert: ProductUpsertWithoutOverviewImagesInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateOneRequiredWithoutOverviewTextsInput {
  create: ProductCreateWithoutOverviewTextsInput
  update: ProductUpdateWithoutOverviewTextsDataInput
  upsert: ProductUpsertWithoutOverviewTextsInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateOneRequiredWithoutReviewsInput {
  create: ProductCreateWithoutReviewsInput
  update: ProductUpdateWithoutReviewsDataInput
  upsert: ProductUpsertWithoutReviewsInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateOneRequiredWithoutSpecsInput {
  create: ProductCreateWithoutSpecsInput
  update: ProductUpdateWithoutSpecsDataInput
  upsert: ProductUpsertWithoutSpecsInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateOneRequiredWithoutStarsInput {
  create: ProductCreateWithoutStarsInput
  update: ProductUpdateWithoutStarsDataInput
  upsert: ProductUpsertWithoutStarsInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateOneRequiredWithoutVariantsInput {
  create: ProductCreateWithoutVariantsInput
  update: ProductUpdateWithoutVariantsDataInput
  upsert: ProductUpsertWithoutVariantsInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateWithoutCategoryDataInput {
  name: String
  brand: String
  price: String
  unit: String
  discount: Int
  images: ProductImageUpdateOneWithoutProductInput
  badges: ProductUpdatebadgesInput
  miscs: ProductUpdatemiscsInput
  variants: ProductVariantUpdateOneWithoutProductInput
  stars: StarsUpdateOneWithoutProductInput
  reviews: ReviewUpdateManyWithoutProductInput
  overviewTexts: ProductOverviewTextUpdateManyWithoutProductInput
  overviewImages: ProductOverviewImageUpdateManyWithoutProductInput
  specs: ProductSpecUpdateManyWithoutProductInput
  searchString: String
}

input ProductUpdateWithoutImagesDataInput {
  name: String
  brand: String
  category: CategoryUpdateOneWithoutProductsInput
  price: String
  unit: String
  discount: Int
  badges: ProductUpdatebadgesInput
  miscs: ProductUpdatemiscsInput
  variants: ProductVariantUpdateOneWithoutProductInput
  stars: StarsUpdateOneWithoutProductInput
  reviews: ReviewUpdateManyWithoutProductInput
  overviewTexts: ProductOverviewTextUpdateManyWithoutProductInput
  overviewImages: ProductOverviewImageUpdateManyWithoutProductInput
  specs: ProductSpecUpdateManyWithoutProductInput
  searchString: String
}

input ProductUpdateWithoutOverviewImagesDataInput {
  name: String
  brand: String
  category: CategoryUpdateOneWithoutProductsInput
  price: String
  unit: String
  discount: Int
  images: ProductImageUpdateOneWithoutProductInput
  badges: ProductUpdatebadgesInput
  miscs: ProductUpdatemiscsInput
  variants: ProductVariantUpdateOneWithoutProductInput
  stars: StarsUpdateOneWithoutProductInput
  reviews: ReviewUpdateManyWithoutProductInput
  overviewTexts: ProductOverviewTextUpdateManyWithoutProductInput
  specs: ProductSpecUpdateManyWithoutProductInput
  searchString: String
}

input ProductUpdateWithoutOverviewTextsDataInput {
  name: String
  brand: String
  category: CategoryUpdateOneWithoutProductsInput
  price: String
  unit: String
  discount: Int
  images: ProductImageUpdateOneWithoutProductInput
  badges: ProductUpdatebadgesInput
  miscs: ProductUpdatemiscsInput
  variants: ProductVariantUpdateOneWithoutProductInput
  stars: StarsUpdateOneWithoutProductInput
  reviews: ReviewUpdateManyWithoutProductInput
  overviewImages: ProductOverviewImageUpdateManyWithoutProductInput
  specs: ProductSpecUpdateManyWithoutProductInput
  searchString: String
}

input ProductUpdateWithoutReviewsDataInput {
  name: String
  brand: String
  category: CategoryUpdateOneWithoutProductsInput
  price: String
  unit: String
  discount: Int
  images: ProductImageUpdateOneWithoutProductInput
  badges: ProductUpdatebadgesInput
  miscs: ProductUpdatemiscsInput
  variants: ProductVariantUpdateOneWithoutProductInput
  stars: StarsUpdateOneWithoutProductInput
  overviewTexts: ProductOverviewTextUpdateManyWithoutProductInput
  overviewImages: ProductOverviewImageUpdateManyWithoutProductInput
  specs: ProductSpecUpdateManyWithoutProductInput
  searchString: String
}

input ProductUpdateWithoutSpecsDataInput {
  name: String
  brand: String
  category: CategoryUpdateOneWithoutProductsInput
  price: String
  unit: String
  discount: Int
  images: ProductImageUpdateOneWithoutProductInput
  badges: ProductUpdatebadgesInput
  miscs: ProductUpdatemiscsInput
  variants: ProductVariantUpdateOneWithoutProductInput
  stars: StarsUpdateOneWithoutProductInput
  reviews: ReviewUpdateManyWithoutProductInput
  overviewTexts: ProductOverviewTextUpdateManyWithoutProductInput
  overviewImages: ProductOverviewImageUpdateManyWithoutProductInput
  searchString: String
}

input ProductUpdateWithoutStarsDataInput {
  name: String
  brand: String
  category: CategoryUpdateOneWithoutProductsInput
  price: String
  unit: String
  discount: Int
  images: ProductImageUpdateOneWithoutProductInput
  badges: ProductUpdatebadgesInput
  miscs: ProductUpdatemiscsInput
  variants: ProductVariantUpdateOneWithoutProductInput
  reviews: ReviewUpdateManyWithoutProductInput
  overviewTexts: ProductOverviewTextUpdateManyWithoutProductInput
  overviewImages: ProductOverviewImageUpdateManyWithoutProductInput
  specs: ProductSpecUpdateManyWithoutProductInput
  searchString: String
}

input ProductUpdateWithoutVariantsDataInput {
  name: String
  brand: String
  category: CategoryUpdateOneWithoutProductsInput
  price: String
  unit: String
  discount: Int
  images: ProductImageUpdateOneWithoutProductInput
  badges: ProductUpdatebadgesInput
  miscs: ProductUpdatemiscsInput
  stars: StarsUpdateOneWithoutProductInput
  reviews: ReviewUpdateManyWithoutProductInput
  overviewTexts: ProductOverviewTextUpdateManyWithoutProductInput
  overviewImages: ProductOverviewImageUpdateManyWithoutProductInput
  specs: ProductSpecUpdateManyWithoutProductInput
  searchString: String
}

input ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateDataInput!
}

input ProductUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutCategoryDataInput!
}

input ProductUpsertNestedInput {
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductUpsertWithoutImagesInput {
  update: ProductUpdateWithoutImagesDataInput!
  create: ProductCreateWithoutImagesInput!
}

input ProductUpsertWithoutOverviewImagesInput {
  update: ProductUpdateWithoutOverviewImagesDataInput!
  create: ProductCreateWithoutOverviewImagesInput!
}

input ProductUpsertWithoutOverviewTextsInput {
  update: ProductUpdateWithoutOverviewTextsDataInput!
  create: ProductCreateWithoutOverviewTextsInput!
}

input ProductUpsertWithoutReviewsInput {
  update: ProductUpdateWithoutReviewsDataInput!
  create: ProductCreateWithoutReviewsInput!
}

input ProductUpsertWithoutSpecsInput {
  update: ProductUpdateWithoutSpecsDataInput!
  create: ProductCreateWithoutSpecsInput!
}

input ProductUpsertWithoutStarsInput {
  update: ProductUpdateWithoutStarsDataInput!
  create: ProductCreateWithoutStarsInput!
}

input ProductUpsertWithoutVariantsInput {
  update: ProductUpdateWithoutVariantsDataInput!
  create: ProductCreateWithoutVariantsInput!
}

input ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutCategoryDataInput!
  create: ProductCreateWithoutCategoryInput!
}

type ProductVariant {
  id: ID!
  product: Product!
  colors(where: VariantWhereInput, orderBy: VariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Variant!]
  sizes(where: VariantWhereInput, orderBy: VariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Variant!]
  specs: ProductVariantSpec
}

type ProductVariantConnection {
  pageInfo: PageInfo!
  edges: [ProductVariantEdge]!
  aggregate: AggregateProductVariant!
}

input ProductVariantCreateInput {
  product: ProductCreateOneWithoutVariantsInput!
  colors: VariantCreateManyInput
  sizes: VariantCreateManyInput
  specs: ProductVariantSpecCreateOneWithoutProductVariantInput
}

input ProductVariantCreateOneWithoutProductInput {
  create: ProductVariantCreateWithoutProductInput
  connect: ProductVariantWhereUniqueInput
}

input ProductVariantCreateOneWithoutSpecsInput {
  create: ProductVariantCreateWithoutSpecsInput
  connect: ProductVariantWhereUniqueInput
}

input ProductVariantCreateWithoutProductInput {
  colors: VariantCreateManyInput
  sizes: VariantCreateManyInput
  specs: ProductVariantSpecCreateOneWithoutProductVariantInput
}

input ProductVariantCreateWithoutSpecsInput {
  product: ProductCreateOneWithoutVariantsInput!
  colors: VariantCreateManyInput
  sizes: VariantCreateManyInput
}

type ProductVariantEdge {
  node: ProductVariant!
  cursor: String!
}

enum ProductVariantOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductVariantPreviousValues {
  id: ID!
}

type ProductVariantSpec {
  id: ID!
  productVariant: ProductVariant!
  color: Variant
  size: Variant
}

type ProductVariantSpecConnection {
  pageInfo: PageInfo!
  edges: [ProductVariantSpecEdge]!
  aggregate: AggregateProductVariantSpec!
}

input ProductVariantSpecCreateInput {
  productVariant: ProductVariantCreateOneWithoutSpecsInput!
  color: VariantCreateOneInput
  size: VariantCreateOneInput
}

input ProductVariantSpecCreateOneWithoutProductVariantInput {
  create: ProductVariantSpecCreateWithoutProductVariantInput
  connect: ProductVariantSpecWhereUniqueInput
}

input ProductVariantSpecCreateWithoutProductVariantInput {
  color: VariantCreateOneInput
  size: VariantCreateOneInput
}

type ProductVariantSpecEdge {
  node: ProductVariantSpec!
  cursor: String!
}

enum ProductVariantSpecOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductVariantSpecPreviousValues {
  id: ID!
}

type ProductVariantSpecSubscriptionPayload {
  mutation: MutationType!
  node: ProductVariantSpec
  updatedFields: [String!]
  previousValues: ProductVariantSpecPreviousValues
}

input ProductVariantSpecSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductVariantSpecWhereInput
  AND: [ProductVariantSpecSubscriptionWhereInput!]
  OR: [ProductVariantSpecSubscriptionWhereInput!]
  NOT: [ProductVariantSpecSubscriptionWhereInput!]
}

input ProductVariantSpecUpdateInput {
  productVariant: ProductVariantUpdateOneRequiredWithoutSpecsInput
  color: VariantUpdateOneInput
  size: VariantUpdateOneInput
}

input ProductVariantSpecUpdateOneWithoutProductVariantInput {
  create: ProductVariantSpecCreateWithoutProductVariantInput
  update: ProductVariantSpecUpdateWithoutProductVariantDataInput
  upsert: ProductVariantSpecUpsertWithoutProductVariantInput
  delete: Boolean
  disconnect: Boolean
  connect: ProductVariantSpecWhereUniqueInput
}

input ProductVariantSpecUpdateWithoutProductVariantDataInput {
  color: VariantUpdateOneInput
  size: VariantUpdateOneInput
}

input ProductVariantSpecUpsertWithoutProductVariantInput {
  update: ProductVariantSpecUpdateWithoutProductVariantDataInput!
  create: ProductVariantSpecCreateWithoutProductVariantInput!
}

input ProductVariantSpecWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  productVariant: ProductVariantWhereInput
  color: VariantWhereInput
  size: VariantWhereInput
  AND: [ProductVariantSpecWhereInput!]
  OR: [ProductVariantSpecWhereInput!]
  NOT: [ProductVariantSpecWhereInput!]
}

input ProductVariantSpecWhereUniqueInput {
  id: ID
}

type ProductVariantSubscriptionPayload {
  mutation: MutationType!
  node: ProductVariant
  updatedFields: [String!]
  previousValues: ProductVariantPreviousValues
}

input ProductVariantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductVariantWhereInput
  AND: [ProductVariantSubscriptionWhereInput!]
  OR: [ProductVariantSubscriptionWhereInput!]
  NOT: [ProductVariantSubscriptionWhereInput!]
}

input ProductVariantUpdateInput {
  product: ProductUpdateOneRequiredWithoutVariantsInput
  colors: VariantUpdateManyInput
  sizes: VariantUpdateManyInput
  specs: ProductVariantSpecUpdateOneWithoutProductVariantInput
}

input ProductVariantUpdateOneRequiredWithoutSpecsInput {
  create: ProductVariantCreateWithoutSpecsInput
  update: ProductVariantUpdateWithoutSpecsDataInput
  upsert: ProductVariantUpsertWithoutSpecsInput
  connect: ProductVariantWhereUniqueInput
}

input ProductVariantUpdateOneWithoutProductInput {
  create: ProductVariantCreateWithoutProductInput
  update: ProductVariantUpdateWithoutProductDataInput
  upsert: ProductVariantUpsertWithoutProductInput
  delete: Boolean
  disconnect: Boolean
  connect: ProductVariantWhereUniqueInput
}

input ProductVariantUpdateWithoutProductDataInput {
  colors: VariantUpdateManyInput
  sizes: VariantUpdateManyInput
  specs: ProductVariantSpecUpdateOneWithoutProductVariantInput
}

input ProductVariantUpdateWithoutSpecsDataInput {
  product: ProductUpdateOneRequiredWithoutVariantsInput
  colors: VariantUpdateManyInput
  sizes: VariantUpdateManyInput
}

input ProductVariantUpsertWithoutProductInput {
  update: ProductVariantUpdateWithoutProductDataInput!
  create: ProductVariantCreateWithoutProductInput!
}

input ProductVariantUpsertWithoutSpecsInput {
  update: ProductVariantUpdateWithoutSpecsDataInput!
  create: ProductVariantCreateWithoutSpecsInput!
}

input ProductVariantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  product: ProductWhereInput
  colors_every: VariantWhereInput
  colors_some: VariantWhereInput
  colors_none: VariantWhereInput
  sizes_every: VariantWhereInput
  sizes_some: VariantWhereInput
  sizes_none: VariantWhereInput
  specs: ProductVariantSpecWhereInput
  AND: [ProductVariantWhereInput!]
  OR: [ProductVariantWhereInput!]
  NOT: [ProductVariantWhereInput!]
}

input ProductVariantWhereUniqueInput {
  id: ID
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  brand: String
  brand_not: String
  brand_in: [String!]
  brand_not_in: [String!]
  brand_lt: String
  brand_lte: String
  brand_gt: String
  brand_gte: String
  brand_contains: String
  brand_not_contains: String
  brand_starts_with: String
  brand_not_starts_with: String
  brand_ends_with: String
  brand_not_ends_with: String
  category: CategoryWhereInput
  price: String
  price_not: String
  price_in: [String!]
  price_not_in: [String!]
  price_lt: String
  price_lte: String
  price_gt: String
  price_gte: String
  price_contains: String
  price_not_contains: String
  price_starts_with: String
  price_not_starts_with: String
  price_ends_with: String
  price_not_ends_with: String
  unit: String
  unit_not: String
  unit_in: [String!]
  unit_not_in: [String!]
  unit_lt: String
  unit_lte: String
  unit_gt: String
  unit_gte: String
  unit_contains: String
  unit_not_contains: String
  unit_starts_with: String
  unit_not_starts_with: String
  unit_ends_with: String
  unit_not_ends_with: String
  discount: Int
  discount_not: Int
  discount_in: [Int!]
  discount_not_in: [Int!]
  discount_lt: Int
  discount_lte: Int
  discount_gt: Int
  discount_gte: Int
  images: ProductImageWhereInput
  variants: ProductVariantWhereInput
  stars: StarsWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  overviewTexts_every: ProductOverviewTextWhereInput
  overviewTexts_some: ProductOverviewTextWhereInput
  overviewTexts_none: ProductOverviewTextWhereInput
  overviewImages_every: ProductOverviewImageWhereInput
  overviewImages_some: ProductOverviewImageWhereInput
  overviewImages_none: ProductOverviewImageWhereInput
  specs_every: ProductSpecWhereInput
  specs_some: ProductSpecWhereInput
  specs_none: ProductSpecWhereInput
  searchString: String
  searchString_not: String
  searchString_in: [String!]
  searchString_not_in: [String!]
  searchString_lt: String
  searchString_lte: String
  searchString_gt: String
  searchString_gte: String
  searchString_contains: String
  searchString_not_contains: String
  searchString_starts_with: String
  searchString_not_starts_with: String
  searchString_ends_with: String
  searchString_not_ends_with: String
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  banner(where: BannerWhereUniqueInput!): Banner
  banners(where: BannerWhereInput, orderBy: BannerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Banner]!
  bannersConnection(where: BannerWhereInput, orderBy: BannerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BannerConnection!
  bannerImage(where: BannerImageWhereUniqueInput!): BannerImage
  bannerImages(where: BannerImageWhereInput, orderBy: BannerImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BannerImage]!
  bannerImagesConnection(where: BannerImageWhereInput, orderBy: BannerImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BannerImageConnection!
  cart(where: CartWhereUniqueInput!): Cart
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart]!
  cartsConnection(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartConnection!
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  popularCategory(where: PopularCategoryWhereUniqueInput!): PopularCategory
  popularCategories(where: PopularCategoryWhereInput, orderBy: PopularCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PopularCategory]!
  popularCategoriesConnection(where: PopularCategoryWhereInput, orderBy: PopularCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PopularCategoryConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  productImage(where: ProductImageWhereUniqueInput!): ProductImage
  productImages(where: ProductImageWhereInput, orderBy: ProductImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductImage]!
  productImagesConnection(where: ProductImageWhereInput, orderBy: ProductImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductImageConnection!
  productOverviewImage(where: ProductOverviewImageWhereUniqueInput!): ProductOverviewImage
  productOverviewImages(where: ProductOverviewImageWhereInput, orderBy: ProductOverviewImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductOverviewImage]!
  productOverviewImagesConnection(where: ProductOverviewImageWhereInput, orderBy: ProductOverviewImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductOverviewImageConnection!
  productOverviewText(where: ProductOverviewTextWhereUniqueInput!): ProductOverviewText
  productOverviewTexts(where: ProductOverviewTextWhereInput, orderBy: ProductOverviewTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductOverviewText]!
  productOverviewTextsConnection(where: ProductOverviewTextWhereInput, orderBy: ProductOverviewTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductOverviewTextConnection!
  productSpec(where: ProductSpecWhereUniqueInput!): ProductSpec
  productSpecs(where: ProductSpecWhereInput, orderBy: ProductSpecOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductSpec]!
  productSpecsConnection(where: ProductSpecWhereInput, orderBy: ProductSpecOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductSpecConnection!
  productSpecDesc(where: ProductSpecDescWhereUniqueInput!): ProductSpecDesc
  productSpecDescs(where: ProductSpecDescWhereInput, orderBy: ProductSpecDescOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductSpecDesc]!
  productSpecDescsConnection(where: ProductSpecDescWhereInput, orderBy: ProductSpecDescOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductSpecDescConnection!
  productVariant(where: ProductVariantWhereUniqueInput!): ProductVariant
  productVariants(where: ProductVariantWhereInput, orderBy: ProductVariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductVariant]!
  productVariantsConnection(where: ProductVariantWhereInput, orderBy: ProductVariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductVariantConnection!
  productVariantSpec(where: ProductVariantSpecWhereUniqueInput!): ProductVariantSpec
  productVariantSpecs(where: ProductVariantSpecWhereInput, orderBy: ProductVariantSpecOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductVariantSpec]!
  productVariantSpecsConnection(where: ProductVariantSpecWhereInput, orderBy: ProductVariantSpecOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductVariantSpecConnection!
  review(where: ReviewWhereUniqueInput!): Review
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  stars(where: StarsWhereUniqueInput!): Stars
  starses(where: StarsWhereInput, orderBy: StarsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stars]!
  starsesConnection(where: StarsWhereInput, orderBy: StarsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StarsConnection!
  topPick(where: TopPickWhereUniqueInput!): TopPick
  topPicks(where: TopPickWhereInput, orderBy: TopPickOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TopPick]!
  topPicksConnection(where: TopPickWhereInput, orderBy: TopPickOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TopPickConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  variant(where: VariantWhereUniqueInput!): Variant
  variants(where: VariantWhereInput, orderBy: VariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Variant]!
  variantsConnection(where: VariantWhereInput, orderBy: VariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VariantConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Review {
  id: ID!
  createdAt: DateTime!
  title: String
  description: String
  product: Product!
  author: User
  votes: Vote
}

type ReviewConnection {
  pageInfo: PageInfo!
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  title: String
  description: String
  product: ProductCreateOneWithoutReviewsInput!
  author: UserCreateOneWithoutReviewsInput
  votes: VoteCreateOneWithoutReviewInput
}

input ReviewCreateManyWithoutAuthorInput {
  create: [ReviewCreateWithoutAuthorInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutProductInput {
  create: [ReviewCreateWithoutProductInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateOneWithoutVotesInput {
  create: ReviewCreateWithoutVotesInput
  connect: ReviewWhereUniqueInput
}

input ReviewCreateWithoutAuthorInput {
  title: String
  description: String
  product: ProductCreateOneWithoutReviewsInput!
  votes: VoteCreateOneWithoutReviewInput
}

input ReviewCreateWithoutProductInput {
  title: String
  description: String
  author: UserCreateOneWithoutReviewsInput
  votes: VoteCreateOneWithoutReviewInput
}

input ReviewCreateWithoutVotesInput {
  title: String
  description: String
  product: ProductCreateOneWithoutReviewsInput!
  author: UserCreateOneWithoutReviewsInput
}

type ReviewEdge {
  node: Review!
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReviewPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String
  description: String
}

input ReviewScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [ReviewScalarWhereInput!]
  OR: [ReviewScalarWhereInput!]
  NOT: [ReviewScalarWhereInput!]
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
  AND: [ReviewSubscriptionWhereInput!]
  OR: [ReviewSubscriptionWhereInput!]
  NOT: [ReviewSubscriptionWhereInput!]
}

input ReviewUpdateInput {
  title: String
  description: String
  product: ProductUpdateOneRequiredWithoutReviewsInput
  author: UserUpdateOneWithoutReviewsInput
  votes: VoteUpdateOneWithoutReviewInput
}

input ReviewUpdateManyDataInput {
  title: String
  description: String
}

input ReviewUpdateManyMutationInput {
  title: String
  description: String
}

input ReviewUpdateManyWithoutAuthorInput {
  create: [ReviewCreateWithoutAuthorInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithoutProductInput {
  create: [ReviewCreateWithoutProductInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutProductInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput!
  data: ReviewUpdateManyDataInput!
}

input ReviewUpdateOneWithoutVotesInput {
  create: ReviewCreateWithoutVotesInput
  update: ReviewUpdateWithoutVotesDataInput
  upsert: ReviewUpsertWithoutVotesInput
  delete: Boolean
  disconnect: Boolean
  connect: ReviewWhereUniqueInput
}

input ReviewUpdateWithoutAuthorDataInput {
  title: String
  description: String
  product: ProductUpdateOneRequiredWithoutReviewsInput
  votes: VoteUpdateOneWithoutReviewInput
}

input ReviewUpdateWithoutProductDataInput {
  title: String
  description: String
  author: UserUpdateOneWithoutReviewsInput
  votes: VoteUpdateOneWithoutReviewInput
}

input ReviewUpdateWithoutVotesDataInput {
  title: String
  description: String
  product: ProductUpdateOneRequiredWithoutReviewsInput
  author: UserUpdateOneWithoutReviewsInput
}

input ReviewUpdateWithWhereUniqueWithoutAuthorInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutAuthorDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutProductInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutProductDataInput!
}

input ReviewUpsertWithoutVotesInput {
  update: ReviewUpdateWithoutVotesDataInput!
  create: ReviewCreateWithoutVotesInput!
}

input ReviewUpsertWithWhereUniqueWithoutAuthorInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutAuthorDataInput!
  create: ReviewCreateWithoutAuthorInput!
}

input ReviewUpsertWithWhereUniqueWithoutProductInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutProductDataInput!
  create: ReviewCreateWithoutProductInput!
}

input ReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  product: ProductWhereInput
  author: UserWhereInput
  votes: VoteWhereInput
  AND: [ReviewWhereInput!]
  OR: [ReviewWhereInput!]
  NOT: [ReviewWhereInput!]
}

input ReviewWhereUniqueInput {
  id: ID
}

type Stars {
  id: ID!
  product: Product!
  one: Int
  two: Int
  three: Int
  four: Int
  five: Int
}

type StarsConnection {
  pageInfo: PageInfo!
  edges: [StarsEdge]!
  aggregate: AggregateStars!
}

input StarsCreateInput {
  product: ProductCreateOneWithoutStarsInput!
  one: Int
  two: Int
  three: Int
  four: Int
  five: Int
}

input StarsCreateOneWithoutProductInput {
  create: StarsCreateWithoutProductInput
  connect: StarsWhereUniqueInput
}

input StarsCreateWithoutProductInput {
  one: Int
  two: Int
  three: Int
  four: Int
  five: Int
}

type StarsEdge {
  node: Stars!
  cursor: String!
}

enum StarsOrderByInput {
  id_ASC
  id_DESC
  one_ASC
  one_DESC
  two_ASC
  two_DESC
  three_ASC
  three_DESC
  four_ASC
  four_DESC
  five_ASC
  five_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StarsPreviousValues {
  id: ID!
  one: Int
  two: Int
  three: Int
  four: Int
  five: Int
}

type StarsSubscriptionPayload {
  mutation: MutationType!
  node: Stars
  updatedFields: [String!]
  previousValues: StarsPreviousValues
}

input StarsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StarsWhereInput
  AND: [StarsSubscriptionWhereInput!]
  OR: [StarsSubscriptionWhereInput!]
  NOT: [StarsSubscriptionWhereInput!]
}

input StarsUpdateInput {
  product: ProductUpdateOneRequiredWithoutStarsInput
  one: Int
  two: Int
  three: Int
  four: Int
  five: Int
}

input StarsUpdateManyMutationInput {
  one: Int
  two: Int
  three: Int
  four: Int
  five: Int
}

input StarsUpdateOneWithoutProductInput {
  create: StarsCreateWithoutProductInput
  update: StarsUpdateWithoutProductDataInput
  upsert: StarsUpsertWithoutProductInput
  delete: Boolean
  disconnect: Boolean
  connect: StarsWhereUniqueInput
}

input StarsUpdateWithoutProductDataInput {
  one: Int
  two: Int
  three: Int
  four: Int
  five: Int
}

input StarsUpsertWithoutProductInput {
  update: StarsUpdateWithoutProductDataInput!
  create: StarsCreateWithoutProductInput!
}

input StarsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  product: ProductWhereInput
  one: Int
  one_not: Int
  one_in: [Int!]
  one_not_in: [Int!]
  one_lt: Int
  one_lte: Int
  one_gt: Int
  one_gte: Int
  two: Int
  two_not: Int
  two_in: [Int!]
  two_not_in: [Int!]
  two_lt: Int
  two_lte: Int
  two_gt: Int
  two_gte: Int
  three: Int
  three_not: Int
  three_in: [Int!]
  three_not_in: [Int!]
  three_lt: Int
  three_lte: Int
  three_gt: Int
  three_gte: Int
  four: Int
  four_not: Int
  four_in: [Int!]
  four_not_in: [Int!]
  four_lt: Int
  four_lte: Int
  four_gt: Int
  four_gte: Int
  five: Int
  five_not: Int
  five_in: [Int!]
  five_not_in: [Int!]
  five_lt: Int
  five_lte: Int
  five_gt: Int
  five_gte: Int
  AND: [StarsWhereInput!]
  OR: [StarsWhereInput!]
  NOT: [StarsWhereInput!]
}

input StarsWhereUniqueInput {
  id: ID
}

type Subscription {
  banner(where: BannerSubscriptionWhereInput): BannerSubscriptionPayload
  bannerImage(where: BannerImageSubscriptionWhereInput): BannerImageSubscriptionPayload
  cart(where: CartSubscriptionWhereInput): CartSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  popularCategory(where: PopularCategorySubscriptionWhereInput): PopularCategorySubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  productImage(where: ProductImageSubscriptionWhereInput): ProductImageSubscriptionPayload
  productOverviewImage(where: ProductOverviewImageSubscriptionWhereInput): ProductOverviewImageSubscriptionPayload
  productOverviewText(where: ProductOverviewTextSubscriptionWhereInput): ProductOverviewTextSubscriptionPayload
  productSpec(where: ProductSpecSubscriptionWhereInput): ProductSpecSubscriptionPayload
  productSpecDesc(where: ProductSpecDescSubscriptionWhereInput): ProductSpecDescSubscriptionPayload
  productVariant(where: ProductVariantSubscriptionWhereInput): ProductVariantSubscriptionPayload
  productVariantSpec(where: ProductVariantSpecSubscriptionWhereInput): ProductVariantSpecSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  stars(where: StarsSubscriptionWhereInput): StarsSubscriptionPayload
  topPick(where: TopPickSubscriptionWhereInput): TopPickSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  variant(where: VariantSubscriptionWhereInput): VariantSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type TopPick {
  id: ID!
  name: String!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

type TopPickConnection {
  pageInfo: PageInfo!
  edges: [TopPickEdge]!
  aggregate: AggregateTopPick!
}

input TopPickCreateInput {
  name: String!
  products: ProductCreateManyInput
}

type TopPickEdge {
  node: TopPick!
  cursor: String!
}

enum TopPickOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TopPickPreviousValues {
  id: ID!
  name: String!
}

type TopPickSubscriptionPayload {
  mutation: MutationType!
  node: TopPick
  updatedFields: [String!]
  previousValues: TopPickPreviousValues
}

input TopPickSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TopPickWhereInput
  AND: [TopPickSubscriptionWhereInput!]
  OR: [TopPickSubscriptionWhereInput!]
  NOT: [TopPickSubscriptionWhereInput!]
}

input TopPickUpdateInput {
  name: String
  products: ProductUpdateManyInput
}

input TopPickUpdateManyMutationInput {
  name: String
}

input TopPickWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  AND: [TopPickWhereInput!]
  OR: [TopPickWhereInput!]
  NOT: [TopPickWhereInput!]
}

input TopPickWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  reviews: ReviewCreateManyWithoutAuthorInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutReviewsInput {
  email: String!
  password: String!
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
  reviews: ReviewUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  reviews: ReviewUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  update: UserUpdateWithoutReviewsDataInput
  upsert: UserUpsertWithoutReviewsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutReviewsDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput!
  create: UserCreateWithoutReviewsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Variant {
  id: ID!
  name: String!
  value: String!
  type: VariantType
}

type VariantConnection {
  pageInfo: PageInfo!
  edges: [VariantEdge]!
  aggregate: AggregateVariant!
}

input VariantCreateInput {
  name: String!
  value: String!
  type: VariantType
}

input VariantCreateManyInput {
  create: [VariantCreateInput!]
  connect: [VariantWhereUniqueInput!]
}

input VariantCreateOneInput {
  create: VariantCreateInput
  connect: VariantWhereUniqueInput
}

type VariantEdge {
  node: Variant!
  cursor: String!
}

enum VariantOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  value_ASC
  value_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VariantPreviousValues {
  id: ID!
  name: String!
  value: String!
  type: VariantType
}

input VariantScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  type: VariantType
  type_not: VariantType
  type_in: [VariantType!]
  type_not_in: [VariantType!]
  AND: [VariantScalarWhereInput!]
  OR: [VariantScalarWhereInput!]
  NOT: [VariantScalarWhereInput!]
}

type VariantSubscriptionPayload {
  mutation: MutationType!
  node: Variant
  updatedFields: [String!]
  previousValues: VariantPreviousValues
}

input VariantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VariantWhereInput
  AND: [VariantSubscriptionWhereInput!]
  OR: [VariantSubscriptionWhereInput!]
  NOT: [VariantSubscriptionWhereInput!]
}

enum VariantType {
  COLOR
  SIZE
}

input VariantUpdateDataInput {
  name: String
  value: String
  type: VariantType
}

input VariantUpdateInput {
  name: String
  value: String
  type: VariantType
}

input VariantUpdateManyDataInput {
  name: String
  value: String
  type: VariantType
}

input VariantUpdateManyInput {
  create: [VariantCreateInput!]
  update: [VariantUpdateWithWhereUniqueNestedInput!]
  upsert: [VariantUpsertWithWhereUniqueNestedInput!]
  delete: [VariantWhereUniqueInput!]
  connect: [VariantWhereUniqueInput!]
  disconnect: [VariantWhereUniqueInput!]
  deleteMany: [VariantScalarWhereInput!]
  updateMany: [VariantUpdateManyWithWhereNestedInput!]
}

input VariantUpdateManyMutationInput {
  name: String
  value: String
  type: VariantType
}

input VariantUpdateManyWithWhereNestedInput {
  where: VariantScalarWhereInput!
  data: VariantUpdateManyDataInput!
}

input VariantUpdateOneInput {
  create: VariantCreateInput
  update: VariantUpdateDataInput
  upsert: VariantUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: VariantWhereUniqueInput
}

input VariantUpdateWithWhereUniqueNestedInput {
  where: VariantWhereUniqueInput!
  data: VariantUpdateDataInput!
}

input VariantUpsertNestedInput {
  update: VariantUpdateDataInput!
  create: VariantCreateInput!
}

input VariantUpsertWithWhereUniqueNestedInput {
  where: VariantWhereUniqueInput!
  update: VariantUpdateDataInput!
  create: VariantCreateInput!
}

input VariantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  type: VariantType
  type_not: VariantType
  type_in: [VariantType!]
  type_not_in: [VariantType!]
  AND: [VariantWhereInput!]
  OR: [VariantWhereInput!]
  NOT: [VariantWhereInput!]
}

input VariantWhereUniqueInput {
  id: ID
}

type Vote {
  id: ID!
  positive: Int
  negative: Int
  review: Review
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  positive: Int
  negative: Int
  review: ReviewCreateOneWithoutVotesInput
}

input VoteCreateOneWithoutReviewInput {
  create: VoteCreateWithoutReviewInput
  connect: VoteWhereUniqueInput
}

input VoteCreateWithoutReviewInput {
  positive: Int
  negative: Int
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  positive_ASC
  positive_DESC
  negative_ASC
  negative_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VotePreviousValues {
  id: ID!
  positive: Int
  negative: Int
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  positive: Int
  negative: Int
  review: ReviewUpdateOneWithoutVotesInput
}

input VoteUpdateManyMutationInput {
  positive: Int
  negative: Int
}

input VoteUpdateOneWithoutReviewInput {
  create: VoteCreateWithoutReviewInput
  update: VoteUpdateWithoutReviewDataInput
  upsert: VoteUpsertWithoutReviewInput
  delete: Boolean
  disconnect: Boolean
  connect: VoteWhereUniqueInput
}

input VoteUpdateWithoutReviewDataInput {
  positive: Int
  negative: Int
}

input VoteUpsertWithoutReviewInput {
  update: VoteUpdateWithoutReviewDataInput!
  create: VoteCreateWithoutReviewInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  positive: Int
  positive_not: Int
  positive_in: [Int!]
  positive_not_in: [Int!]
  positive_lt: Int
  positive_lte: Int
  positive_gt: Int
  positive_gte: Int
  negative: Int
  negative_not: Int
  negative_in: [Int!]
  negative_not_in: [Int!]
  negative_lt: Int
  negative_lte: Int
  negative_gt: Int
  negative_gte: Int
  review: ReviewWhereInput
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`
      }
    