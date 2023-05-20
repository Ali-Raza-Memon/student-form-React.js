import React, { useState } from "react"
import '../App.css';


const Form = () => {

    const [name,setName]= useState('')
    const [address,setAddress] = useState('')

    const handleClick=(e)=>{
        e.preventDefault();
        const student =[name,address];
        console.log(student);
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("New Student added")
        })
    }

    return (

        <div className=" d-flex justify-content-center">

        <div className="border border-primary brd w-40 p-5">
        <h2 className="d-flex justify-content-center mb-4">Add Student</h2>

            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">

                    </small>
                </div>
                <div className="form-group mt-1">
                    <label htmlFor="exampleInputPassword1">Email Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Email Address"
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                    />
                </div>

                <div className="mt-2">
                <button type="submit" className="btn btn-success btn-sm" onClick={handleClick}>
                    Save
                </button>
                <button type="reset" className="btn btn-danger btn-sm m-2">Cancel</button>
                </div>
            </form>
            {name}
            <br />
            {address}
            </div>

        </div>

    )


}

export default Form
