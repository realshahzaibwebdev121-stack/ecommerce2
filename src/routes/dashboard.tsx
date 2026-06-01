import { createFileRoute } from "@tanstack/react-router";
import { Page } from "../components/Page";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Shahzaib — Dashboard" },
      { name: "description", content: "Shahzaib Dashboard — neo-futuristic spatial commerce." },
    ],
  }),
  component: () => <Page name="dashboard" />,
});
