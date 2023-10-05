import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Header from '@/components/Header';

const PropertySchema = Yup.object().shape({
    propertyName: Yup.string().required('Required'),
    propertyType: Yup.string().required('Required'),
    propertyOwner: Yup.string().required('Required'),
    propertyImage: Yup.string().required('Required'),
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
        const result = await response.json();
    }
    return (
        <>
            <Header />
            <div className='flex justify-center items-center pt-32'>
                <Formik
                    initialValues={{
                        propertyName: '',
                        propertyType: '',
                        propertyImage: '',
                        propertyOwner: ownerDetails._id
                    }}
                    // validationSchema={PropertySchema}
                    onSubmit={(values) => {
                        handleAddProperty(values)
                       
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className='container flex flex-col p-8 border w-[800px] gap-8'>
                            <div>
                                <p className='font-semibold'> Name your property</p>
                                <Field name="propertyName" placeholder="Property Name" className=" border p-2 w-full" />
                                {errors.propertyName && touched.propertyName ? (
                                    <div className='text-red-600 text-sm'>{errors.propertyName}</div>
                                ) : null}
                            </div>

                            <div>
                                <p className='font-semibold'>Select your property type</p>
                                {errors.propertyType && touched.propertyType ? (
                                    <div className='text-red-600 text-sm'>{errors.propertyType}</div>
                                ) : null}
                                <div className='flex flex-row gap-2 flex-wrap'>
                                    <div className='flex'>
                                        <label className='border p-4 flex'>
                                            <Field type="radio" name="propertyType" value="Hotel" className="me-2" />
                                            <div className='w-[307px]'>
                                                <p>Hotel</p>
                                                <p className='text-sm text-gray-400'>Multi-unit accommodation building with shared facilities, restaurants, and services</p>
                                            </div>
                                        </label>
                                    </div>
                                    <div className='flex'>
                                        <label className='border p-4 flex'>
                                            <Field type="radio" name="propertyType" value="Guest House" className="me-2" />
                                            <div className='w-[307px]'>
                                                <p>Guest House</p>
                                                <p className='text-sm text-gray-400'>Private home or estate shared by host and guest, with separate rentable living space within</p>
                                            </div>
                                        </label>
                                    </div>

                                    <div className='flex'>
                                        <label className='border p-4 flex'>
                                            <Field type="radio" name="propertyType" value="Serviced Apartment" className="me-2" />
                                            <div className='w-[307px]'>
                                                <p>Serviced Apartment</p>
                                                <p className='text-sm text-gray-400'>Private home or estate shared by host and guest, with separate rentable living space within</p>
                                            </div>
                                        </label>
                                    </div>
                                    <div className='flex'>
                                        <label className='border p-4 flex'>
                                            <Field type="radio" name="propertyType" value="Resort" className="me-2" />
                                            <div className='w-[307px]'>
                                                <p>Resort</p>
                                                <p className='text-sm text-gray-400'>Private home or estate shared by host and guest, with separate rentable living space within</p>
                                            </div>
                                        </label>
                                    </div>

                                </div>
                            </div>
                            
                            <div>
                                <p>Add Property Image</p>
                                <input type='file' onChange={(e) => setFile(e.target.files[0])} />
                            </div>
                            
                            <div className='text-center mt-4'>
                                <button type="submit" className='bg-red py-2 px-12 text-white uppercase font-semibold tracking-wide'>Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

        </>
    )
}
export default registerProperty





