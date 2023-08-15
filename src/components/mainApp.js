import React from 'react';
import '../App.css'
import {useFormik } from "formik";
// import registerSchema from "../helper/registerSchema";
import * as Yup from 'yup';

export const MainApp = () => {

    const formik = useFormik({
        initialValues:{
            username:"",
            name:"",
            lastname:"",
            password:"",
            confirmPassword:"",
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values), null, 2)
        },
        validationSchema :  Yup.object().shape({
            username: Yup.string().email("its not proper email").required(),
            password: Yup
                .string()
                .min(8,'Password is too short - should be 8 chars minimum.')
                .max(20,'Password is too long - should be 20 chars maximum.')
                .matches(/^[a-zA-Z0-9_.-]*$/,'password can only contain latin letters.')
                .required(),
            // confirmPassword: Yup
            //     .string()
            //     .oneOf([Yup.ref('password',null)], 'password must match'),
            name: Yup.string().required(),
            lastname: Yup.string().required(),
        }),
    });

    return (
        <>
            <div style={{marginTop:80,marginBottom:30}}>

                <form onSubmit={formik.handleSubmit} className='form'>
                    <span className='text-form'> Formik Form </span>
                    <input
                        id='username'
                        type='email'
                        label='Email Address'
                        placeholder='Enter your Email'
                        className='input-field'
                        {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div>{formik.errors.username}</div>
                    ) : null}
                    <input
                        id='name'
                        type='text'
                        label='Name'
                        placeholder='Enter your Name'
                        className='input-field'
                        {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
                    <input
                        id='lastname'
                        type='text'
                        label='Lastname'
                        placeholder='Enter your Lastname'
                        className='input-field'
                        {...formik.getFieldProps('lastname')}
                    />
                    {formik.touched.lastname && formik.errors.lastname ? (
                        <div>{formik.errors.lastname}</div>
                    ) : null}
                    <input
                        id='password'
                        type='password'
                        label='Password'
                        placeholder=' Enter your Password'
                        className='input-field'
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                    <input
                        id='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        placeholder='Enter your Confirm Password'
                        className='input-field'
                        {...formik.getFieldProps('confirmPassword')}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div>{formik.errors.confirmPassword}</div>
                    ) : null}
                    <button type={"submit"} className='submit-button'>
                        <span> Register </span>
                    </button>
                </form>
            </div>
        </>
    )
}