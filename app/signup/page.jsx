'use client';
import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Signup() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        agreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#090021] text-white relative overflow-hidden">
            <img src="loginbg.jpg" alt="Background" className="absolute opacity-50 inset-0 w-full h-full object-cover" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b  opacity-50"></div>
            <div className="relative z-10 w-full max-w-md p-8 rounded-xl bg-black bg-opacity-30 shadow-lg border-green-300">
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-xl">
                        <img className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-xl" src="logo.png" alt="Logo" width={50} height={50} />

                    </div>
                </div>
                <h2 className="text-center text-2xl font-bold">Welcome to ParthMind</h2>

                <form>

                    <input type="email" name="email" placeholder="Email" className="input-box w-full h-10 mt-3  pl-3 bg-black bg-opacity-50  rounded-md" onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" className="input-box w-full h-10 mt-3 pl-3  bg-black bg-opacity-50 rounded-md" onChange={handleChange} />


                    <button type="submit" className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-blue-700 hover:opacity-80 text-white font-bold shadow-lg">
                        Sign Up
                    </button>
                </form>

                <p className="justify-center flex items-center mt-2">OR</p>

                <div className="flex flex-col justify-center mt-4 space-x-4 text-md">

                    <button className="w-full flex items-center px-4 py-2 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none">
                        <FaGoogle className="mr-2 text-red-500" size={20} />
                        SignUp with Google
                    </button>


                    <button className="w-full flex items-center justify-center px-4 py-2 pr-10  mt-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
                        <FaGithub className="mr-2" size={20} />
                        SignUp with GitHub
                    </button>
                </div>
                <div className="flex flex-row items-center mt-5 justify-center">
                    <p>If already registered, then</p>
                    <Link href="/signin" className="text-blue-400 ml-2 hover:underline">
                        LogIn
                    </Link>
                </div>
            </div>
        </div>
    );
}