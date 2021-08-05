import Head from 'next/head'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     { /*Header section */ }
     <Header />
     { /*Banner section */ }
      
    </div>
  )
}
