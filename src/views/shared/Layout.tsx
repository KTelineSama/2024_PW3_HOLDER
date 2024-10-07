import { html } from "hono/html";
type Props = {
  children?: any;
  pageTitle: String;
};

export function Layout({ children, pageTitle }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,
          initial-scale=1.0"
        />
        <title>{pageTitle}</title>
      </head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
      />
      <body>
        <h1>Welcome to EuroPark!</h1>
        <div>
          <img
            src="../static/parking.png"
            alt="Image Parking"
            width="250px"
            height="250px"
          />
        </div>
        <div id="links">
          <a href="/cities">Cities</a>
          <a href="/parkings">Parkings</a>
        </div>
        {children}
      </body>
    </html>
  );
}
