import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import HistoryPage from "~/pages/transactions/history";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "History Saving" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HistoryRoute() {
  return <HistoryPage />;
}
