import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const PropertySchema = Yup.object().shape({
    propertyName: Yup.string()
        .required('Required'),
    propertyCity: Yup.string()
        .required('Required'),
    propertyStreetAddress: Yup.string()
        .required('Required'),
    propertySubStreetAddress: Yup.string()
        .required('Required'),
    propertyState: Yup.string()
        .required('Required'),
    propertyRating: Yup.string()
        .required('Required'),
    propertyOwner: Yup.string()
        .required('Required'),
    propertyImage: Yup.string()
});

const registerProperty = () => {
    const { ownerDetails } = useSelector(state => state.owner)

    const [file, setFile] = useState(null)

    const handleAddProperty = async (values) => {
        const formData = new FormData()
        Object.entries(values).map((item) => {
            formData.append(item[0], item[1])
        })
        formData.append('propertyImage', file)

        const response = await fetch('http://localhost:8080/property', {
            method: 'POST',
            body: formData,
        })
        // const result = await response.json()
    }
    return (
        <>
            <div className='w-full flex justify-center items-center '>
                <div>
                    <div className='text-3xl text-gray-500 text-center'>
                        <h1>List your property</h1>
                    </div>
                    <Formik
                        initialValues={{
                            propertyName: '',
                            propertyCity: '',
                            propertyStreetAddress: '',
                            propertySubStreetAddress: '',
                            propertyState: '',
                            propertyRating: '',
                            propertyOwner: (ownerDetails._id),
                            propertyImage: ''

                        }}
                        validationSchema={PropertySchema}
                        onSubmit={values => {
                            handleAddProperty(values)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className='flex flex-col p-8 border-2 w-[500px] gap-4 mt-8 rounded-xl'>
                                <div>
                                    <p>Property Name</p>
                                    <Field name="propertyName" placeholder="Property Name" className=" border p-2 w-full" />
                                    {errors.propertyName && touched.propertyName ? (
                                        <div>{errors.propertyName}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <p>Property Address</p>
                                    <Field name="propertyCity" placeholder="City" className=" border p-2 w-full" />
                                    {errors.propertyCity && touched.propertyCity ? (
                                        <div>{errors.propertyCity}</div>
                                    ) : null}
                                    <Field name="propertyStreetAddress" placeholder="Street Address" className=" border mt-4 p-2 w-full" />
                                    {errors.propertyStreetAddress && touched.propertyStreetAddress ? (
                                        <div>{errors.propertyStreetAddress}</div>
                                    ) : null}
                                    <Field name="propertySubStreetAddress" placeholder="Street Address Line 2" className=" border mt-4 p-2 w-full" />
                                    {errors.propertySubStreetAddress && touched.propertySubStreetAddress ? (
                                        <div>{errors.propertySubStreetAddress}</div>
                                    ) : null}
                                    <Field name="propertyState" placeholder="State" className=" border mt-4 p-2 w-full" />
                                    {errors.propertyState && touched.propertyState ? (
                                        <div>{errors.propertyState}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <p>Choose your property classification</p>
                                    <div className='flex flex-col gap-2'>
                                        <label>
                                            <Field type="radio" name="propertyRating" value="Five Star" className="me-2" />
                                            Five Star
                                        </label>
                                        <label>
                                            <Field type="radio" name="propertyRating" value="Three Star" className="me-2" />
                                            Three Star
                                        </label>
                                        <label>
                                            <Field type="radio" name="propertyRating" value="Guest House" className="me-2" />
                                            Guest House
                                        </label>
                                        <label>
                                            <Field type="radio" name="propertyRating" value="Furnished Apartment" className="me-2" />
                                            Furnished Apartment
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <p>Add Property Image</p>
                                    <input type='file' onChange={(e) => setFile(e.target.files[0])} />
                                </div>
                                <div className='text-center mt-4'>
                                    <button type="submit" className='bg-green-900 px-2 p-2  rounded-lg text-white w-2/5 transition duration-300 hover:bg-green-700 uppercase font-semibold tracking-wide'>Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

            </div>
        </>
    )
}







export default registerProperty