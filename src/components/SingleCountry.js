import {useState} from 'react'
import useCorona from "../hooks/useCorona"
import CaseCard from './CaseCard'

const SingleCountry = () => {
    const [search, setSearch]=useState("GHA")
    const {isPending, error, covid}=useCorona("https://covid19.mathdro.id/api/countries")
    return (
        <>
        <div className="search" style={{textAlign:"center"}}>
            {
                !isPending && !error && covid &&(
                   <select onChange={(e)=>setSearch(e.target.value)}  style={{padding: "6px 10px", margin: 20}}>
                     

                       <option>Choose Country</option>
                       {covid.countries.map((country)=> (
                           <option value={`${country.iso3}`}>{country.name} </option>
                       ))}
                   </select> 
                )
            }
        </div>
           <CaseCard url= {`https://covid19.mathdro.id/api/countries/${search.length >=2 ? search: "GHA"}`}/> 
        </>
    )
};

export default SingleCountry;
