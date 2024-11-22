'use client'
import React, { useState } from 'react';
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTrigger,
} from "@/components/ui/dialog";
import { MdEmail } from 'react-icons/md';

const Dialog = ({ size }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        phoneNumber: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatusMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatusMessage('Message sent successfully!');
                setFormData({ name: '', email: '', service: '', phoneNumber: '', message: '' });
            } else {
                setStatusMessage('Error sending message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatusMessage('Error sending message. Please try again.');
        }
    };

    return (
        <DialogRoot size="lg" placement="center" motionPreset="slide-in-bottom" >
            <DialogTrigger asChild>
                <div>
                    <MdEmail color='white' size={size} />
                </div>
            </DialogTrigger>
            <DialogContent className="bg-black shadow-custom-glow-light">
                <h1 className="text-white text-center text-[42px] font-pp mt-12">Lets Talk</h1>
                <DialogHeader>
                    <DialogCloseTrigger className="bg-black text-white p-2 rounded-full hover:bg-gray-200 focus:outline-none">
                        X
                    </DialogCloseTrigger>
                </DialogHeader>
                <DialogBody>
                    <div className="bg-black rounded-lg shadow-lg p-8 w-full">
                        <form onSubmit={handleSubmit} className="lg:space-y-6 xs:space-x-2">
                            <div className="flex flex-col lg:space-y-4">
                                <div className="flex lg:flex-row xs:flex-col lg:justify-between">
                                    <div className="w-full lg:mr-2">
                                        <label htmlFor="name" className="block font-medium mx-2 my-2 text-white">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="bg-transparent border border-gray-400 xs:p-3 lg:p-4 w-[100%] rounded-full focus:outline-none focus:border-black transition duration-200 text-white"
                                            placeholder="Enter Name"
                                            required
                                        />
                                    </div>
                                    <div className="w-full lg:ml-2">
                                        <label htmlFor="email" className="block font-medium mx-2 my-2 text-white">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="bg-transparent border border-gray-400 xs:p-3 lg:p-4 w-[100%] rounded-full focus:outline-none focus:border-black transition duration-200 text-white"
                                            placeholder="Enter Email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex lg:flex-row xs:flex-col lg:justify-between">
                                    <div className="w-full lg:mr-2">
                                        <label htmlFor="service" className="block font-medium mx-2 my-2 text-white">Services</label>
                                        <select
                                            id="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="bg-transparent border border-gray-400 xs:p-3 lg:p-4 w-[100%] rounded-full focus:outline-none focus:border-black transition duration-200 text-gray-400"
                                            required
                                        >
                                            <option value="" disabled>Select Service</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="App Development">App Development</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                            <option value="Content Writing">Content Writing</option>
                                            <option value="SEO Optimization">SEO Optimization</option>
                                        </select>
                                    </div>
                                    <div className="w-full lg:ml-2">
                                        <label htmlFor="phoneNumber" className="block font-medium mx-2 my-2 text-white">Contact No</label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className="bg-transparent border border-gray-400 xs:p-3 lg:p-4 w-[100%] rounded-full focus:outline-none focus:border-black transition duration-200 text-white"
                                            placeholder="Enter Contact"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='xs:hidden lg:block'>
                                    <label htmlFor="message" className="block font-medium mx-2 my-2 text-white">Message</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        cols={16}
                                        rows={6}
                                        placeholder="Enter Message"
                                        className="bg-transparent border border-gray-400 xs:p-3 lg:p-4 rounded-lg w-full focus:outline-none focus:border-black transition duration-200 text-white"
                                        required
                                    />
                                </div>
                                <div className='xs:block lg:hidden'>
                                    <label htmlFor="message" className="block font-medium mx-2 my-2 text-white">Message</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        cols={12}
                                        rows={3}
                                        placeholder="Enter Message"
                                        className="bg-transparent border border-gray-400 xs:p-3 lg:p-4 rounded-lg w-full focus:outline-none focus:border-black transition duration-200 text-white"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white font-semibold py-3 mt-2 rounded-full duration-100 transition-all hover:bg-[#70000E]  text-lg hover:text-white hover:shadow-custom-glow-light"
                            >
                                Submit
                            </button>
                            {statusMessage && <p className="text-white mt-4">{statusMessage}</p>}
                        </form>
                    </div>
                </DialogBody>
            </DialogContent>
        </DialogRoot>
    );
}

export default Dialog;
