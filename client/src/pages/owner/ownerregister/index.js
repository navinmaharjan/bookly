import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Alert } from '@mui/material';
const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
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
            <div className='w-full flex flex-col justify-center items-center mt-32 mb-[291px]'>
                <div className='text-3xl text-gray-500 text-center'>
                    <h1>Create an account to list your property</h1>
                </div>

                {responseMsg.msgType && <Alert severity={responseMsg.msgType} onClose={() => setResponseMsg({ msgLabel: '', msgType: '' })}> {responseMsg.msgLabel} </Alert>}

                <Formik
                    initialValues={{
                        fullName: '',
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
                            <Field name="fullName" placeholder="Full Name" className="border p-2" />
                            {errors.fullName && touched.fullName ? (
                                <div className='text-red-600'>{errors.fullName}</div>
                            ) : null}
                            <Field name="email" type="email" placeholder="Email" className="border p-2" />
                            {errors.email && touched.email ? <div className='text-red-600'>{errors.email}</div> : null}

                            <Field name="password" type="password" placeholder="Password" className="border p-2" />
                            {errors.lastName && touched.lastName ? (
                                <div className='text-red-600'>{errors.lastName}</div>
                            ) : null}
                            <div className='text-center'>
                                <button type="submit" className='bg-blue px-4 p-2 text-white w-2/5'>Submit</button>
                            </div>
                            <div className='text-sm text-gray-400 cursor-pointer hover:text-blue text-center' onClick={() => router.push('../owner/ownerlogin')}>
                                <p>Already have an account/Sign In</p>
                            </div>
                        </Form>
                    )}
                </Formik>


            </div>
        </>

    )
};

export default registerOwner