import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

let DisplayFellow=()=>{
    let { id } = useParams();
    let [ fellow, setFellow ] = useState();

    let fetchFellow=async()=>{
        let res = await fetch("http://localhost:8080/api/fellows/" + id);
        let fellow = await res.json();
        setFellow(fellow);
    }

    useEffect(()=>{
        fetchFellow();
    }, []);
    return(
        <>
            <div>Display Fellow</div>
            <div>{fellow?.name}</div>
        </>
    )
}

export default DisplayFellow;