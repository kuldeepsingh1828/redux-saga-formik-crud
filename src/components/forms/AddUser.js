import React, { useState } from 'react'
import { Formik } from 'formik'

console.log(Formik);
function AddUser() {
    
    const [user, setUser] = useState({ name: '', college: '', company: '', age: '', ph: '' });
   
    const changeHandler = (event) => {
        let { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }
   
    const submitHandler = (event) => {
        event.preventDefault();
        alert("FORM Submitted....");
    }
    return (
        <div>
            <form>
                <label>Name</label>
                <input name='name' value={user.name} onChange={changeHandler} />
                <label>College</label>
                <input name='college' value={user.college} onChange={changeHandler} />
                <label>Company</label>
                <input name='company' value={user.company} onChange={changeHandler} />
                <label>Age</label>
                <input name='age' value={user.age} onChange={changeHandler} />
                <label>Phone</label>
                <input name='ph' value={user.ph} onChange={changeHandler} />
                <button onClick={submitHandler}>Add User</button>
            </form>
        </div>
    )
}

export default AddUser