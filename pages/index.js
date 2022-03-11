import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React, { useState } from 'react'

export default function Home() {
  const [msg, setMsg] = useState(null)
  return (
    <div className="container">
      <Head>
        <title>Koally's place!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={msg} />

        <button onClick={() => 
          fetch('/.netlify/functions/hello')
          .then(results => results.json())
          .then(data => {
            setMsg(data.message);
          })
        }>Hello, Computer</button>

      </main>
      <Footer />
    </div>
  )
}
