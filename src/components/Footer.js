import React from "react";


function Footer() {

    const currentYear = new Date().getFullYear();

    return ( 
    <footer>
        <p>
        © {currentYear} AJF
        </p>
    </footer>

    )
}

export default Footer;