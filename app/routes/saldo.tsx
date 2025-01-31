import type { Route } from "./+types/home";
import SaldoPage from "~/pages/saldo/saldo";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Saldo Information" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function SaldoRoute() {
  return <SaldoPage />;
}
