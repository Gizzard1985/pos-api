import React from 'react'
import CaseCard from "../components/CaseCard"
import SingleCountry from "../components/SingleCountry"

const CoronaScreen = () => {
    return (
        <section>
            <CaseCard url = "https://covid19.mathdro.id/api"/>
            <SingleCountry/>
        </section>
    )
}

export default CoronaScreen
