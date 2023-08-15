import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Alert } from '@mui/material';
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),


});

const registerUser = () => {
    const [responseMsg, setResponseMsg] = useState({msgLabel: '', msgType: ''})
    const addNewUser = async (values) => {
        try {
            const response = await fetch("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            const result = await response.json();
            if(response.status) {
                setResponseMsg({msgLabel: result.msg, msgType: response.status==409 ? 'error' : 'success'})
            }
           
        } catch (error) {
            setResponseMsg({msgLabel: error.msg, msgType: 'error'})
            console.error("Error posting data:", error);
        }
    }
    return (
        <>
            <div className='bg-blue-900'>
                <div className=' container mx-auto h-14 flex items-center text-white text-xl font-semibold'>
                    <h1 className='tracking-wider'>Bookly</h1>
                </div>

            </div>

            <div className='w-full flex justify-center items-center mt-16'>

                <div>
                    <div className='text-3xl text-gray-500 text-center'>
                        <h1>Sign up/Create an account</h1>
                    </div>
                 
                    {responseMsg.msgType && <Alert  severity={responseMsg.msgType} onClose={() => setResponseMsg({msgLabel: '', msgType: ''})}> {responseMsg.msgLabel} </Alert> }
                    
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            password: '',
                            email: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            addNewUser(values);
                        }}
                    >
                        {({ errors, touched }) => (

                            
                            <Form className='flex flex-col p-8 border-2 gap-5 w-[400px] mt-8 rounded-xl'>

                                
                                
                                <Field name="firstName" placeholder="First name" className=" border p-2" />
                                {errors.firstName && touched.firstName ? (
                                    <div>{errors.firstName}</div>
                                ) : null}


                                <Field name="lastName" placeholder="Last name" className="border p-2" />
                                {errors.lastName && touched.lastName ? (
                                    <div>{errors.lastName}</div>
                                ) : null}
                                <Field name="email" type="email" placeholder="Email" className="border p-2" />
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                                <Field name="password" type="password" placeholder="Password" className="border p-2" />
                                {errors.lastName && touched.lastName ? (
                                    <div>{errors.lastName}</div>
                                ) : null}
                                <div className='text-center mt-4'>
                                    <button type="submit" className='bg-blue-400 px-4 p-2  rounded-lg text-white w-2/5 transition duration-300 hover:bg-blue-200 hover:text-blue-900 uppercase font-semibold tracking-wide'>Submit</button>
                                </div>
                                <div className='text-xs text-center border-t border-b py-2 mt-4'>
                                    <p>By signing in or creating an account, you agree with our <span className='text-blue-900'>Terms & Conditions</span> and <span className='text-blue-900'>Privacy Statement</span></p>
                                </div>
                                <div className='text-xs text-center py-2'>
                                    <p>All rights reserved.
                                        Copyright 2023 – Bookly.com™ </p>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>

            </div>
        </>

    )
};

export default registerUser