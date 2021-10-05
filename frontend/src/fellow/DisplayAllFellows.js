import { useEffect, useState } from "react";

let DisplayAllFellows=()=>{
    let [fellows, setFellows] = useState([]);
    let getFellows=async()=>{
        let response = await fetch('http://localhost:8080/api/fellows');
        let fellowsData = await response.json();
        setFellows(fellowsData);
    }

    useEffect(()=>{
        getFellows();
    }, []);

    let fellowsToRender = fellows.map(({id, name, cohort, age})=>{
        return (
            <div key={id}>
                <h3>Name: { name }</h3>
                <div>Cohort: { cohort }</div>
                <div>Age: { age } </div>
            </div>
        )
    })

    return(
        <>
            <div>Display All Fellows</div>
            <div>
                { fellowsToRender }
            </div>
        </>
    )
}

export default DisplayAllFellows;