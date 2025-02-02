import React, { useEffect, useState } from 'react'
import CardHistory from '~/components/card-history'
import historyStatic from '~/data/static/history'
import LoadingPage from '../loading/loading';
import Api from '~/action/api';
import { TypeEnum } from '~/data/props/history';

export default function HistoryPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [history, setHistory] = useState<TransactionModel[]>([]);

  const getHistory = async () => {
    setLoading(true)
    let response = await Api.get(Api.transactions, true);
    let result = await response.json()
    if (response.status == 200) {
      setHistory(result["data"].map((value: any) => ({
        "id": value.id,
        "type": value.type,
        "amount": value.amount,
        "description": "yuk nabung terus disini"
      })))
    }
    setLoading(false)
  }

  useEffect(() => {
    getHistory()
  }, [])

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">History Transaction</h2>

      {
        history.map(
          (value, idx) => <CardHistory
            key={idx}
            amount={value.amount}
            description={value.description}
            type={value.type == "topup" ? TypeEnum.Topup : TypeEnum.Withdraw} />
        )
      }
    </div>

  )
}
