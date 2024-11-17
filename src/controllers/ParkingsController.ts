import { html } from "hono/html";
import {getParkings, getParking} from "../data/sqliteData";
import { generateParkingsView } from "../views/parkings/ParkingsView";
import { generateParkingView } from "../views/parkings/ParkingView";
import { HTTPException } from "hono/http-exception";
import { createFactory } from "hono/factory";

const factory = createFactory();

const ParkingsController = factory.createHandlers(async (c: any) => {
  const parkings= getParkings();
  return c.html(html`${generateParkingsView(parkings)}`);
});

const ParkingController = factory.createHandlers(async (c: any) => {
  const id: string = c.req.param("id");
  const parking = getParking(id);
  if (!parking) {
    throw new HTTPException(404, { message: "Parking non trouvé" });
  }
  return c.html(html`${generateParkingView(parking)}`);
});

export { ParkingsController, ParkingController };
