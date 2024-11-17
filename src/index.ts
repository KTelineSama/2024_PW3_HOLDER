import { Hono } from "hono";
import HomeController from "./controllers/HomeController";
import {
  CityController,
  CitiesController,
} from "./controllers/CitiesController";
import {
  ParkingsController,
  ParkingController,
} from "./controllers/ParkingsController";
import { trimTrailingSlash } from "hono/trailing-slash";
import { html } from "hono/html";
import { generateErrorView } from "./views/shared/ErrorView";

import { serveStatic } from "hono/bun";
import { initDB } from "./data/sqliteData";
initDB();
const app = new Hono();
app.onError((err, c) => {
  return c.html(html`${generateErrorView(err)}`);
});
app.use(trimTrailingSlash());
app.get("/", ...HomeController);
app.get("/cities", ...CitiesController);
app.get("/cities/:slug", ...CityController);
app.get("/parkings", ...ParkingsController);
app.get("/parkings/:id", ...ParkingController);
app.use("/static/*", serveStatic({ root: "./" }));

export default app;
