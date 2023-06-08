import React, { useEffect, useState } from 'react';

//styles
import styles from "./SignUp.module.css"

//functions 
import validate from './validate';

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        setErrors(validate(data))
        console.log(errors);
    },[data])

    const inputHandler = (event) => {
        if(event.target.name === 'isAccepted') {
            setData({...data, [event.target.name] : event.target.checked})
        } else {
            setData({...data, [event.target.name] : event.target.value})
        }
    }    

    return (
        <div>
            <form>
                <h2>Sign up</h2>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' value={data.name} onChange={inputHandler} />
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email} onChange={inputHandler} />
                </div>
                <div>
                    <label>password</label>
                    <input type='password' name='password' value={data.password} onChange={inputHandler} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type='password' name='confirmPassword' value={data.confirmPassword} onChange={inputHandler} />
                </div>
                <div>
                    <label>I accept terms of privacy policy</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={inputHandler} />
                </div>
                <div>
                    <a href='#'>Login</a>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;