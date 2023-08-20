import React from 'react'

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { handleLogOut } from '@/redux/reducerSlice/userSlice'

function index() {

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    });

    const { userDetails } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const router = useRouter()
    return (
        <>
         

            <div className='w-full flex items-center justify-center pt-32 pb-[231px]'>
                <div class="flex flex-wrap  drop-shadow-lg bg-white h-[600px]">
                    <div class="border-r border-gray-200 flex flex-col items-center">
                        <div className='flex flex-col items-center py-10'>
                            <img className="inline-block flex-shrink-0 h-[8.875rem] w-[8.875rem] rounded-full relative cursor-pointer" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />

                            <div className='text-2xl'>
                                <h3 className="font-semibold text-gray-500">{userDetails.firstName} {userDetails.lastName}</h3>
                            </div>

                        </div>



                        <nav class="flex flex-col  pb-10" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">

                            <button type="button" class="pl-10 w-60 border-b-[1px] border-gray-300  hs-tab-active:border-green-900 hs-tab-active:bg-green-900 hs-tab-active:text-white dark:hs-tab-active:text-green-600 py-3 pr-4 inline-flex items-center gap-3  border-transparent text-base  text-gray-500 hover:text-green-600 active" id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
                                Account
                            </button>
                            <button type="button" class=" pl-10 w-60 border-b-[1px] border-gray-300 hs-tab-active:border-green-900 hs-tab-active:bg-green-900  hs-tab-active:text-white dark:hs-tab-active:text-green-600 py-3 pr-4 inline-flex items-center gap-3  border-transparent text-base  text-gray-500 hover:text-green-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-2" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
                                Password
                            </button>
                            <button type="button" class=" pl-10 w-60 border-b-[1px] border-gray-300 hs-tab-active:border-green-900 hs-tab-active:bg-green-900 hs-tab-active:text-white dark:hs-tab-active:text-green-600 py-3 pr-4 inline-flex items-center gap-3  border-transparent text-base  text-gray-500 hover:text-green-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-3" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
                                Payment Method
                            </button>
                        </nav>
                    </div>

                    <div class="w-[920px] px-10 py-32 ">

                        <div id="vertical-tab-with-border-1" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-1">
                            <h3 className='text-2xl font-semibold'>Account Settings</h3>
                            <div className='flex gap-10 pt-5'>
                                <div>
                                    <p>First Name</p>
                                    <input type="text" placeholder='' className='border border-gray-200 w-[400px]'/>
                                </div>

                                <div>
                                    <p>Last Name</p>
                                    <input type="text" placeholder='' className='border border-gray-200 w-[400px]' />
                                </div>
                            </div>

                            <div className='flex gap-10 pt-5'>
                                <div>
                                    <p>Email</p>
                                    <input type="text" placeholder='' className='border border-gray-200 w-[400px]' />
                                </div>

                                <div>
                                    <p>Mobile No.</p>
                                    <input type="text" placeholder='' className='border border-gray-200 w-[400px]' />
                                </div>
                            </div>

                            <div className='flex gap-10 pt-5'>
                                <div>
                                    <p>City</p>
                                    <input type="text" placeholder='' className='border border-gray-200 w-[400px]' />
                                </div>

                                <div>
                                    <p>Address</p>
                                    <input type="text" placeholder='' className='border border-gray-200 w-[400px]' />
                                </div>
                            </div>

                            <div className='text-start mt-10 w-full'>
                                <button type="submit" className='bg-green-900 px-4 p-2  rounded-lg text-white w-[120px] transition duration-300  hover:bg-green-700 hover:text-white uppercase font-semibold tracking-wide'>Update</button>
                            </div>

                        </div>
                        <div id="vertical-tab-with-border-2" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-2">
                        <h3 className='text-2xl font-semibold'>Password Settings</h3>
                            <div className='flex gap-10 pt-5'>
                                <div>
                                    <p>Old Password</p>
                                    <input type="password" placeholder='' className='border border-gray-200 w-[400px]' />
                                </div>

                             
                            </div>

                            <div className='flex gap-10 pt-5'>
                                <div>
                                    <p>New Password</p>
                                    <input type="password" placeholder='' className='border border-gray-200 w-[400px]' />
                                </div>

                                <div>
                                    <p>Confirm New Password</p>
                                    <input type="password" placeholder='' className='border border-gray-200 w-[400px]' />
                                </div>
                            </div>

                          

                            <div className='text-start mt-10 w-full'>
                                <button type="submit" className='bg-green-900 px-4 p-2  rounded-lg text-white w-[120px] transition duration-300  hover:bg-green-700 hover:text-white uppercase font-semibold tracking-wide'>Update</button>
                            </div>

                        </div>
                        <div id="vertical-tab-with-border-3" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-3">
                           
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default index