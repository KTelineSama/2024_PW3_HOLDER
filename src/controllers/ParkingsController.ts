import { html } from "hono/html";
import { Parking } from "../models/City";
import { generateParkingsView } from "../views/parkings/ParkingsView";
import { generateParkingView } from "../views/parkings/ParkingView";

export function getParkings(c: any, parkings: Parking[]) {
  return c.html(html`${generateParkingsView(parkings)}`);
}

export function getParking(c: any, parkings: Parking[], id: string) {
  const parking = parkings.find((p) => p.id === id);
  if (!parking) {
    return c.html(html`<h1>404 - Parking not found</h1>`);
  }
  return c.html(html`${generateParkingView(parking)}`);
}
