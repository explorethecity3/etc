import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  // Path to the data folder
  const dataDirectory = path.join(process.cwd(), "public/data");
  const files = fs.readdirSync(dataDirectory);

  // Read JSON files and pick top 2 places from each city
  const topPlaces = files.flatMap((file) => {
    const cityData = JSON.parse(
      fs.readFileSync(path.join(dataDirectory, file), "utf-8")
    );

    // Pick the first two places from each city's `placesToVisit`
    return cityData.placesToVisit.slice(0, 2).map((place) => ({
      ...place,
      city: cityData.name, // Include city name for display
    }));
  });
  const thingsToDo = files.flatMap((file) => {
    const cityData = JSON.parse(
      fs.readFileSync(path.join(dataDirectory, file), "utf-8")
    );
    // Pick the first two places from each city's `placesToVisit`
    return cityData.thingsToDo.slice(0, 2).map((place) => ({
      ...place,
      city: cityData.name, // Include city name for display
    }));
  });

  const cityInfoSet = new Set();
  files.forEach((file) => {
    const cityData = JSON.parse(
      fs.readFileSync(path.join(dataDirectory, file), "utf-8")
    );
    cityInfoSet.add(
      JSON.stringify({
        name: cityData.name,
        id: cityData.id,
        image: cityData.image,
        overview: cityData.overview,
      })
    );
  });

  const destinations = Array.from(cityInfoSet).map((item) => JSON.parse(item));

  return (
    <div className="container mx-auto">
      {/* <h1 className="text-3xl font-bold mb-6">Explore the City</h1> */}
      <div className="relative w-full h-[500px] shadow-lg overflow-hidden">
        {/* <Image src="/bg.jpg" width={full} height={full} alt="Explore the City"
          className="w-full h-full object-cover opacity-30"/> */}
        <img
          src="/img/travel.jpg" // Replace with your banner image path
          alt="Explore the City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[#f4ebd0] text-4xl sm:text-6xl font-bold italic tracking-wider drop-shadow-2xl">
            EXPLORE THE CITY
          </h1>
        </div>
      </div>
      <h1 className="text-[#b68d40] text-2xl text-center font-semibold mt-5">
        {" "}
        Choose Your Destination
      </h1>

      <div className="flex justify-center items-center mt-2">
        <div className=" gap-12 sm:gap-16 flex ">
          {destinations.map((destination) => (
            <Link href={`/${destination.id}`} key={destination.id}>
              <div
                key={destination.name}
                className="group h-96 w-96 [perspective:1000px]"
              >
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                  <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                    {destination.image && (
                      <img
                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                        src={destination.image}
                        alt={destination.name}
                        width={320}
                        height={320}
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center rounded-xl">
                      <h2 className="text-2xl font-bold text-white">
                        {destination.name}
                      </h2>
                    </div>
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateX(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="text-2xl font-bold mb-4">
                        {destination.name}
                      </h2>
                      <p className="text-lg text-pretty text-center mb-4">
                        {destination.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Top Places Section */}
      <section className="mt-8 text-[#b68d40]">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Top Places to Visit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topPlaces.map((place) => (
            <Link href={`/${place.city}/places-to-visit`} key={place.id}>
              <div className="shadow p-4 hover:shadow-lg cursor-pointer">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-semibold mt-2">{place.name}</h3>
                <p className="text-sm text-[#f4ebd0]">{place.overview}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Things To Do Section */}
      <section className="mt-8 text-[#b68d40]">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Things To Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {thingsToDo.map((place) => (
            <Link href={`/${place.city}/things-to-do`} key={place.id}>
              <div className="shadow p-4 hover:shadow-lg cursor-pointer">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-semibold mt-2">{place.name}</h3>
                <p className="text-sm text-[#f4ebd0]">{place.overview}</p>
                {/* <p className="text-sm mt-1 text-gray-800"><strong>City:</strong> {place.city}</p> */}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}


