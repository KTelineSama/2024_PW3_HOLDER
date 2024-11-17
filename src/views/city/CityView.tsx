import { City } from "../../models/City";
import { Layout } from "../shared/Layout";

export const generateCityView = (city: City) => {
  return (
    <Layout pageTitle={`${city.name}`}>
      <div>
        <h1>{city.name}</h1>
        <p>Pays: {city.country}</p>
        <p>
          Localisation: {city.localisation.latitude},{" "}
          {city.localisation.longitude}
        </p>
        <ul>Parkings de la ville:
              {city.parkingIds.map((parking) => (
                <li>
                  <a href={`/parkings/${parking}`}>{parking}</a>
                </li>
              ))}
            </ul>
      </div>
    </Layout>
  );
};
