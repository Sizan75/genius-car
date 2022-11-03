import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const {_id, title,price } = service
    const { user } = useContext(AuthContext)
    
    const handlePlaceOrder = event =>{
        event.preventDefault()
        const form= event.target
        const name= `${form.firstName.value} ${form.lastName.value}`
        const email=user?.email || 'unregistered'
        const phone= form.phone.value
        const message=form.message.value
        const order={
            service:_id,
            serviceName: title,
            customerName: name,
            price,
            phone,
            message   
        }
    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">You are going to order:{title}</h2>
               <h4 className='text-3xl'>Price:${price}</h4>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-warning w-full " />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-warning w-full " />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-warning w-full " />
                    <input name='email' type="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered input-warning w-full " readOnly />
                </div>
                <textarea name='message' className="textarea textarea-warning w-full" placeholder="Write your message here."></textarea>
            </form>
        </div>
    );
};

export default CheckOut;