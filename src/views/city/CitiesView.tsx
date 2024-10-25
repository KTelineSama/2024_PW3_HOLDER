import { City } from "../../models/City";
import { Layout } from "../shared/Layout";

export const generateCitiesView = (cities: City[]) => {
  return (
    <Layout pageTitle="Cities">
      <ul>
        {cities.map((city) => (
          <li>
            <a href={`/cities/${city.slug}`}>{city.name}</a>
            <ul>Parkings de la ville:
              {city.parkingIds.map((parking) => (
                <li>
                  <a href={`/parkings/${parking}`}>{parking}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
