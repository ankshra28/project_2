/* ==========================================
   PRODUCT UTILITIES
   Balloon Decoration in Varanasi & Haldi Mehndi
========================================== */

/* ===========================
   Category Prefix
=========================== */

const CATEGORY_PREFIX = {
  Birthday: "BD",
  Anniversary: "AN",
  Wedding: "WD",
  Proposal: "PR",
  "Baby Shower": "BS",
  "Baby Welcome": "BW",
  Room: "RM",
  Kids: "KD",
  Haldi: "HD",
  Mehndi: "MH",
  Engagement: "EG",
  Other: "OT",
};

/* ===========================
   Category Prefix
=========================== */

export const getCategoryPrefix = (
  category = ""
) => {

  return (
    CATEGORY_PREFIX[category] ||
    category
      .trim()
      .substring(0, 2)
      .toUpperCase() ||
    "PD"
  );

};

/* ===========================
   Product ID
=========================== */

export const createProductId = (
  category,
  index
) => {

  const prefix =
    getCategoryPrefix(category);

  const number = String(index + 1).padStart(
    3,
    "0"
  );

  return `${prefix}-${number}`;

};

/* ===========================
   Product Slug
=========================== */

export const createSlug = (
  title = ""
) => {

  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

};

/* ===========================
   Product Reference
=========================== */

export const getProductReference = (
  product
) => {

  return {

    id: product.id,

    slug: product.slug,

    title: product.title,

    category: product.category,

    price: Number(product.price),

    image: product.image,

  };

};

/* ===========================
   Prepare Products
=========================== */

export const prepareProducts = (
  products = [],
  category = "Other"
) => {

  return products.map(
    (product, index) => ({

      ...product,

      id:
        product.id ||
        createProductId(
          category,
          index
        ),

      slug:
        product.slug ||
        createSlug(product.title),

      category:
        product.category ||
        category,

    })
  );

};

/* ===========================
   Find Product
=========================== */

export const findProductById = (
  products = [],
  productId
) => {

  return (
    products.find(
      (product) =>
        product.id === productId
    ) || null
  );

};

/* ===========================
   Find Product By Slug
=========================== */

export const findProductBySlug = (
  products = [],
  slug
) => {

  return (
    products.find(
      (product) =>
        product.slug === slug
    ) || null
  );

};

/* ===========================
   Product URL
=========================== */

export const createProductUrl = (
  product
) => {

  return `/product/${product.id}/${product.slug}`;

};

/* ===========================
   Payment URL
=========================== */

export const createPaymentUrl = (
  productId,
  paymentToken
) => {

  return `/payment/${productId}/${paymentToken}`;

};

/* ===========================
   Verification URL
=========================== */

export const createVerifyUrl = (
  paymentToken
) => {

  return `/payment/verify/${paymentToken}`;

};

/* ===========================
   Invoice Reference
=========================== */

export const createInvoiceReference = (
  invoiceId,
  productId
) => {

  return `${invoiceId}-${productId}`;

};