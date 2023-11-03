import { useLoaderData } from 'react-router-dom';
import checkout from '../../assets/images/checkout/checkout.png';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Checkout = () => {
    const services = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(services);

    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const FirstName = form.FirstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const msg = form.msg.value;
        const item = { FirstName, lastName, email, phoneNumber, service_id: services?.service_id, price: services?.price, msg, title: services?.title, img: services?.img};

        fetch('http://localhost:5000/book', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(item)

        }).then(res => res.json()).then(data => console.log(data));
    }

    return (
        <div className=''>
            <div className="">
                <img className='' src={checkout} alt="" />
                {/* <h1 className=' '>Check Out</h1> */}
            </div>
            <h1 className='text-center text-xl my-6'>Checkout for <span className='font-bold'>{services.title}</span></h1>
            <div className=" w-3/5 mb-20 mt-10 mx-auto p-10 bg-[#eee] rounded-sm">
                <form className='grid grid-cols-1 md:grid-cols-2 gap-2' onSubmit={handleBookService}>
                    <div className="mb-2">
                        <input className='bg-white rounded-md w-full p-3' type="text" name="FirstName" id="" placeholder='First Name' />
                    </div>
                    <div className="mb-2">
                        <input className='bg-white rounded-md w-full p-3' type="text" name="lastName" id="" placeholder='Last Name' />
                    </div>
                    <div className="mb-2">
                        <input className='bg-white rounded-md w-full p-3' type="number" name="phoneNumber" id="" placeholder='Phone Number' />
                    </div>
                    <div className="mb-2">
                        <input className='bg-white rounded-md w-full p-3' type="email" name="email" id="" defaultValue={user?.email} />
                    </div>
                    <div className="col-span-2">
                        <textarea className='w-full rounded-md p-3' name="msg" id="" cols="10" rows="10" placeholder='Text'></textarea>
                    </div>
                    <input className='bg-[#ff0000] text-white col-span-2 btn' type="submit" value="Confirm Order" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;