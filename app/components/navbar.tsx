import { redirect, useNavigate } from "react-router";
import { NavLink } from "react-router";
import { useAuth } from "~/context/auth-context";

export function MyAppNav() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const logoutHandle = () => {
    logout()
    return navigate("/login");
  }

  return (
    <nav className="bg-white text-black sticky top-0 py-5 flex justify-center gap-10 shadow">
      <NavLink to="/" className="hover:scale-110 duration-200 font-medium" end>
        Home
      </NavLink>
      {
        isAuthenticated ? (
          <>
            <NavLink to="/saldo" className="hover:scale-110 duration-200 font-medium">Saldo information</NavLink>
            <NavLink to="/topup" className="hover:scale-110 duration-200 font-medium">Top Up</NavLink>
            <NavLink to="/withdraw" className="hover:scale-110 duration-200 font-medium">Withdraw</NavLink>
            <NavLink to="/history" className="hover:scale-110 duration-200 font-medium">Transaction</NavLink>
            <button onClick={logoutHandle} className="hover:scale-110 duration-200 font-medium cursor-pointer">Logout</button>
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
