import { createFileRoute } from "@tanstack/react-router";
import { Page } from "../components/Page";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Shahzaib — Admin Dashboard" },
      { name: "description", content: "Shahzaib Admin Dashboard — neo-futuristic spatial commerce." },
    ],
  }),
  component: () => <Page name="admin" />,
});
