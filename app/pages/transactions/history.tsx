import React, { useEffect, useState } from 'react'
import CardHistory from '~/components/card-history'
import historyStatic from '~/data/static/history'
import LoadingPage from '../loading/loading';
import { clearTimeout } from 'timers';

export default function HistoryPage() {
  const [loading, setLoading] = useState<boolean>(false);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">History Transaction</h2>

      {
        historyStatic.map(
          (value, idx) => <CardHistory
            key={idx}
            amount={value.amount}
            description={value.description}
            type={value.type} />
        )
      }
    </div>

  )
}
