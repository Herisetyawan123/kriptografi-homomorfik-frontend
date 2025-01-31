import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import RegisterPage from "~/pages/auth/register";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function RegisterRoute() {
  return <RegisterPage />;
}
