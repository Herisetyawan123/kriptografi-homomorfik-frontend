import React, { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router';
import Api from '~/action/api';
import type { SaldoModel } from '~/data/request/saldo';



export default function TopupPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [saldo, setSaldo] = useState<SaldoModel>({
    amount: 0,
    description: ''
  })
  const navigate = useNavigate()

  const onType = (value: number | string, key: string) => {
    setSaldo(prevState => ({ ...saldo, [key]: value }));
  }

  const topup = async () => {
    setLoading(true)
    // try {
    let body = {
      "amount": saldo.amount,
      "description": saldo.description
    }
    let response = await Api.post(Api.topup, {
      "amount": 100000,
      "description": "heheheh"
    }, true)
    let result = await response.json();
    if (response.status == 200) {
      setLoading(false)
      navigate('/history')
      return
    }
    setError(result["message"])
    // } catch (error) {
    //   throw error
    // }
    setLoading(false)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    topup()
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Top Up</h2>
      {
        error != null ? (
          <p className="text-red-500">
            {error}
          </p>
        ) : (
          <></>
        )
      }
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Amount</label>
          <input
            type="number"
            min={1000}
            step={1000}
            value={saldo.amount}
            onChange={(e) => onType(e.target.value, "amount")}
            required
            className="w-full p-3 border rounded-md mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <input
            type="text"
            onChange={(e) => onType(e.target.value, "description")}
            value={saldo.description}
            required
            className="w-full p-3 border rounded-md mt-2"
          />
        </div>
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600" disabled={loading}>
          {
            !loading ? "Saving" : "Loading"
          }
        </button>
      </form>
    </div>
  )
}
