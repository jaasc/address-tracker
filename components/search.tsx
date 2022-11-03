import { useState } from "react"

const geoKey = process.env.NEXT_PUBLIC_GEO_KEY

const Search = ({detail} : any) => {
    const [ip, setIp] = useState("")
    const [currentIP, setCurrentIP] = useState(detail)

    const searchIP = async (e : any) => {
        e.preventDefault()
        const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${geoKey}&ip=${ip}`)
        const data =  await res.json()
        setCurrentIP(data)
    }

    return(
        <div className="h-[40vh] bg-searchBg bg-cover bg-center flex flex-col items-center p-[2em]">
            <h1 className="text-white text-[25px] font-[500] tracking-[1px]">
                IP Address Tracker
            </h1>

            <form onSubmit={searchIP} className="rounded-lg bg-black shadow-lg my-[2em] w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] flex items-center">
                <input 
                    type="text" 
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                    placeholder="Search for any IP address or domain"
                    className="rounded-tl-lg rounded-bl-lg py-[1em] text-[18px] px-[1.5em] w-[85%]"
                    />
                <button type="submit" className="text-white font-[500] w-[15%] text-[23px]">
                    &gt;
                </button>
            </form>

            <div className="bg-white w-[80%] md:w-[60%] lg:w-[80%] rounded-lg shadow-lg py-[2em] px-[3em] flex flex-col lg:flex-row lg:justify-between px-[2em] z-[100] text-center">
                <div className="w-full">
                    <p className="text-darkGray uppercase font-[700] tracking-[1px] mb-[.5em]">
                        IP address
                    </p>
                    {
                        !currentIP.message && 
                        <h2 className="text-veryDarkGray font-[500] text-[23px]">
                            {currentIP.ip}
                        </h2>
                    }
                </div>
                <hr className="h-[80%] w-[5px] bg-darkGray mx-[1em] my-auto hidden lg:block"/>
                <div className="w-full my-[2em] lg:my-0">
                    <p className="text-darkGray uppercase font-[700] tracking-[1px] mb-[.5em]">
                        Location
                    </p>
                    {
                        !currentIP.message && 
                        <h2 className="text-veryDarkGray font-[500] text-[23px]">
                            {currentIP.city}, {currentIP.country_capital}, {currentIP.country_name}
                        </h2>
                    }
                </div>
                <hr className="h-[80%] w-[5px] bg-darkGray mx-[1em] my-auto hidden lg:block"/>
                <div className="w-full mb-[2em] lg:my-0">
                    <p className="text-darkGray uppercase font-[700] tracking-[1px] mb-[.5em]">
                            Timezone
                    </p>
                    {
                        !currentIP.message && 
                        <h2 className="text-veryDarkGray font-[500] text-[23px]">
                            {currentIP?.time_zone?.offset}
                        </h2>
                    }
                </div>
                <hr className="h-[80%] w-[5px] bg-darkGray mx-[1em] my-auto hidden lg:block"/>
                <div className="w-full">
                    <p className="text-darkGray uppercase font-[700] tracking-[1px] mb-[.5em]">
                            isp
                    </p>
                    {
                        !currentIP.message && 
                        <h2 className="text-veryDarkGray font-[500] text-[23px]">
                            {currentIP.isp}
                        </h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default Search