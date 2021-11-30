import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

let FellowForm=()=>{
    let history = useHistory();
    let { id } = useParams();

    let [ formObj, setFormObj ] = useState({});

    const fetchFellowData=async()=>{
        let res = await fetch("http://localhost:8080/api/fellows/" + id);
        let fellowData = await res.json();
        setFormObj(fellowData);
    }

    useEffect(()=>{
        fetchFellowData();
    }, []);
    
    const handleSubmit=async(event)=>{
        event.preventDefault();

        let url = "http://localhost:8080/api/fellows";

        if(id) url += "/" + id;

        let res = await fetch(url, {
            method: id ? "PUT" : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObj)
        });
        await res.json();
        history.push("/fellows");
    }

    const handleInput=(event)=>{
        let { name, value } = event.target;
        let newObj = { ...formObj, [name]: value };
        setFormObj(newObj);
    }

    return(
        <div>
            <div>{ id ? "Update" : "Create" } Fellow Form</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input onInput={handleInput} value={formObj?.name} name="name" type="text" id="name"/>
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input onInput={handleInput} value={formObj?.age} name="age" type="text" id="age"/>
                </div>
                <div>
                    <label htmlFor="cohort">Cohort: </label>
                    <input onInput={handleInput} value={formObj?.cohort} name="cohort" type="text" id="cohort"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
        
    )
}

export default FellowForm;