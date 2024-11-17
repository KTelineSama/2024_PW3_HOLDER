import { html } from "hono/html";
import { getCities, getCity } from "../data/sqliteData";
import { generateCitiesView } from "../views/city/CitiesView";
import { generateCityView } from "../views/city/CityView";
import { HTTPException } from "hono/http-exception";
import { createFactory } from "hono/factory";

const factory = createFactory();

const CitiesController = factory.createHandlers(async (c: any) => {
  const cities= getCities();
  return c.html(html`${generateCitiesView(cities)}`);
});

const CityController = factory.createHandlers(async (c: any) => {
  const slug: string = c.req.param("slug");
  const city = getCity(slug);
  if (!city) {
    throw new HTTPException(404, { message: "Ville non trouvée" });
  }
  return c.html(html`${generateCityView(city)}`);
});

export { CitiesController, CityController };
