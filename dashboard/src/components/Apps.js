import React from "react";
import "./Apps.css";

const appsData = [
  {
    name: "Kite",
    description: "Trading platform for stocks, F&O, commodities",
    image: "https://play-lh.googleusercontent.com/wnNYBAH1m-XJMfduOHfEATQAhCwyKUYeHAD1Fi9-OjtxKyPKjFEmgWvbx-OX2dM65xjp",
  },
  {
    name: "Console",
    description: "Reports, statements, and account insights",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCR-R-lA_pp_C4itNCOXcmjC5Fb38DopbAQ&s",
  },
  {
    name: "Coin",
    description: "Direct mutual funds with zero commission",
    image: "https://play-lh.googleusercontent.com/oOKzelyeWHI7W7_qc2WIut-DUTSbq7qJEvvmGMRD6_62H_bYIyCgm1g2pzYpgYWWSrI",
  },
  {
    name: "Varsity",
    description: "Learn stock market trading from scratch",
    image: "https://play-lh.googleusercontent.com/JvUh8qQiRHPbyw6LUJwdkdX_SFstz2iDstGGJchpduXJlRsM9xyARRUQsb7GdMWmDBo",
  },
  {
    name: "Kite Connect",
    description: "Trading APIs for developers",
    image: "https://zerodha.com/z-connect/wp-content/uploads/2016/04/kite-connect-logo-2-1.png",
  },
];

const Apps = () => {
  return (
    <div className="apps-container">
      <h2 className="apps-title">Zerodha Apps</h2>

      <div className="apps-grid">
        {appsData.map((app, index) => (
          <div className="app-card" key={index}>
            <img src={app.image} alt={app.name} />
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            <button>Open</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
