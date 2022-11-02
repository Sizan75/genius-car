import React, { useEffect, useState } from 'react';
<p className='text-2xl font-bold text-orange-600'>Services</p>
const Services = () => {
    const [services, setServices]= useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
            <p className='text-2xl font-bold text-orange-600'>Services</p>
            <h2 className='text-5xl font-semibold'>Our Services Area</h2>
            <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
        </div>
        <div>
            
        </div>
        </div>

    );
};

export default Services;