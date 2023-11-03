import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
import banner5 from '../../assets/images/banner/5.jpg'
import banner6 from '../../assets/images/banner/6.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'
import { Link, useLoaderData } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider'

const Home = () => {
    const services = useLoaderData();
    const { user } = useContext(AuthContext);

    console.log(services);
    return (
        <div>
            {/* banner */}
            <div className="carousel w-full h-[450px] rounded-lg ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute flex items-center left-0 h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="w-1/2 ml-8 space-y-7">
                            <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="">
                                <button className='btn btn-active btn-primary mr-3'>Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex items-center left-0 h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="w-1/2 ml-8 space-y-7">
                            <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="">
                                <button className='btn btn-active btn-primary mr-3'>Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex items-center left-0 h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="w-1/2 ml-8 space-y-7">
                            <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="">
                                <button className='btn btn-active btn-primary mr-3'>Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    <div className="absolute flex items-center left-0 h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="w-1/2 ml-8 space-y-7">
                            <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="">
                                <button className='btn btn-active btn-primary mr-3'>Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={banner5} className="w-full" />
                    <div className="absolute flex items-center left-0 h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="w-1/2 ml-8 space-y-7">
                            <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="">
                                <button className='btn btn-active btn-primary mr-3'>Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={banner6} className="w-full" />
                    <div className="absolute flex items-center left-0 h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="w-1/2 ml-8 space-y-7">
                            <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="">
                                <button className='btn btn-active btn-primary mr-3'>Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* about */}
            <div className="">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="lg:w-1/2 relative">
                            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                            <img src={parts} alt="" className='w-1/2 absolute right-5 border-8 border-white top-1/2' />
                        </div>
                        <div className='lg:w-1/2'>
                            <p className='text-sm font-bold text-red-600'>About Us</p>
                            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <button className="btn btn-primary mt-5">Get More Info</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* services */}
            <div className="">
                <div className="text-center mb-5">
                    <p className='text-sm font-bold text-red-600'>Services</p>
                    <h1 className='text-3xl font-bold'>Our Service Area</h1>
                    <p className='mt-4'>the majority have suffered alteration in some form, by injected humour, or randomised <br />words which don't look even slightly believable. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(service => <div key={service._id} className="card transition-all hover:scale-105 bg-base-100 shadow-xl">
                        <figure><img src={service.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">{service.title}</h2>
                            <div className="flex items-center text-red-500 justify-end">
                                <p className=' font-semibold'>Price: {service.price}</p>
                                <Link to={`/checkout/${service._id}`}> <button><FaArrowRight /></button></Link>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Home;