import React, { useEffect, useState } from 'react';

//styles
import styles from "./SignUp.module.css"

//functions 
import validate from './validate';

//notif
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

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


    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name] : true})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (!Object.keys(errors).length) {
           notifyS()
        } else {
            notifyE()
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true, 
                isAccepted: true
            })
        }
    }


    const notifyS = () => toast.success(' Sign up successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });


        const notifyE = () => toast.error(' Complete the fields', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });


    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <h2 className={styles.header}>Sign up</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input type='text' name='name' value={data.name} onChange={inputHandler} onFocus={focusHandler} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email} onChange={inputHandler} onFocus={focusHandler} />
                    {errors.email && touched.email &&  <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>password</label>
                    <input type='password' name='password' value={data.password} onChange={inputHandler} onFocus={focusHandler} />
                    {errors.password && touched.password &&  <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input type='password' name='confirmPassword' value={data.confirmPassword} onChange={inputHandler} onFocus={focusHandler} />
                    {errors.confirmPassword && touched.confirmPassword &&  <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I accept terms of privacy policy</label>
                        <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={inputHandler} onFocus={focusHandler} />
                    </div> 
                    {errors.isAccepted && touched.isAccepted &&  <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons}>
                    <a href='#'>Login</a>
                    <button type='submit' onClick={submitHandler}>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
        
    );
};

export default SignUp;