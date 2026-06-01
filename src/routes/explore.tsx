import { createFileRoute } from "@tanstack/react-router";
import { Page } from "../components/Page";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Shahzaib — Explore" },
      { name: "description", content: "Shahzaib Explore — neo-futuristic spatial commerce." },
    ],
  }),
  component: () => <Page name="explore" />,
});
