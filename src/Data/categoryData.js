import fruitsCat from "../assets/fruits-and-veggies.png";
import dairyCat from "../assets/dairy-and-eggs.png";
import meatCat from "../assets/meat-and-seafood.png";
import fruitsBanner from "../assets/fruits-banner.jpg";
import dairyBanner from "../assets/dairy-banner.jpg";
import seafoodBanner from "../assets/seafood-banner.jpg";

const categoryData = [
  {
    id: 1,
    title: "Fruits & Veggies",
    slug: "fruits",
    productCategories: ["fruits", "vegetables"],
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: fruitsCat,
    bannerImage: fruitsBanner,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    slug: "dairy",
    productCategories: ["dairy"],
    description:
      "Wholesome dairy products and free range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: dairyCat,
    bannerImage: dairyBanner,
  },
  {
    id: 3,
    title: "Meat & Seafood",
    productCategories: ["seafood"],
    slug: "seafood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: meatCat,
    bannerImage: seafoodBanner,
  },
];

export default categoryData;
