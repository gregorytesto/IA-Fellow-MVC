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

    let handleDeleteFellow=async(id)=>{
        await fetch('http://localhost:8080/api/fellows/' + id, {
            method: "DELETE"
        });
        getFellows();
    }

    let fellowsToRender = fellows.map(({id, name, cohort, age})=>{
        return (
            <div key={id} className="fellow_item">
                <div onClick={()=>handleDeleteFellow(id)} className="close">X</div>
                <Link  to={"/fellows/" + id}>
                    <div>Name: { name }</div>
                    <div>Cohort: { cohort }</div>
                    <div>Age: { age } </div>
                </Link>
            </div>
        )
    })

    return(
        <>
            <div>Display All Fellows</div>
            <div id="fellow-list">
                <div className="fellow_item">
                    <Link to={"/fellows/create"}>
                        Create New Fellow
                    </Link>
                </div>
                { fellowsToRender }
            </div>
        </>
    )
}

export default DisplayAllFellows;