import React from "react";
import { useNavigate } from "react-router-dom";
import deosai from "./assets/deosai.jpg"; 
import mult1 from "./assets/mult1.jpg";
import pic3 from "./assets/pic3.avif";
import swat1 from "./assets/swat1.avif";
import swat from "./assets/swat.avif";
import pesh2 from "./assets/pesh2.jpeg";

function HunzaPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/booking");
  };

  const hunzaPackages = [
    {
      image: deosai,
      title: "Hunza Valley Deluxe Package (5 Days)",
      price: "PKR 55,000",
      desc: "Enjoy a 5-day trip including Karimabad, Altit & Baltit Fort, and Attabad Lake.",
    },
    {
      image: mult1,
      title: "Hunza & Khunjerab Pass Adventure (7 Days)",
      price: "PKR 75,000",
      desc: "Full Hunza valley adventure with a trip to Khunjerab Pass, Passu Cones, and Borith Lake.",
    },
    {
      image: pic3,
      title: "Luxury Family Hunza Tour (4 Days)",
      price: "PKR 48,000",
      desc: "A relaxing 4-day trip with premium hotels, family sightseeing, and local cuisine.",
    },
    {
      image: swat,
      title: "Luxury Family Hunza Tour (4 Days)",
      price: "PKR 48,000",
      desc: "A relaxing 4-day trip with premium hotels, family sightseeing, and local cuisine.",
    },
    {
      image: swat1,
      title: "Luxury Family Hunza Tour (4 Days)",
      price: "PKR 48,000",
      desc: "A relaxing 4-day trip with premium hotels, family sightseeing, and local cuisine.",
    },
    {
      image: pesh2,
      title: "Luxury Family Hunza Tour (4 Days)",
      price: "PKR 48,000",
      desc: "A relaxing 4-day trip with premium hotels, family sightseeing, and local cuisine.",
    },
  ];

  // CSS-in-JS style objects
  const styles = {
    card: {
      width: "100%",
      height: "420px",
    },
    image: {
      height: "220px",
      objectFit: "cover",
    },
    heading: {
      fontWeight: "600",
    },
  };

  return (
    <div className="container mt-5">
        <h2 className="h4 mb-10" style={styles.heading}>
          Hunza Valley Tour Packages
        </h2>

      <p className="mb-4">
        Hunza is one of the most popular travel destinations in Pakistan, drawing visitors from around the world with its stunning scenery and rich cultural heritage. Planning a trip is now easier than ever with our Hunza Valley Tour Packages, which you can book simply by calling us. Now is the perfect time to take advantage of this, as our packages include a complimentary breakfast, upgraded vehicles, local guides, and a comfortable stay. We offer over 10+ tours to Hunza, each with options for duration, destinations, and amenities, ensuring that you’ll find something perfect for you. Our trips are among the best-selling tour packages in Pakistan, offering a range of choices from standard to luxury services over several days.

        You can enjoy the breathtaking Attabad Lake, explore the history of Altit and Baltit Forts, or see the majestic Rakaposhi, all included in our travel plans. Each trip guarantees a memorable experience, as we focus on providing comfortable stays in top hotels and resorts. For those interested in prices, our standard tour for local tourists starts at 10,000 PKR, while for international travelers, it starts at just 500 USD. All these personalized tours are made to fit your specific needs, ensuring you get the experience you want from a professional tour operator in Pakistan. You can either choose from the list below or create your own Hunza Valley tour based on your preferences.
      </p>

      <div className="row">
        {hunzaPackages.map((pkg, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm" style={styles.card}>
              <img
                src={pkg.image}
                className="card-img-top"
                alt={pkg.title}
                style={styles.image}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{pkg.title}</h5>
                  <p className="card-text">{pkg.desc}</p>
                </div>
                <div>
                  <h6 className="text-primary mb-3">{pkg.price}</h6>

                  
                  <button
                    className="btn btn-primary w-100"
                    onClick={handleClick}
                  >
                    Book Now
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HunzaPage;




























// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import deosai from "./assets/deosai.jpg"; 
// import mult1 from "./assets/mult1.jpg";
// import pic3 from "./assets/pic3.avif";
// import swat1 from "./assets/swat1.avif";
// import swat from "./assets/swat.avif";
// import pesh2 from "./assets/pesh2.jpeg";



// function HunzaPage() {
//   // const handleClick=()=>{}

//   const hunzaPackages = [
//     {
//       image: deosai,
//       title: "Hunza Valley Deluxe Package (5 Days)",
//       price: "PKR 55,000",
//       desc: "Enjoy a 5-day trip including Karimabad, Altit & Baltit Fort, and Attabad Lake.",
//     },
//     {
//       image: mult1,
//       title: "Hunza & Khunjerab Pass Adventure (7 Days)",
//       price: "PKR 75,000",
//       desc: "Full Hunza valley adventure with a trip to Khunjerab Pass, Passu Cones, and Borith Lake.",
//     },
//     {
//       image: pic3,
//       title: "Luxury Family Hunza Tour (4 Days)",
//       price: "PKR 48,000",
//       desc: "A relaxing 4-day trip with premium hotels, family sightseeing, and local cuisine.",
//     },
//     {
//       image: swat,
//       title: "Luxury Family Hunza Tour (4 Days)",
//       price: "PKR 48,000",
//       desc: "A relaxing 4-day trip with premium hotels, family sightseeing, and local cuisine.",
//     },
//     {
//       image: swat1,
//       title: "Luxury Family Hunza Tour (4 Days)",
//       price: "PKR 48,000",
//       desc: "A relaxing 4-day trip with premium hotels, family sightseeing, and local cuisine.",
//     },
//     {
//       image: pesh2,
//       title: "Luxury Family Hunza Tour (4 Days)",
//       price: "PKR 48,000",
//       desc: "A relaxing 4-day trip with premium hotels, family sightseeing, and local cuisine.",
//     },
//   ];

//   // ✅ CSS-in-JS style objects
//   const styles = {
//     card: {
//       width: "100%",
//       height: "420px",
//     },
//     image: {
//       height: "220px",
//       objectFit: "cover",
//     },
//     heading: {
//       fontWeight: "600",
//     },
//   };

//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="h4 mb-0" style={styles.heading}>
//           Hunza Valley Tour Packages
//         </h2>
//         {/* <Link to="/" className="btn btn-secondary">
//           Back to Tours
//         </Link> */}
//       </div>

//       <p className="mb-4">
//         Hunza is one of the most popular travel destinations in Pakistan, drawing visitors from around the world with its stunning scenery and rich cultural heritage. Planning a trip is now easier than ever with our Hunza Valley Tour Packages, which you can book simply by calling us. Now is the perfect time to take advantage of this, as our packages include a complimentary breakfast, upgraded vehicles, local guides, and a comfortable stay. We offer over 10+ tours to Hunza, each with options for duration, destinations, and amenities, ensuring that you’ll find something perfect for you. Our trips are among the best-selling tour packages in Pakistan, offering a range of choices from standard to luxury services over several days.

//         You can enjoy the breathtaking Attabad Lake, explore the history of Altit and Baltit Forts, or see the majestic Rakaposhi, all included in our travel plans. Each trip guarantees a memorable experience, as we focus on providing comfortable stays in top hotels and resorts. For those interested in prices, our standard tour for local tourists starts at 10,000 PKR, while for international travelers, it starts at just 500 USD. All these personalized tours are made to fit your specific needs, ensuring you get the experience you want from a professional tour operator in Pakistan. You can either choose from the list below or create your own Hunza Valley tour based on your preferences.
//       </p>

//       <div className="row">
//         {hunzaPackages.map((pkg, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <div className="card h-100 shadow-sm" style={styles.card}>
//               <img
//                 src={pkg.image}
//                 className="card-img-top"
//                 alt={pkg.title}
//                 style={styles.image}
//               />
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <div>
//                   <h5 className="card-title">{pkg.title}</h5>
//                   <p className="card-text">{pkg.desc}</p>
//                 </div>
//                 <div>
//                   <h6 className="text-primary mb-3">{pkg.price}</h6>
//                   <button className="btn btn-primary w-100">Book Now</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HunzaPage;









































// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import deosai from "./assets/deosai.jpg"; 
// import mult1 from "./assets/mult1.jpg";
// import pic3 from "./assets/pic3.avif";
// import { Link } from "react-router-dom";

// function HunzaPage() {
//   const hunzaPackages = [
//     {
//       image: deosai,
//       title: "Hunza Valley Deluxe Package (5 Days)",
//       price: "PKR 55,000",
//       desc: "Enjoy a 5-day trip including Karimabad, Altit & Baltit Fort, and Attabad Lake.",
//     },
//     {
//       image: mult1,
//       title: "Hunza & Khunjerab Pass Adventure (7 Days)",
//       price: "PKR 75,000",
//       desc: "Full Hunza valley adventure with a trip to Khunjerab Pass, Passu Cones, and Borith Lake.",
//     },
//     {
//       image: pic3,
//       title: "Luxury Family Hunza Tour (4 Days)",
//       price: "PKR 48,000",
//       desc: "A relaxing 4-day trip with premium hotels, family sightseeing, and local cuisine.",
//     },
//   ];

//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="h4 mb-0" >Hunza Valley Tour Packages</h2>
//         {/* <Link to="/" className="btn btn-secondary">
//           Back to Tours
//         </Link> */}
//       </div>

//       <p className="mb-4">
//         Hunza is one of the most popular travel destinations in Pakistan, drawing visitors from around the world with its stunning scenery and rich cultural heritage. Planning a trip is now easier than ever with our Hunza Valley Tour Packages, which you can book simply by calling us. Now is the perfect time to take advantage of this, as our packages include a complimentary breakfast, upgraded vehicles, local guides, and a comfortable stay. We offer over 10+ tours to Hunza, each with options for duration, destinations, and amenities, ensuring that you’ll find something perfect for you. Our trips are among the best-selling tour packages in Pakistan, offering a range of choices from standard to luxury services over several days.

// You can enjoy the breathtaking Attabad Lake, explore the history of Altit and Baltit Forts, or see the majestic Rakaposhi, all included in our travel plans. Each trip guarantees a memorable experience, as we focus on providing comfortable stays in top hotels and resorts. For those interested in prices, our standard tour for local tourists starts at 10,000 PKR, while for international travelers, it starts at just 500 USD. All these personalized tours are made to fit your specific needs, ensuring you get the experience you want from a professional tour operator in Pakistan. You can either choose from the list below or create your own Hunza Valley tour based on your preferences.
//       </p>

//       <div className="row">
//         {hunzaPackages.map((pkg, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <div className="card h-100 shadow-sm" style={{ width: "100%", height: "420px" }}>
//               <img
//                 src={pkg.image}
//                 className="card-img-top"
//                 alt={pkg.title}
//                 style={{ height: "220px", objectFit: "cover" }}
//               />
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <div>
//                   <h5 className="card-title">{pkg.title}</h5>
//                   <p className="card-text">{pkg.desc}</p>
//                 </div>
//                 <div>
//                   <h6 className="text-primary mb-3">{pkg.price}</h6>
//                   <button className="btn btn-primary w-100">Book Now</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HunzaPage;
