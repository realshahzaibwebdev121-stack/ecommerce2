import { createFileRoute } from "@tanstack/react-router";
import { Page } from "../components/Page";

export const Route = createFileRoute("/admin/analytics")({
  head: () => ({
    meta: [
      { title: "Shahzaib — Admin Analytics" },
      { name: "description", content: "Shahzaib admin analytics dashboard." },
    ],
  }),
  component: () => <Page name="admin-analytics" />,
});
