import React from 'react'
import useCorona from '../hooks/useCorona'
import Loarder from "./Loader"


const CaseCard = ({url}) => {
    const {error, isPending, covid} = useCorona(url)

    if (isPending) return <Loarder/>
    if (error) return <h1>OOPS!! something went wrong</h1>
    return (
        <section className = "container">
            {
                covid && (
                    <div className = "card-container">
                    <div className="card-confirmed">
                    <div className="card-header">
                        <h2>CONFIRMED CASES</h2>
                    </div>
                    <div className="card-body">
                        <h2>{covid.confirmed.value}</h2>
                    </div>
                </div>  
                 <div className="card-recoveries">
                 <div className="card-header">
                     <h2>RECOVERIES</h2>
                 </div>
                 <div className="card-body">
                     <h2>{covid.recovered.value}</h2>
                 </div>
             </div>   
              <div className="card-deaths">
              <div className="card-header">
                  <h2>DEATHS</h2>
              </div>
              <div className="card-body">
                  <h2>{covid.deaths.value}</h2>
              </div>
          </div>   
          </div> 
                )
            }
           
        </section>
    )
}

export default CaseCard
