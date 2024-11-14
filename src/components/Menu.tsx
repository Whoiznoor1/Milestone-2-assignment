import React from "react";
import Image from "next/image";

const momos = [
  {
    name: "Classic Chicken Momos",
    description: "Juicy chicken momos with a mix of spices.",
    price: "350",
    imageUrl: "/chicken.jpg",
  },
  {
    name: "Paneer Momos",
    description: "Delicious vegetarian momos stuffed with paneer.",
    price: "350",
    imageUrl: "/paneer.jpg",
  },
  {
    name: "Spicy Schezwan Momos",
    description: "Hot and spicy momos for a fiery experience.",
    price: "400",
    imageUrl: "/schezwan.jpg",
  },
  {
    name: "Veg Momos",
    description: "Healthy and fresh vegetables wrapped in momo goodness.",
    price: "300",
    imageUrl: "/veg.jpg",
  },
  {
    name: "Tandoori Momos",
    description: "Smoky and flavorful tandoori momos.",
    price: "400",
    imageUrl: "/tandoori.jpg",
  },
];

const smoothies = [
  {
    name: "Cherry Vanilla Smoothie",
    description:
      "Indulge in the delightful flavors of a creamy, vanilla-infused Cherry Vanilla Smoothie.",
    price: "180",
    imageUrl: "/cherry.jpg",
  },
  {
    name: " Peach Smoothie",
    description:
      "Indulge in a sweet, creamy Peach Smoothie. A refreshing, smooth, and flavor-filled treat.",
    price: "150",
    imageUrl: "/peach.jpg",
  },
  {
    name: "Chocolate Smoothie",
    description: "Creamy chocolate Smoothie with whipped cream.",
    price: "200",
    imageUrl: "/choco.jpg",
  },
];

const Menu = () => {
  return (
    <div id="menu" className="bg-black text-white h-full w-full p-6  ">
      <h1 className="text-4xl font-bold text-center mb-10 text-orange-500">
        Our Momo Menu
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {momos.map((momo, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={momo.imageUrl}
              alt={momo.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-orange-500">{momo.name}</h2>
            <p className="text-gray-300 mt-2">{momo.description}</p>
            <p className="text-xl font-semibold mt-2">{momo.price} Rs.</p>
          </div>
        ))}
      </div>

      <h1 className="text-4xl font-bold text-center mt-16 mb-10 text-orange-500">
        Smoothies
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {smoothies.map((smoothies, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={smoothies.imageUrl}
              alt={smoothies.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-orange-500">
              {smoothies.name}
            </h2>
            <p className="text-gray-300 mt-2">{smoothies.description}</p>
            <p className="text-xl font-semibold mt-2">{smoothies.price} Rs.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
