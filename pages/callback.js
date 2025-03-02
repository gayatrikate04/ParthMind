// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// const Callback = () => {
//   const router = useRouter();
//   const { code } = router.query; // Get the authorization code from the URL

//   useEffect(() => {
//     if (code) {
//       fetch('/api/spotify-auth', {
//         method: 'POST',
//         body: JSON.stringify({ code }),  // Send the code to the backend API
//         headers: { 'Content-Type': 'application/json' },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           // Store the access token in localStorage or state
//           localStorage.setItem('spotifyAccessToken', data.access_token);
//           router.push('/');  // Redirect to the home page or where needed
//         })
//         .catch((err) => console.error('Error during authentication:', err));
//     }
//   }, [code, router]);

//   return <div>Redirecting...</div>;
// };

// export default Callback;
