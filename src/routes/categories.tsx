import { createFileRoute } from "@tanstack/react-router";
import { Page } from "../components/Page";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Shahzaib — Categories" },
      { name: "description", content: "Shahzaib Categories — neo-futuristic spatial commerce." },
    ],
  }),
  component: () => <Page name="categories" />,
});
