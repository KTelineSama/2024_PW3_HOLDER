import { generateHomeView } from "../views/HomeView";
import { html } from "hono/html";
import { createFactory } from "hono/factory";

const factory = createFactory();

const HomeController = factory.createHandlers( (c) => {
  return c.html(html`${generateHomeView()}`);
});

export default HomeController;
