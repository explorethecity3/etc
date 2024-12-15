import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";

// Fetch city data from JSON
async function getCityData(categoryId) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    `${categoryId}.json`
  );
  if (!fs.existsSync(filePath)) {
    throw new Error("File not found");
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

// Page component
export default async function Page({ params }) {
  const slug = params?.slug;

  if (slug.length === 1) {
    const [categoryId] = slug;
    try {
      const category = await getCityData(categoryId);

      return (
        <div>
          <h1>{category.name}</h1>
          <p>{category.description}</p>

          <h2>Places to Visit:</h2>
          <ul>
            {category.places.map((place) => (
              <li key={place.id}>
                <a
                  href={`/${category.id}/${place.id}`}
                  style={{ color: "blue" }}
                >
                  {place.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    } catch {
      return notFound();
    }
  }

  if (slug.length === 2) {
    const [categoryId, placeId] = slug;

    try {
      const category = await getCityData(categoryId);
      const place = category.places.find((p) => p.id === placeId);
      if (!place) return notFound();

      return (
        <div>
          <h1>{place.name}</h1>
          <p>{place.description}</p>
          <p>Located in: {category.name}</p>
        </div>
      );
    } catch {
      return notFound();
    }
  }

  return notFound();
}
