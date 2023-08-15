import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Register =() =>{

    return(
        <>
            <div style={{marginTop:80,marginBottom:30}} />
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '' }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className='form'>
                    <div style={{marginLeft:15}} >
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" className='input-field' />
                        <ErrorMessage name="firstName" />
                    </div>
                    <div style={{marginLeft:15}} >
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" className='input-field'/>
                        <ErrorMessage name="lastName" />
                    </div>
                    <div style={{marginLeft:15}} >
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email" className='input-field'/>
                        <ErrorMessage name="email" />
                    </div>
                    <button type="submit" className='submit-button'>Submit</button>
                </Form>
            </Formik>
        </>
    )
}