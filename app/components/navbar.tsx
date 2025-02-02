import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import SessionApp from "~/action/session";

export function MyAppNav() {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    let token = SessionApp.get("token")
    if (token != null) {
      setAuth(true)
    }
  }, [])

  return (
    <nav className="bg-white text-black sticky top-0 py-5 flex justify-center gap-10 shadow">
      <NavLink to="/" className="hover:scale-110 duration-200 font-medium" end>
        Home
      </NavLink>
      {
        auth ? (
          <>
            <NavLink to="/saldo" className="hover:scale-110 duration-200 font-medium">Saldo information</NavLink>
            <NavLink to="/topup" className="hover:scale-110 duration-200 font-medium">Top Up</NavLink>
            <NavLink to="/withdraw" className="hover:scale-110 duration-200 font-medium">Withdraw</NavLink>
            <NavLink to="/history" className="hover:scale-110 duration-200 font-medium">Transaction</NavLink>
            <NavLink to="/login" className="hover:scale-110 duration-200 font-medium">Logout</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" className="hover:scale-110 duration-200 font-medium">Login</NavLink>
            <NavLink to="/register" className="hover:scale-110 duration-200 font-medium">Register</NavLink>
          </>
        )
      }
    </nav>
  );
}
