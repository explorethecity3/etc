import React from "react";
import Link from "next/link";

const City = ({ category }) => {
  const shuffleArray = (array) => {
    const shuffled = [...array]; // Create a copy to avoid mutating the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Get a random index
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  };

  return (
    <div className="px-10 py-10 relative">
      <div className="relative">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-[24rem] object-fit rounded-lg shadow-lg"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white bg-black/50 px-4 py-2 rounded-md text-6xl leading-12 font-semibold">
          {category.title}
        </h1>
      </div>
      <h2 className="text-center mt-10 text-[#f4ebd0] leading-10 text-2xl mb-5">Places to Visit in {category.name}</h2>
      <div className="flex flex-wrap gap-2">
        {shuffleArray(category.placesToVisit)
          .slice(0, 3)
          .map((place) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={place.id}>
              <Link href="#">
                <img
                  className="rounded-t-lg"
                  src={place.image}
                  alt={place.name}
                />
              </Link>
              <div className="p-5">
                <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {place.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {place.overview}
                </p>
              </div>
            </div>

            // <div key={place.id} className="w-48 text-center">
            //   <img
            //     src={place.image}
            //     alt={place.name}
            //     className="w-full h-36 object-cover rounded-lg"
            //   />
            //   <p className="mt-2">{place.name}</p>
            // </div>
          ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={`/${category.id}/places-to-visit`}
          className="inline-block mt-4 px-5 py-2.5 bg-blue-500 text-white no-underline rounded text-center"
        >
          See More
        </Link>
      </div>

      <h2 className="text-center mt-10 text-[#f4ebd0] text-2xl leading-10 mb-5">Things to do in {category.name}</h2>
      <div className="flex flex-wrap gap-2">
        {shuffleArray(category.thingsToDo)
          .slice(0, 3)
          .map((place) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={place.id}>
              <Link href="#">
                <img
                  className="rounded-t-lg"
                  src={place.image}
                  alt={place.name}
                />
              </Link>
              <div className="p-5">
                <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {place.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {place.overview}
                </p>
              </div>
            </div>

            // <div key={place.id} className="w-48 text-center">
            //   <img
            //     src={place.image}
            //     alt={place.name}
            //     className="w-full h-36 object-cover rounded-lg"
            //   />
            //   <p className="mt-2">{place.name}</p>
            // </div>
          ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={`/${category.id}/things-to-do`}
          className="inline-block mt-4 px-5 py-2.5 bg-blue-500 text-white no-underline rounded text-center"
        >
          See More
        </Link>
      </div>

      <p className="mt-4">{category.description}</p>
    </div>
  );
};

export default City;
