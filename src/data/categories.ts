import { capilarProducts, accessoriesProducts, nutraceuticsProducts, perfumeryProducts,healthProducts } from "./products";

function countProductsByCategory(categoryName: string): number {
  const allProducts = [
    ...healthProducts,
    ...capilarProducts,
    ...accessoriesProducts,
    ...nutraceuticsProducts,
    ...perfumeryProducts
  ];
  
  return allProducts.filter(product => product.category === categoryName).length;
}
export const categories = [
  {
    id: 1,
    name: "Nutracêuticos",
    productCount:countProductsByCategory("Nutracêuticos"), // Contar produtos com categoryId igual a 1, por exempl ,
    image: "/images/backgrounds/categories/saude.webp",
    slug: "nutraceuticos",
    backgroundImage: "/images/backgrounds/categories/saude.webp"
  },
  {
    id: 2,
    name: "Bem Estar",
    productCount: countProductsByCategory("Bem Estar"),
    image: "/images/backgrounds/categories/bem-estar.webp",
    slug: "bem-estar",
    backgroundImage: "/images/backgrounds/categories/bem-estar.webp"
  },
  {
    id: 3,
    name: "Capilar Ozonizado",
    productCount: countProductsByCategory("Capilar Ozonizada"),
    image: "/images/backgrounds/categories/capilar.webp",
    slug: "capilar-ozonizada",
    backgroundImage: "/images/backgrounds/categories/capilar.webp"
  },

  {
    id: 4,
    name: "Perfumaria",
    productCount: countProductsByCategory("Perfumaria"),
    image: "/images/backgrounds/categories/fragrancias.webp",
    slug: "perfumaria",
    backgroundImage: "/images/backgrounds/categories/fragrancias.webp"
  },
  {
    id: 5,
    name: "Acessórios",
    productCount: countProductsByCategory("Acessórios"),
    image: "/images/backgrounds/categories/acessorios.webp",
    slug: "acessorios",
    backgroundImage: "/images/backgrounds/categories/acessorios.webp"
  }
];