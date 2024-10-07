import { html } from "hono/html";
import { City } from "../models/City";
import { generateCitiesView } from "../views/city/CitiesView";
import { generateCityView } from "../views/city/CityView";

export const getCities = (c: any, cities: City[]) => {
  return c.html(html`${generateCitiesView(cities)}`);
};

export const getCity = (c: any, cities: City[], slug: string) => {
  console.log(slug);
  
  const city = cities.find((c) => c.slug === slug);
  console.log('on y est');
  if (!city) {
    return c.html(html`<h1>404 - City not founsdfsdsdfd</h1>`);
  }
  return c.html(html`${generateCityView(city)}`);
};
