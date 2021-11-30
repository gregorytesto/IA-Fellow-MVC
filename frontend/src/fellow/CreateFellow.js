import { useState } from "react";
import { useHistory } from "react-router-dom";

let CreateFellow=()=>{
    let history = useHistory();

    let [ formObj, setFormObj ] = useState({});
    
    const handleSubmit=async(event)=>{
        event.preventDefault();

        // console.log(JSON.stringify(formObj));
        let res = await fetch("http://localhost:8080/api/fellows", {
            method: "POST",
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
            <div>Create Fellow Form</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input onInput={handleInput} name="name" type="text" id="name"/>
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input onInput={handleInput} name="age" type="text" id="age"/>
                </div>
                <div>
                    <label htmlFor="cohort">Cohort: </label>
                    <input onInput={handleInput} name="cohort" type="text" id="cohort"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
        
    )
}

export default CreateFellow;