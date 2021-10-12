import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

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
            <Link key={id} to={"/fellows/" + id}>
                <div>Name: { name }</div>
                <div>Cohort: { cohort }</div>
                <div>Age: { age } </div>
            </Link>
        )
    })

    return(
        <>
            <div>Display All Fellows</div>
            <div id="fellow-list">
                { fellowsToRender }
            </div>
        </>
    )
}

export default DisplayAllFellows;