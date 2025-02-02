import { useState, type FormEvent } from 'react';
import Api from '~/action/api';
import { NavLink } from "react-router";

function RegisterPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    let body = {
      email,
      name,
      password
    };

    try {
      let response = await Api.post(Api.register, body);
      if (response.status === 201) {
        setSuccess(true);
      } else {
        setError('Registrasi gagal. Silakan coba lagi.');
      }
    } catch (err) {
      setError('Terjadi kesalahan, periksa kembali data yang dimasukkan.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

      {success ? (
        <div className="text-center">
          <p className="text-green-500 text-lg font-medium mb-4">Registrasi berhasil! Silakan login.</p>
          <NavLink
            to={"/login"}
            className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Pergi ke Login
          </NavLink>
        </div>
      ) : (
        <>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border rounded-md mt-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border rounded-md mt-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border rounded-md mt-2"
              />
            </div>
            <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600" disabled={loading}>
              {loading ? "Loading..." : "Register"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default RegisterPage;
