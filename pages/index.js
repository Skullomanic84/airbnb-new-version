import Head from 'next/head';
import Header from '../Components/Header';
import Jambotron from '../Components/Jambotron';
import SmallCard from '../Components/SmallCard';
import MediumCard from '../Components/MediumCard';
import LargeCard from '../Components/LargeCard';

export default function Home({ exploreData, cardsData }) {
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


     { /*Main section*/ }
     <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

              {/*pull some data from a server - API endpoints */}

              {exploreData?.map(({img, distance, location}) => (
                <SmallCard
                key={img} 
                img={img}
                distance={distance}
                location={location}
                />
                ))
              }
          
          </div>      
        </section>
        
        {/*Medium card section */}
        <section>
              <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

        {/*medium card wrapper/container */}
              <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
                     {cardsData?.map(({ img, title }) => (
                          <MediumCard 
                          key={img}
                          img={img}
                          title={title} 
                          />
                        ))
                      }
              </div>
        </section>
        
        {/*large card wrapper/container */}
        <LargeCard 
        img='https://links.papareact.com/4cj'
        title='The Greatest Outdoors'
        description='Wishlists curated by Airbnb.'
        buttonText='Get Inspired'
        />



     </main>  
    </div>
  );
}


{/*JSON promise */}
export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) =>res.json()
  );

  const cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json())

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
