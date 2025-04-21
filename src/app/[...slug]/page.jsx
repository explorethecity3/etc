import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import City from "../components/City/index.jsx";
import PlaceToVisit from "../components/Places-to-visit/index.jsx";
import ThingsToDo from '../components/Things-to-do/index.jsx'

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
          <City category={category}/>
         
          {/* Places to Visit Section */}
          {/* <h2>Places to Visit:</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {category.placesToVisit.slice(0, 4).map((place) => (
              <div key={place.id} style={{ width: "200px", textAlign: "center" }}>
                <img
                  src={place.image}
                  alt={place.name}
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
                />
                <p>{place.name}</p>
              </div>
            ))}
          </div> */}
          {/* <a
            href={`/${category.id}/places`}
            style={{
              display: "inline-block",
              marginTop: "15px",
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            See More
          </a> */}

          {/* Things to Do Section */}
          {/* <h2>Things to Do:</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {category.thingsToDo.slice(0, 4).map((activity) => (
              <div key={activity.id} style={{ width: "200px", textAlign: "center" }}>
                <img
                  src={activity.image}
                  alt={activity.name}
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
                />
                <p>{activity.name}</p>
              </div>
            ))}
          </div>
          <a
            href={`/${category.id}/things-to-do`}
            style={{
              display: "inline-block",
              marginTop: "15px",
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            See More
          </a> */}
        </div>
      );
    } catch {
      return notFound();
    }
  }

  if (slug.length === 2) {
    const [categoryId, type] = slug;

    try {
      const category = await getCityData(categoryId);

      if (type === "places") {
        return (
          <div>
            <PlaceToVisit PlaceToVisit={category.placesToVisit}/>
            {/* <h1>Places to Visit in {category.name}</h1>
            <ul>
              {category.placesToVisit.map((place) => (
                <li key={place.id}>
                  <a href={`/${category.id}/places/${place.id}`} style={{ color: "blue" }}>
                    <img
                      src={place.image}
                      alt={place.name}
                      style={{ width: "150px", height: "auto", marginRight: "10px" }}
                    />
                    {place.name}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>
        );
      }

      if (type === "things-to-do") {
        return (
          <div>
            <ThingsToDo ThingsToDo={category?.thingsToDo}/>
            {/* <h1>Things to Do in {category.name}</h1>
            <ul>
              {category.thingsToDo.map((activity) => (
                <li key={activity.id}>
                  <a href={`/${category.id}/things-to-do/${activity.id}`} style={{ color: "blue" }}>
                    <img
                      src={activity.image}
                      alt={activity.name}
                      style={{ width: "150px", height: "auto", marginRight: "10px" }}
                    />
                    {activity.name}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>
        );
      }
    } catch {
      return notFound();
    }
  }

  return notFound();
}
