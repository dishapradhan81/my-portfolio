import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import  "../Styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return ( 
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={ () => {
                setExpandNavbar((prev) => !prev);
            }}> 
                <ReorderIcon /> 
                </button>

        </div>
        <div className="Links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/education"> Education </Link>

        </div>
    </div>
    );

}

export default Navbar;