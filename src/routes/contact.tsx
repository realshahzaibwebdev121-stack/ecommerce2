import { createFileRoute } from "@tanstack/react-router";
import { Page } from "../components/Page";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Shahzaib — Contact" },
      { name: "description", content: "Shahzaib Contact — neo-futuristic spatial commerce." },
    ],
  }),
  component: () => <Page name="contact" />,
});
