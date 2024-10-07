import { Hono } from "hono";
import { cities, parkings } from "./data/staticDatabase";
import { getHome } from "./controllers/HomeController";
import { getCities, getCity } from "./controllers/CitiesController";
import { getParkings, getParking } from "./controllers/ParkingsController";

import { serveStatic } from "hono/bun";

const app = new Hono();

app.get("/", (c) => getHome(c));
app.get("/cities", (c) => getCities(c, cities));
app.get("/city/:slug", (c) => getCity(c, cities, c.req.param("slug")));
app.get("/parkings", (c) => getParkings(c, parkings));
app.get("/parkings/:id", (c) => getParking(c, parkings, c.req.param("id")));

app.use("/static/*", serveStatic({ root: "./" }));

export default app;
