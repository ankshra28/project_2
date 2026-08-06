import birthdayDataSource from "../components/pages/Birthday/birthdayData";
import anniversaryDataSource from "../components/pages/Anniversary/anniversaryData";
import babyCeremonyDataSource from "../components/pages/BabyCeremony/babyCeremonyData";
import babyShowerDataSource from "../components/pages/BabyShower/babyShowerData";
import kidsSpecialDataSource from "../components/pages/KidsSpecial/kidsSpecialData";
import haldiMehndiDataSource from "../components/pages/HaldiMehndi/haldiMehndiData";

function createProducts(category, items) {
  return items.map((item, index) => ({
    ...item,

    id: item.id ?? `${category}-${String(index + 1).padStart(3, "0")}`,

    category,

    slug:
      item.slug ??
      (item.name || `product-${index + 1}`)
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
  }));
}

export const birthdayData = createProducts(
  "birthday",
  birthdayDataSource
);

export const anniversaryData = createProducts(
  "anniversary",
  anniversaryDataSource
);

export const babyCeremonyData = createProducts(
  "baby-ceremony",
  babyCeremonyDataSource
);

export const babyShowerData = createProducts(
  "baby-shower",
  babyShowerDataSource
);

export const kidsSpecialData = createProducts(
  "kids-special",
  kidsSpecialDataSource
);

export const haldiMehndiData = createProducts(
  "haldi-mehndi",
  haldiMehndiDataSource
);

export const allProducts = [
  ...birthdayData,
  ...anniversaryData,
  ...babyCeremonyData,
  ...babyShowerData,
  ...kidsSpecialData,
  ...haldiMehndiData,
];

export function getProductById(id) {
  return allProducts.find((item) => item.id === id);
}

export function getProductBySlug(slug) {
  return allProducts.find((item) => item.slug === slug);
}

export function getProductsByCategory(category) {
  return allProducts.filter(
    (item) => item.category === category
  );
}