import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '@/components/Header';

const Index = () => {
  const [propertyDetails, setPropertyDetails] = useState({});
  const router = useRouter();

  const fetchPropertyDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/property/${router.query.id}`);
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
          <div className='w-1/2 flex flex-col gap-5 items-center'>
            <h1 className='text-4xl text-gray-900 border-b pb-2 border-red'> Welcome to <span>{propertyDetails.propertyName}</span></h1>
            <p className='text-gray-600'>Nestled in the heart of pristine natural beauty, our mountain view hotel offers a captivating escape for nature enthusiasts and relaxation seekers alike. With panoramic vistas of towering peaks and lush alpine landscapes, guests can savor the breathtaking views from the comfort of their cozy rooms. Whether you're an avid hiker, a serene stargazer, or simply in search of tranquility, our mountain view hotel provides the perfect retreat. Immerse yourself in the serene ambiance, breathe in the crisp mountain air, and let the majesty of the surrounding mountains elevate your stay to an unforgettable experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
