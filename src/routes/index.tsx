import { createFileRoute } from "@tanstack/react-router";
import { Page } from "../components/Page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shahzaib — Future of Commerce" },
      { name: "description", content: "Neo-futuristic spatial commerce. Curated artifacts for the modern aesthetic." },
    ],
  }),
  component: () => <Page name="index" />,
});
