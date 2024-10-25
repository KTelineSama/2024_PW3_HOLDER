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
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
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
        <h1 class="">Welcome to EuroPark!</h1>
        <div id="logo">
          <img
            src="../static/parking.png"
            alt="Image Parking"
            width="250px"
            height="250px"
          />
        </div>
        <div id="links" class="flex m-4">
          <a href="/cities" class="pr-4">
            Cities
          </a>
          <a href="/parkings">Parkings</a>
        </div>
        <div id="content" class="p-8 flex">
          {children}
        </div>
      </body>
    </html>
  );
}
