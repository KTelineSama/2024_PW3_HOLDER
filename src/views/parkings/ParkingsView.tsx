import { Parking } from "../../models/City";
import { Layout } from "../shared/Layout";

export function generateParkingsView(parkings: Parking[]) {
  return (
    <Layout pageTitle="Parkings">
      <ul class="flex">
        {parkings.map((parking) => (
          <li class="p-4">
            <a href={`/parkings/${parking.id}`}>{parking.name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
