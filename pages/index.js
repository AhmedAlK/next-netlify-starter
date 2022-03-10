import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  console.log(process.env.URL);
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <button onClick={() => console.log(process.env)
        }>test environment variables</button>
        <button onClick={() => 
          fetch('/.netlify/functions/hello')
          .then(results => results.json())
          .then(data => console.log('TEST>', data.message))
        }>test api call</button>
      </main>

      <Footer />
    </div>
  )
}
