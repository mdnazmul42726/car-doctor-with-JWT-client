import { useContext, useEffect, useState } from 'react';
import img from '../../assets/images/checkout/checkout.png';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';

const MyBook = () => {
    const { user } = useContext(AuthContext);
    const [booked, setBooked] = useState([]);

    const url = `http://localhost:5000/book?email=${user?.email}`;

    useEffect(() => {
        axios.get(url, { withCredentials: true }).then(res => setBooked(res.data)).catch(err => console.log(err));
        // fetch(url).then(res => res.json()).then(data => setBooked(data));
    }, [url]);

    const handleBookedItemDelete = (_id) => {
        const prosed = confirm('Are You Sure');

        if (prosed) {
            fetch(`http://localhost:5000/book/${_id}`, { method: 'DELETE' }).then(res => res.json()).then(data => {
                if (data.deletedCount > 0) {
                    alert('item deleted');
                    const remaining = booked.filter(bbx => bbx._id !== _id);
                    setBooked(remaining);
                }
            });
        }
    };

    const handleConfirmItem = (_id) => {
        const prosid = confirm('Are You Sure?');

        if (prosid) {
            fetch(`http://localhost:5000/book/${_id}`, {

                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ status: 'confirm' })

            }).then(res => res.json()).then(data => {

                if (data.modifiedCount > 0) {
                    alert('item updated!!');
                    const remaining = booked.filter(bookR => bookR._id !== _id);
                    const updated = booked.find(bookU => bookU._id === _id)
                    updated.status = 'confirm';
                    const newBook = [updated, ...remaining];
                    setBooked(newBook);

                }
            });
        }
    }

    return (
        <div>
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="mt-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <p className='text-xl my-3 font-bold'>item: {booked.length}</p>
                            {booked.map(bk => <tr key={bk._id}>
                                <td><button className="btn btn-circle btn-outline" onClick={() => handleBookedItemDelete(bk._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button></td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={bk.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{bk?.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>${bk.price}</td>
                                <td>{bk.email}</td>
                                <th>
                                    {status === 'confirm' ? <span>hhh</span> : <button className="btn" onClick={() => handleConfirmItem(bk._id)}>Confirm</button>}
                                </th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBook;