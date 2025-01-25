import React from "react";
import { Link } from "react-router-dom";

export const Index = () => {
    return (
        <div className="text-center " style={{marginTop: '5rem'}}>
            <h4>Go To Billing Form Page</h4>
            <div className="mt-5">
                <Link to={'/form'} className="button">CLICK HERE</Link>
            </div>  
        </div>
    )
}