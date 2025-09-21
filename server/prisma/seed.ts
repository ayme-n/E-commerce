import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

async function main() {
  // Clear the table before inserting
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        name: "pink sneaker",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757976535/n9s8aucsedzczljc5zd0.webp",
        genre: "women",
        description: "Crafted for comfort and style, these shoes combine modern design with premium materials. Perfect for everyday wear or special occasions, they offer durability, breathability, and a versatile look that pairs easily with any outfit",
        category: "shoes",
        price: 148.59,
        stock: 43,
      },
      {
        name: "sandal",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757975998/sandal-against-white-background_1048944-23528170_ubtgxo.avif",
        genre: "women",
        description: "Crafted for comfort and style, these shoes combine modern design with premium materials. Perfect for everyday wear or special occasions, they offer durability, breathability, and a versatile look that pairs easily with any outfit",
        category: "shoes",
        price: 175.49,
        stock: 94,
      },
      {
        name: "green dress",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757979228/q0syqf53nlvvg8klbhrg.webp",
        genre: "women",
        description: "An elegant and versatile dress designed for both casual and formal settings. Made from high-quality fabric, it drapes beautifully while offering all-day comfort. Its timeless design makes it a must-have piece in any wardrobe",
        category: "top",
        price: 51.25,
        stock: 92,
      },
      {
        name: "pink short",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757976481/k3x3cghwaaiqzgjqbph4.webp",
        genre: "women",
        description: "Premium bottoms that balance comfort and style. Designed with attention to detail, these pieces feature durable fabric, a flattering fit, and versatile styling options, making them perfect for both everyday use and smart occasions",
        category: "bottom",
        price: 70.6,
        stock: 71,
      },
      {
        name: "silver watch",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757976694/nda0luqr2kvkqigavdhu.webp",
        genre: "women",
        description: "Elevate your look with these stylish accessories, crafted with precision and attention to detail. Designed to complement any outfit, they blend functionality with modern fashion, making them timeless essentials for everyday wear.",
        category: "accessories",
        price: 84.5,
        stock: 79,
      },
      {
        name: "gold necklase",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757976772/uhj5x3h7xrl6vnr62c3k.webp",
        genre: "women",
        description: "Elevate your look with these stylish accessories, crafted with precision and attention to detail. Designed to complement any outfit, they blend functionality with modern fashion, making them timeless essentials for everyday wear.",
        category: "accessories",
        price: 90.79,
        stock: 84,
      },
      {
        name: "blue sneaker",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757976830/U4ntitled_aaozzt.jpg",
        genre: "men",
        description: "Crafted for comfort and style, these shoes combine modern design with premium materials. Perfect for everyday wear or special occasions, they offer durability, breathability, and a versatile look that pairs easily with any outfit",
        category: "shoes",
        price: 51.09,
        stock: 99,
      },
      {
        name: "gray T-shirt",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757976844/UntitlAZEed_olzxet.jpg",
        genre: "men",
        description: "Stylish and comfortable, this top is crafted from quality fabric for a perfect fit. Whether casual or layered, its modern design and versatile style make it a wardrobe essential for any season",
        category: "top",
        price: 81,
        stock: 14,
      },
      {
        name: "green T-shirt",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757976870/UnQSDtitled_yt8xzt.jpg",
        genre: "men",
        description: "Stylish and comfortable, this top is crafted from quality fabric for a perfect fit. Whether casual or layered, its modern design and versatile style make it a wardrobe essential for any season",
        category: "top",
        price: 168.35,
        stock: 70,
      },
      {
        name: "biege pant",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757978925/s6swvndcktqkhax4wjdo.jpg",
        genre: "women",
        description: "Premium bottoms that balance comfort and style. Designed with attention to detail, these pieces feature durable fabric, a flattering fit, and versatile styling options, making them perfect for both everyday use and smart occasions",
        category: "bottom",
        price: 82.19,
        stock: 38,
      },
      {
        name: "blue dress",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757979130/vonbvlabydldt1efmtkv.webp",
        genre: "women",
        description: "An elegant and versatile dress designed for both casual and formal settings. Made from high-quality fabric, it drapes beautifully while offering all-day comfort. Its timeless design makes it a must-have piece in any wardrobe",
        category: "top",
        price: 181.29,
        stock: 20,
      },
      {
        name: "white shoes",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757976818/Un5titled_ffwbr6.jpg",
        genre: "men",
        description: "Crafted for comfort and style, these shoes combine modern design with premium materials. Perfect for everyday wear or special occasions, they offer durability, breathability, and a versatile look that pairs easily with any outfit",
        category: "shoes",
        price: 108.29,
        stock: 32,
      },
      {
        name: "green cargo",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757977221/v8y34wenfzb0fg4srrt9.webp",
        genre: "men",
        description: "Premium bottoms that balance comfort and style. Designed with attention to detail, these pieces feature durable fabric, a flattering fit, and versatile styling options, making them perfect for both everyday use and smart occasions",
        category: "bottom",
        price: 114.75,
        stock: 53,
      },
      {
        name: "black sunglasses",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757977355/e1nyqghthv4oe0ckruet.webp",
        genre: "men",
        description: "Elevate your look with these stylish accessories, crafted with precision and attention to detail. Designed to complement any outfit, they blend functionality with modern fashion, making them timeless essentials for everyday wear.",
        category: "accessories",
        price: 122.15,
        stock: 76,
      },
      {
        name: "brown watch",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757977650/ebt0m9ulxcen0vtpvrch.webp",
        genre: "men",
        description: "Elevate your look with these stylish accessories, crafted with precision and attention to detail. Designed to complement any outfit, they blend functionality with modern fashion, making them timeless essentials for everyday wear.",
        category: "accessories",
        price: 32.09,
        stock: 84,
      },
      {
        name: "gray jogger",
        image: "https://res.cloudinary.com/dhm82i8je/image/upload/v1757979362/awakrya65sdsouezqscn.webp",
        genre: "men",
        description: "Premium bottoms that balance comfort and style. Designed with attention to detail, these pieces feature durable fabric, a flattering fit, and versatile styling options, making them perfect for both everyday use and smart occasions",
        category: "bottom",
        price: 34.45,
        stock: 33,
      },
    ],
  });
}

main()
  .then(() => console.log("✅ Seeding complete"))
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
