import { Parking } from "../../models/City";
import { Layout } from "../shared/Layout";

export function generateParkingView(parking: Parking) {
  return (
    <Layout pageTitle={`${parking.name}`}>
      <div>
        <h1>{parking.name}</h1>
          <p>Ce parkign est actuellement {parking.opened?"ouvert":"fermé"}</p>
        <p>avec {parking.numberOfSpots} places disponibles</p>
      </div>
    </Layout>
  );
}
