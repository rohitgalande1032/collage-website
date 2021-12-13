import React from "react";
import { Link } from "react-router-dom";

const BackToTop = () => {
    return (
        <>
            <Link id="back-to-top" title="Go to Top" to="#">
                <i className="fas fa-chevron-up"></i>
            </Link>
        </>
    )

};

export default BackToTop;
