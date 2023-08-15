import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div style={{marginLeft:20}}>
            <label htmlFor={props.id || props.name} style={{marginBottom:10}}>{label}</label>
            <input className="input-field" {...field} {...props}  />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
            </div>
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div style={{marginLeft:20}}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} className='select-field'/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

//----------------------------------------------------------------//

const SignupForm = () => {
    return (
        <>
            <h1 style={{marginRight:'46%',marginLeft:'46%',marginTop:50,marginBottom:40}}>Sign up!</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    acceptedTerms: false, // added for our checkbox
                    jobType: '', // added for our select
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                    jobType: Yup.string()
                        .oneOf(
                            ['designer', 'development', 'product', 'other'],
                            'Invalid Job Type'
                        )
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className='form'>
                    <MyTextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Name"
                    />

                    <MyTextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                    />

                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                    />

                    <MySelect label="Job Type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </MySelect>

                    <MyCheckbox name="acceptedTerms">
                        I accept the terms and conditions
                    </MyCheckbox>

                    <button type="submit" className='submit-button'>Submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default SignupForm