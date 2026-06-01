import { createFileRoute } from "@tanstack/react-router";
import { Page } from "../components/Page";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Shahzaib — Wishlist & Cart" },
      { name: "description", content: "Shahzaib Wishlist & Cart — neo-futuristic spatial commerce." },
    ],
  }),
  component: () => <Page name="cart" />,
});
