import { html } from "hono/html";

export function getHome(c: any) {
  return c.html(
    html`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width,
            initial-scale=1.0"
          />
          <title>EuroPark</title>
        </head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,300it
alic,700,700italic"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/n
ormalize.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/m
illigram.css"
        />

        <body>
          <h1>Welcome to EuroPark!</h1>

          <div>
            <img
              src="./static/parking.png"
              alt="Image Parking"
              width="250px"
              height="250px"
            />
          </div>

          <div id="links">
            <a href="/cities">Cities</a>
            <a href="/parkings">Parkings</a>
          </div>

          <span>
            "Save time and money with EuroPark! Enjoy a 100% contactless parking
            experience for a short or long duration in our car parks in Europe!
          </span>
        </body>
      </html> `
  );
}
