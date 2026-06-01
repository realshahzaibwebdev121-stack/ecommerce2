import { createFileRoute } from "@tanstack/react-router";
import { Page } from "../components/Page";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Shahzaib — Product Details" },
      { name: "description", content: "Shahzaib Product Details — neo-futuristic spatial commerce." },
    ],
  }),
  component: () => <Page name="product" />,
});
