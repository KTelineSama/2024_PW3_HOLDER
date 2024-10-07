import { Parking } from "../../models/City";
import { Layout } from "../shared/Layout";

export function generateParkingsView(parkings: Parking[]) {
  return (
    <Layout pageTitle="Parkings">
      <ul>
        {parkings.map((parking) => (
          <li>
            <a href={`/parkings/${parking.id}`}>{parking.name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
