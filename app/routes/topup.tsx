import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import TopupPage from "~/pages/transactions/topup";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Top Up Your Money For Savings" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function TopupRoute() {
  return <TopupPage />;
}
