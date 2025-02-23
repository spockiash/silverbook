import { type PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html class="h-full bg-gray-100">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SilverBook</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="h-full">
        <Layout>
          <Component />
        </Layout>
      </body>
    </html>
  );
}