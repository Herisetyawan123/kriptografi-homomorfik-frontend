import React, { useState, type FormEvent } from 'react';
import Api from '~/action/api';
import { useNavigate } from "react-router";
import SessionApp from '~/action/session';
import { useAuth } from '~/context/auth-context';

function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook untuk navigasi
  const { login } = useAuth()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let body = {
      email: email,
      password: password
    };

    try {
      let response = await Api.post(Api.login, body);
      let result = await response.json();
      if (response.status === 200) {
        setLoading(false)
        login(result["token"]);
        return navigate('/saldo')
      } else {
        setError('Login gagal. Periksa kembali email dan password.');
      }
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">email</label>
          <input
            type="text"
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
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
