import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import WithdrawPage from "~/pages/transactions/withdraw";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Take Your Money" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function WithdrawRoute() {
  return <WithdrawPage />;
}
