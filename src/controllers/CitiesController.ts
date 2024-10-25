import { html } from "hono/html";
import { cities } from "../data/staticDatabase";
import { generateCitiesView } from "../views/city/CitiesView";
import { generateCityView } from "../views/city/CityView";
import { HTTPException } from "hono/http-exception";
import { createFactory } from "hono/factory";

const factory = createFactory();

const CitiesController = factory.createHandlers(async (c: any) => {
  return c.html(html`${generateCitiesView(cities)}`);
});

const CityController = factory.createHandlers(async (c: any) => {
  const slug: string = c.req.param("slug");
  const city = cities.find((c) => c.slug === slug);
  if (!city) {
    throw new HTTPException(404, { message: "Ville non trouvée" });
  }
  return c.html(html`${generateCityView(city)}`);
});

export { CitiesController, CityController };