import { createFileRoute } from "@tanstack/react-router";
import { Page } from "../components/Page";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Shahzaib — About" },
      { name: "description", content: "Shahzaib About — neo-futuristic spatial commerce." },
    ],
  }),
  component: () => <Page name="about" />,
});
