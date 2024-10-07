import { generateHomeView } from "../views/HomeView";
import { html } from "hono/html";

export function getHome(c: any) {
  return c.html(html`${generateHomeView()}`);
}
