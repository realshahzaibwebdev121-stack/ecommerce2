import { createFileRoute } from "@tanstack/react-router";
import { Page } from "../components/Page";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shahzaib — Shop" },
      { name: "description", content: "Shahzaib Shop — neo-futuristic spatial commerce." },
    ],
  }),
  component: () => <Page name="shop" />,
});
