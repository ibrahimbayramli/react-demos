import React from 'react';
import {useState} from "react";

function InputExample(props) {
    const [form,setForm]=useState([{name: "", surname: ""}])
    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    return (
        <div style={{margin:"50px",padding:"50px"}} >
            Please enter a name
            <br/>
            <input  name="name" value={form.name} onChange={onChangeInput}/>
            <br/>
            <input  name="surname" value={form.surname} onChange={onChangeInput}/>
            <br/>
            {form.name}
            <br/>
            {form.surname}

        </div>
    );
}

export default InputExample;
