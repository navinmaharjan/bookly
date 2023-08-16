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
            <div className='bg-green-900 py-2'>
                <div className='container mx-auto flex justify-between items-center'>
                    <div>
                        <h1 className='tracking-wider text-white'>Bookly</h1>
                    </div>


                    <div>
                        <div className="flex-shrink-0 group block">
                            <div className="flex items-center">

                                <div className="hs-dropdown relative">
                                    <button id="hs-dropdown-default" type="button" className="hs-dropdown-toggle px-4 inline-flex justify-center items-center gap-5 align-middle">

                                        <img className="inline-block flex-shrink-0 h-[2.875rem] w-[2.875rem] rounded-full relative cursor-pointer" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />

                                    </button>
                                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-60 hidden z-10 mt-1 min-w-[15rem] bg-white shadow-md  p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-default">
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-base text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            My Bookings
                                        </a>

                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-base text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer" onClick={() => dispatch(handleLogOut())}>
                                            Sign Out
                                        </a>
                                    </div>
                                </div>


                                <div>
                                    <h3 className="font-semibold text-white dark:text-white">{userDetails.firstName} {userDetails.lastName}</h3>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='w-full flex items-center justify-center mt-32 '>
                <div class="flex flex-wrap  drop-shadow-lg bg-white">
                    <div class="border-r border-gray-200 dark:border-gray-700 flex flex-col items-center">
                        <div className='flex flex-col items-center py-10'>
                            <img className="inline-block flex-shrink-0 h-[8.875rem] w-[8.875rem] rounded-full relative cursor-pointer" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />

                            <div className='text-2xl'>
                                <h3 className="font-semibold text-gray-500 dark:text-white">{userDetails.firstName} {userDetails.lastName}</h3>
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