import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("register", "./routes/register.tsx"),
  route("login", "./routes/login.tsx"),
  route('saldo', './routes/saldo.tsx'),
  route('history', './routes/history.tsx'),
  route('topup', './routes/topup.tsx'),
  route('withdraw', './routes/withdraw.tsx'),
] satisfies RouteConfig;
