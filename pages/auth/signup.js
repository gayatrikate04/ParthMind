// import { useState } from "react";
// import { useRouter } from "next/router";

// export default function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("/api/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, email, password }),
//     });

//     if (res.ok) {
//       router.push("/auth/signin");
//     } else {
//       alert("Error signing up");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h2 className="text-2xl font-bold">Sign Up</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }
