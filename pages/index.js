import Head from 'next/head';
import Header from '../Components/Header';
import Jambotron from '../Components/Jambotron'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone V2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     { /*Header section */ }
     <Header />
     { /*Banner section */ }
     <Jambotron />
      
    </div>
  )
}
