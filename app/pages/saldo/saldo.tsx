import { useEffect, useState } from "react";
import LoadingPage from "../loading/loading";
import logoSaving from "../../assets/logo.jpg";
import Api from "~/action/api";
import type { DashboardModel } from "~/data/request/dashboard";
import { redirect } from "react-router";

export default function SaldoPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [info, setInfo] = useState<DashboardModel | null>(null);
  const [error, setError] = useState<string | null>(null);


  const getDashboard = async () => {
    try {
      let response = await Api.get(Api.dashboard, true)
      let body = await response.json();
      if (response.status == 200) {
        setInfo({
          name: body["user"]["name"],
          email: body["user"]["email"],
          balance: body["saving"]["balance"],
        })
      } else {
        setError(body["message"])
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error == "unauthorization") {
        // move to login
        return redirect('/login')
      }

      setError("terjadi kesalahan dalam sistem, silahkan coba lagi nanti");
    }

  }

  useEffect(() => {
    getDashboard();
  }, [])

  if (loading && info == null) {
    return <LoadingPage />;
  }
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {
        error != null ? (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center text-red-500">{error}</h2>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">Saldo Information</h2>

            <div className="mt-2 flex items-center gap-5">
              <div>
                <img
                  src={logoSaving}
                  alt="Tabungan"
                  width={150}
                  className="rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-3s"
                />
              </div>
              <div>
                <p>
                  <span className="font-bold">
                    Nama:
                  </span>
                  {' '} {info?.name}
                </p>
                <p>
                  <span className="font-bold">
                    Email:
                  </span>
                  {' '}  {info?.email}
                </p>
                <p>
                  <span className="font-bold">
                    Balance:
                  </span>
                  {' '} Rp. {info?.balance}
                </p>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}
