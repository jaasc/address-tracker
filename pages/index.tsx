import { NextApiRequest } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';
import Search from "../components/search";
import { IPdetail } from '../types/interface';

export default function Home({ detail } : { detail: IPdetail }) : JSX.Element {
  const [currentIP, setCurrentIP] = useState(detail)

  const Map = dynamic(() => import("../components/map"), {
    ssr: false
  });

  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
      </Head>
      <main className="font-rubik">
        <Search currentIP={currentIP} setCurrentIP={setCurrentIP}/>
        <div id="map" className="h-[80vh] w-full z-0 relative">
          <Map currentIP={currentIP}/>
        </div>
      </main>
    </>
  )
}

Home.getInitialProps = async ({ req } : {req : NextApiRequest }) : Promise<{detail: IPdetail;}> => {
  const ip = req.headers["x-real-ip"] || req.socket.remoteAddress;
  const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_GEO_KEY}&ip=${ip}`)
  const data: IPdetail = await res.json()

  return { detail: data };
};

