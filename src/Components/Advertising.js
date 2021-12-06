import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserContext";
import AdvertisingCard from "./AdvertisingCard";

const Advertising = () => {
    const {user, setUser}= useContext(UserContext)
    const [accountCreated, setAccountCreated] = useState(false)

    useEffect(() => {
        if (user != null) {
            setAccountCreated(true)
        }
    },[user])

    return (
        <div className="myDiv">
            <>{ accountCreated&&  <AdvertisingCard/> }</>
        </div>
    )
}

export default Advertising