import { useState } from "react";

const Country = ({countryDetails,visitedList}) => {
    
    // console.log(countryDetails)
// For Visited or not 
const [Visited,setVisited]=useState(false)
const handleVisitedStatus=()=>{
    setVisited(!Visited)
}

    return (
        <div style={{
            border: Visited? "2px solid red":"2px solid purple",
            marginTop: "10px",
            borderRadius: '5px'
        }}>
            <h4>Name:{countryDetails.name.common} </h4>
            <img style={{
                width: '100%', height: '100px', objectFit: 'cover'
            }} src={countryDetails.flags.png} alt="" />

            <button onClick={handleVisitedStatus}>{Visited?'Not Visited':'Visited'}</button>
            <button onClick={()=>{visitedList(countryDetails)}}>Add To List</button>
        </div>
    );
};

export default Country;