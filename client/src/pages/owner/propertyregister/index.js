import React,{useState} from 'react';
import { useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const PropertySchema = Yup.object().shape({
    propertyName: Yup.string()
        .required('Required'),
    propertyRating: Yup.string()
        .required('Required'),
    propertyOwner: Yup.string()
        .required('Required'),
    propertyImage:  Yup.string()
   
  
});


const registerProperty = () => {
    const { ownerDetails } = useSelector(state => state.owner)
    
    const[file, setFile] = useState(null)
    
    const handleAddProperty = async (values) => {
        debugger
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
            <div className='bg-green-900'>
                <div className=' container mx-auto h-14 flex items-center text-white text-xl font-semibold'>
                    <h1 className='tracking-wider'>Bookly</h1>
                </div>

            </div>

            <div className='w-full flex justify-center items-center mt-16'>

                <div>
                    <div className='text-3xl text-gray-500 text-center'>
                        <h1>List your property</h1>
                    </div>

                    <Formik
                        initialValues={{
                            propertyName: '',
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
                            <Form className='flex flex-col p-8 border-2 w-[500px] gap-8 mt-8 rounded-xl'>

                                <div>
                                    <p className='font-semibold'>What's the name of your property?</p>
                                    <Field name="propertyName" placeholder="Property Name" className=" border p-2 w-full" />
                                    {errors.propertyName && touched.propertyName ? (
                                        <div>{errors.propertyName}</div>
                                    ) : null}
                                </div>

                             

                                <div>
                                    <p className='font-semibold'>Choose your property classification</p>
                                    <div className='flex flex-col gap-4'>
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
                                    <p className='font-semibold'>Add Property Image</p>
                                    <input type='file' onChange={(e) => setFile(e.target.files[0])}/>
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