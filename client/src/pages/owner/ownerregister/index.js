import React, { useState } from 'react';
import { useRouter } from 'next/router'
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
    mobileNo: Yup.string()
        .min(10, 'Invalid Number')
      
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),


});

const registerOwner = () => {
    const router = useRouter()
    const [responseMsg, setResponseMsg] = useState({ msgLabel: '', msgType: '' })
    const addNewOwner = async (values) => {
        try {
            const response = await fetch("http://localhost:8080/ownerregister", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),

            });

            const result = await response.json();
            if (response.status) {
                setResponseMsg({ msgLabel: result.msg, msgType: response.status == 409 ? 'error' : 'success' })
            }

        } catch (error) {
            setResponseMsg({ msgLabel: error.msg, msgType: 'error' })
            console.error("Error posting data:", error);
        }
    }
    return (
        <>
            <div className='bg-green-900 py-4'>
                <div className='container mx-auto flex justify-between items-center'>
                    <div>
                        <h1 className='tracking-wider text-white'>Bookly</h1>
                    </div>

                    {/* <div>
                        <input type='text' placeholder='Search' className='w-80'></input>
                    </div> */}
                    {/* <div className='flex gap-10'>
                        <button className='text-white'>List your Property</button>
                        
                    </div> */}

                </div>
            </div>

            <div className='w-full flex flex-col justify-center items-center mt-16'>


                <div className='text-3xl text-gray-500 text-center'>
                    <h1>Create an account to manage your property</h1>
                </div>

                {responseMsg.msgType && <Alert severity={responseMsg.msgType} onClose={() => setResponseMsg({ msgLabel: '', msgType: '' })}> {responseMsg.msgLabel} </Alert>}

                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        mobileNo: '',
                        email: '',
                        password: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        addNewOwner(values);
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

                            <Field name="mobileNo" placeholder="Mobile Number" className="border p-2" />
                            {errors.mobileNo && touched.mobileNo ? (
                                <div>{errors.mobileNo}</div>
                            ) : null}


                            <Field name="email" type="email" placeholder="Email" className="border p-2" />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}

                            <Field name="password" type="password" placeholder="Password" className="border p-2" />
                            {errors.lastName && touched.lastName ? (
                                <div>{errors.lastName}</div>
                            ) : null}


                            <div className='text-center mt-4'>
                                <button type="submit" className='bg-green-900 px-4 p-2  rounded-lg text-white w-2/5 transition duration-300 hover:bg-green-700 uppercase font-semibold tracking-wide'>Submit</button>
                            </div>

                            <div className='text-sm text-gray-400 cursor-pointer hover:text-green-900 text-center' onClick={() => router.push('../owner/ownerlogin')}>
                                <p>Already have an account/Sign In</p>
                            </div>
                            <div className='text-xs text-center border-t border-b py-2 mt-2'>
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
        </>

    )
};

export default registerOwner