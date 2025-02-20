// 'use client';
// // import { useState } from "react";
// // import { signIn } from "next-auth/react";
// // import { useRouter } from "next/router";

// // export default function SignIn() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   // const router = useRouter();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const result = await signIn("credentials", {
// //       redirect: false,
// //       email,
// //       password,
// //     });

// //     if (result.error) {
// //       alert(result.error);
// //     } else {
// //       router.push("/LandingPge"); // Redirect after successful login
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen">
// //       <h2 className="text-2xl font-bold">Sign In</h2>
// //       <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
// //         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
// //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
// //         <button type="submit">Sign In</button>
// //       </form>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { FaGoogle, FaGithub } from "react-icons/fa";

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     agreed: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#090021] text-white relative overflow-hidden">
//       <img src="loginbg.jpg" alt="Background" className="absolute opacity-50 inset-0 w-full h-full object-cover" />
//       <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b  opacity-50"></div>
//       <div className="relative z-10 w-full max-w-md p-8 rounded-xl bg-black bg-opacity-30 shadow-lg border-green-300">
//         <div className="flex justify-center mb-6">
//           <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-xl">
//             <img className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-xl" src="logo.png" alt="Logo" width={50} height={50} />

//           </div>
//         </div>
//         <h2 className="text-center text-2xl font-bold">Welcome back to ParthMind✨!</h2>

//         <form>

//           <input type="email" name="email" placeholder="Email" className="input-box w-full h-10 mt-3  pl-3 bg-black bg-opacity-50  rounded-md" onChange={handleChange} />
//           <input type="password" name="password" placeholder="Password" className="input-box w-full h-10 mt-3 pl-3  bg-black bg-opacity-50 rounded-md" onChange={handleChange} />


//           <button type="submit" className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-blue-700 hover:opacity-80 text-white font-bold shadow-lg">
//             Log In
//           </button>
//         </form>

//         <p className="justify-center flex items-center mt-2">OR</p>
        
//         <div className="flex flex-col justify-center mt-4 space-x-4 text-md">
          
//       <button className="w-full flex items-center px-4 py-2 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none">
//         <FaGoogle className="mr-2 text-red-500" size={20} />
//         Login with Google
//       </button>

     
//       <button className="w-full flex items-center justify-center px-4 py-2 pr-10  mt-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
//         <FaGithub className="mr-2" size={20} />
//         Login with GitHub
//       </button>
//         </div>
//       </div>
//     </div>
//   );
// }


