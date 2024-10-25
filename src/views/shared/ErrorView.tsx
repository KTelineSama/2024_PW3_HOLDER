import { Layout } from "./Layout";

export function generateErrorView(err: any) {
  return (
    <Layout pageTitle="Home">
      <h2>
        Erreur {err.status}: {err.message}
      </h2>
    </Layout>
  );
}
