import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const PropertySchema = Yup.object().shape({
    propertyName: Yup.string().required('Required'),
    propertyCity: Yup.string().required('Required'),
    propertyStreetAddress: Yup.string().required('Required'),
    propertySubStreetAddress: Yup.string().required('Required'),
    propertyState: Yup.string().required('Required'),
    propertyType: Yup.string().required('Required'),
    propertyOwner: Yup.string().required('Required'),
    propertyImage: Yup.string().required('Required'),
    propertyCancellationPolicy: Yup.string().required('Required'),
    propertyCheckInFrom: Yup.string().required('Required'),
    propertyCheckInTo: Yup.string().required('Required'),
    propertyCheckOut: Yup.string().required('Required'),
    propertyStarRating: Yup.string().required('Required'),
    propertyRoomType: Yup.string().required('Required'),
    suiteRoomImage: Yup.string().required('Required'),
    deluxeRoomImage: Yup.string().required('Required'),
    standardRoomImage: Yup.string().required('Required'),
    propertyInformation: Yup.string().required('Required'),
    paymentInformation: Yup.string().required('Required')
});

const FormOne = ({ nextStep, handleAddProperty }) => {
    // const [file, setFile] = useState(null)
    return (
        <>
            <div className='w-full flex justify-center items-center py-4'>
                <div>
                    <div className='text-2xl  text-center pb-4'>
                        <h1>Match your property to the right travelers.</h1>
                        <p className='text-sm text-gray-400'>All information is required unless marked optional.</p>
                    </div>
                    <Formik
                        initialValues={{
                            propertyName: '',
                            propertyType: '',
                            propertyCancellationPolicy: '',
                        }}
                        validationSchema={PropertySchema}
                        onSubmit={values => {
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
                                    <p className='font-semibold'>Cancellation Policy</p>
                                    {errors.propertyCancellationPolicy && touched.propertyCancellationPolicy ? (
                                        <div className='text-red-600 text-sm'>{errors.propertyCancellationPolicy}</div>
                                    ) : null}
                                    <div className='flex flex-row gap-2 flex-wrap'>
                                        <div className='flex'>
                                            <label className='border p-4 flex'>
                                                <Field type="radio" name="propertyCancellationPolicy" value="Hotel" className="me-2" />
                                                <div className='w-[680px]'>
                                                    <p>Flexible</p>
                                                    <p className='text-sm text-gray-400'>Guest cancellations more than 1 day before check-in will get a 100% refund; 1 day or fewer before check-in and no shows will get 0% refund.</p>
                                                </div>
                                            </label>
                                        </div>
                                        <div className='flex'>
                                            <label className='border p-4 flex'>
                                                <Field type="radio" name="propertyCancellationPolicy" value="Guest House" className="me-2" />
                                                <div className='w-[680px]'>
                                                    <p>Moderate</p>
                                                    <p className='text-sm text-gray-400'>Guest cancellations more than 5 days before check-in will get a 100% refund; 5 days or fewer before check-in and no shows will get 0% refund</p>
                                                </div>
                                            </label>
                                        </div>
                                        <div className='flex'>
                                            <label className='border p-4 flex'>
                                                <Field type="radio" name="propertyCancellationPolicy" value="Bed & Breakfast" className="me-2" />
                                                <div className='w-[680px]'>
                                                    <p>Strict</p>
                                                    <p className='text-sm text-gray-400'>Guest cancellations more than 7 days before check-in will get a 100% refund; 7 days or fewer before check-in will get a 50% refund; no shows will get 0% refund</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
                                    <p>Add Property Image</p>
                                    <input type='file' onChange={(e) => setFile(e.target.files[0])} />
                                </div> */}
                                <div className='text-center mt-4'>
                                    <button onClick={nextStep} type="submit" className='bg-blue py-2 px-12 text-white uppercase font-semibold tracking-wide'>Next</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}
const FormTwo = ({ nextStep, previousStep }) => {
    return (
        <>
            <div className='w-full flex justify-center items-center py-4'>
                <div>
                    <div className='text-2xl  text-center pb-4'>
                        <h1>Put yourself on the map</h1>
                        <p className='text-sm text-gray-400'>Where will your guests be staying?</p>
                    </div>
                    <Formik
                        initialValues={{
                            propertyStreetAddress: '',
                            propertySubStreetAddress: '',
                            propertyState: '',
                            propertyCity: ''
                        }}
                        validationSchema={PropertySchema}
                        onSubmit={values => {
                            handleAddProperty(values)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className='container flex flex-col p-8 border w-[800px] gap-8'>
                                <div>
                                    <p className='font-semibold'> Location</p>
                                    <p className='text-sm  text-gray-400'>Guests will only receive your exact address once they’ve confirmed a booking.</p>
                                    <div className='flex flex-col gap-4'>
                                        <Field name="propertyStreetAddress" placeholder="Street Address" className=" border p-2 w-full" />
                                        {errors.propertyStreetAddress && touched.propertyStreetAddress ? (
                                            <div className='text-red-600 text-sm'>{errors.propertyStreetAddress}</div>
                                        ) : null}

                                        <Field name="propertySubStreetAddress" placeholder="Street Address-2" className=" border p-2 w-full" />
                                        {errors.propertySubStreetAddress && touched.propertySubStreetAddress ? (
                                            <div className='text-red-600 text-sm'>{errors.propertySubStreetAddress}</div>
                                        ) : null}

                                        <Field name="propertyCity" placeholder="City" className=" border p-2 w-full" />
                                        {errors.propertyCity && touched.propertyCity ? (
                                            <div className='text-red-600 text-sm'>{errors.propertyCity}</div>
                                        ) : null}

                                        <Field name="propertyState" placeholder="State/Province" className=" border p-2 w-full" />
                                        {errors.propertyState && touched.propertyState ? (
                                            <div className='text-red-600 text-sm'>{errors.propertyState}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9076393965574!2d85.3212974764132!3d27.72013782492552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191a7fd6e23d%3A0x412928126ce9b231!2sS.K.%20Electrical%20Shop!5e0!3m2!1sen!2snp!4v1695190406826!5m2!1sen!2snp" className="w-full h-96" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className='flex gap-4 justify-center'>
                                    <div className='text-center mt-4'>
                                        <button onClick={previousStep} type="submit" className='bg-transparent border py-2 px-12 text-blue uppercase font-semibold tracking-wide'>Previous</button>
                                    </div>
                                    <div className='text-center mt-4'>
                                        <button onClick={nextStep} type="submit" className='bg-blue  py-2 px-12 text-white uppercase font-semibold tracking-wide'>Next</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}
const FormThree = ({ nextStep, previousStep }) => {
    return (
        <>
            <div className='w-full flex justify-center items-center py-4'>
                <div>
                    <div className='text-2xl  text-center pb-4'>
                        <h1>Put yourself on the map</h1>
                        <p className='text-sm text-gray-400'>Where will your guests be staying?</p>
                    </div>
                    <Formik
                        initialValues={{
                            propertyStreetAddress: '',
                            propertySubStreetAddress: '',
                            propertyState: '',
                            propertyCity: ''
                        }}
                        validationSchema={PropertySchema}
                        onSubmit={values => {
                            handleAddProperty(values)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className='container flex flex-col p-8 border w-[800px] gap-8'>
                                <div>
                                    <p className='font-semibold'> Location</p>
                                    <p className='text-sm  text-gray-400'>Guests will only receive your exact address once they’ve confirmed a booking.</p>
                                    <div className='flex flex-col gap-4'>
                                        <Field name="propertyStreetAddress" placeholder="Street Address" className=" border p-2 w-full" />
                                        {errors.propertyStreetAddress && touched.propertyStreetAddress ? (
                                            <div className='text-red-600 text-sm'>{errors.propertyStreetAddress}</div>
                                        ) : null}

                                        <Field name="propertySubStreetAddress" placeholder="Street Address-2" className=" border p-2 w-full" />
                                        {errors.propertySubStreetAddress && touched.propertySubStreetAddress ? (
                                            <div className='text-red-600 text-sm'>{errors.propertySubStreetAddress}</div>
                                        ) : null}

                                        <Field name="propertyCity" placeholder="City" className=" border p-2 w-full" />
                                        {errors.propertyCity && touched.propertyCity ? (
                                            <div className='text-red-600 text-sm'>{errors.propertyCity}</div>
                                        ) : null}

                                        <Field name="propertyState" placeholder="State/Province" className=" border p-2 w-full" />
                                        {errors.propertyState && touched.propertyState ? (
                                            <div className='text-red-600 text-sm'>{errors.propertyState}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex gap-4 justify-center'>
                                    <div className='text-center mt-4'>
                                        <button onClick={previousStep} type="submit" className='bg-transparent border py-2 px-12 text-blue uppercase font-semibold tracking-wide'>Previous</button>
                                    </div>
                                    <div className='text-center mt-4'>
                                        <button onClick={nextStep} type="submit" className='bg-blue  py-2 px-12 text-white uppercase font-semibold tracking-wide'>Next</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

const registerProperty = () => {
    const totalPageStep = 3
    const [pageStep, setPageStep] = useState(1)
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
    const nextStep = () => {
        if (pageStep < totalPageStep) {
            setPageStep(pageStep + 1)
        }
    }
    const previousStep = () => {
        if (pageStep < totalPageStep) {
            setPageStep(pageStep - 1)
        }
    }
    return (
        <>
            <div>
                {pageStep === 1 && (
                    <FormOne nextStep={nextStep} />
                )}
                {pageStep === 2 && (
                    <FormTwo nextStep={nextStep} previousStep={previousStep} />
                )}
                 {pageStep === 3 && (
                    <FormThree nextStep={nextStep} previousStep={previousStep} />
                )}
            </div>
        </>
    )
}
export default registerProperty





