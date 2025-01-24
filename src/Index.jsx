import React from "react";
import { Link } from "react-router-dom";

export const Index = () => {
    return (
        <>
        <h4>Go To Billing Form Page</h4>
        <Link to={'/form'}>Click Here</Link>
        </>
    )
}