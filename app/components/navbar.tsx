import { NavLink } from "react-router";

export function MyAppNav() {
  return (
    <nav className="bg-white text-black sticky top-0 py-5 flex justify-center gap-10 shadow">
      <NavLink to="/" className="hover:scale-110 duration-200 font-medium" end>
        Home
      </NavLink>
      <NavLink to="/saldo" className="hover:scale-110 duration-200 font-medium">Saldo information</NavLink>
      <NavLink to="/topup" className="hover:scale-110 duration-200 font-medium">Top Up</NavLink>
      <NavLink to="/withdraw" className="hover:scale-110 duration-200 font-medium">Withdraw</NavLink>
      <NavLink to="/history" className="hover:scale-110 duration-200 font-medium">Transaction</NavLink>
      <NavLink to="/login" className="hover:scale-110 duration-200 font-medium">Login</NavLink>
      <NavLink to="/register" className="hover:scale-110 duration-200 font-medium">Register</NavLink>
      <NavLink to="/login" className="hover:scale-110 duration-200 font-medium">Logout</NavLink>
    </nav>
  );
}
