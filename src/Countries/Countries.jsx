import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [allCountries, setAllCountries] = useState([])
    // console.log(allCountries)
    const [addVisited, setAddVisited] = useState([])

    const visitedList = (countryDetails) => {
        console.log('Add To visited')
        console.log(countryDetails)
        // const neww=[...addVisited,countryDetails]
        // setAddVisited(neww)
        setAddVisited([...addVisited, countryDetails])
    }


    // Fetch COntries Details
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setAllCountries(data))
            .catch(error => console.log("Error Occure wheling Fetching Data", error))
    }, [])

    return (
        <div  >
            <h3>Country Length: {allCountries.length} </h3>
            <h3>Total Visited Country:{addVisited.length} </h3>
            {/* Display Vistited Country list as <li> */}
            <ul>
                { addVisited.map((visited ,idx)=> <li key={idx}>
                    {visited.name.common}
                </li>)}
            </ul>


            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: '5px',
                boxShadow: "20px"
            }}>
                {/* Send countryDetails TO component */}
                {
                    allCountries.map((countryDetails, idx) => <Country
                        key={idx}
                        countryDetails={countryDetails}
                        visitedList={visitedList}
                    > </Country>)
                }
            </div>

        </div>
    );
};

export default Countries;