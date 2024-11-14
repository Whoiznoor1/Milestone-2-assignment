"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="/"
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 md:px-0 "
    >
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-1xl font-bold text-orange-500 mb-2">
          From Our Steamer To Your Soul{" "}
        </h1>
        <p className="text-xs font-semibold">Momos You Cannot Resist!</p>
      </div>

      <div className="mb-6 ">
        <Image
          src={"/momo4.jpg"}
          alt="Plate of delicious momos"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold mb-2">
          I Love <span className="text-orange-500">MOMOries!</span>
        </h2>
        <p className="text-lg">
          Feel the WOW with our{" "}
          <span className="font-bold text-orange-500">BURSTING FLAVOR</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
