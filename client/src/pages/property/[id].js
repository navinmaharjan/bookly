import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";

const Index = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [propertyDetails, setPropertyDetails] = useState({});
  const router = useRouter();

  const fetchPropertyDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/propertyById/${router.query.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch property details');
      }
      const result = await response.json();
      setPropertyDetails(result.data);
    } catch (error) {
      console.error('Error fetching property details:', error);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      fetchPropertyDetails();
    }
  }, [router.query.id]);

  return (
    <div>
      <Header />
      <div className='container py-16'>
        <div className='flex items-start gap-10'>
          <div className='relative w-1/2 h-[60vh]'>
            {propertyDetails.propertyImage && (
              <Image
                src={`http://localhost:8080/property-image/${router.query.id}`}
                width={750}
                height={100}
                alt="Property Image"
                className='absolute w-full h-full object-cover'
              />
            )}
            <div className='absolute bottom-2 right-2 z-20 cursor-pointer'>

              <p className='bg-gray-100 py-2 px-4 rounded-full'>See More Photos</p>
            </div>
          </div>
          <div className='w-1/2 flex flex-col gap-6 items-center'>
            <div>
              <h1 className='text-4xl text-gray-900 border-b pb-2 border-red'> Welcome to <span>{propertyDetails.propertyName}</span></h1>
              <p className='text-gray-600 pt-4'>Nestled in the heart of pristine natural beauty, our mountain view hotel offers a captivating escape for nature enthusiasts and relaxation seekers alike. With panoramic vistas of towering peaks and lush alpine landscapes, guests can savor the breathtaking views from the comfort of their cozy rooms. Whether you're an avid hiker, a serene stargazer, or simply in search of tranquility, our mountain view hotel provides the perfect retreat. Immerse yourself in the serene ambiance, breathe in the crisp mountain air, and let the majesty of the surrounding mountains elevate your stay to an unforgettable experience.</p>
            </div>
            <div className='w-full h-[368px] border p-8'>
              <div className='flex gap-10'>
                  <div className='border border-gray-400 bg-gray-100 hover:shadow-lg cursor-pointer shadow-gray-400 rounded-full font-semibold w-full text-center py-2 px-4'>
                    Check In
                    <p className='text-sm text-gray-800 font-thin'>Oct-6-2023</p>
                  </div>
                  <div className='border border-gray-400 bg-gray-100 hover:shadow-lg cursor-pointer shadow-gray-400 rounded-full font-semibold w-full text-center py-2 px-4'>
                    Check Out
                    <p className='text-sm text-gray-800 font-thin'>Oct-7-2023</p>
                  </div>
                  <div className='border border-gray-400 bg-gray-100 hover:shadow-lg cursor-pointer shadow-gray-400 rounded-full font-semibold w-full text-center py-2 px-4'>
                    Room
                    <p className='text-sm text-gray-800 font-thin'>1</p>
                  </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Index;
