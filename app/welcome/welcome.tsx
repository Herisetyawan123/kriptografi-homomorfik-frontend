import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100 text-white">
      <div className="text-center max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg text-gray-800">
        <h1 className="text-4xl font-semibold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Selamat Datang di Website Tabungan Anda!
        </h1>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Mulailah mencatat dan melacak tabungan Anda dengan mudah. Simpan dan kelola tabungan Anda, kapan saja dan di mana saja.
        </p>
        <div className="flex justify-center mt-6">
          <img
            src="https://via.placeholder.com/300"
            alt="Tabungan"
            className="rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-3s"
          />
        </div>
        <div className="mt-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Mulai Sekarang
          </button>
        </div>
      </div>
    </main>
  );
}