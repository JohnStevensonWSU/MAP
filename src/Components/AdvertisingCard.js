import React, {useContext, useState} from 'react'
import {UserContext} from "../UserContext";
import {Button, Card} from "react-bootstrap";
import './Components.css'
import '../App.css'

const AdvertisingCard = () => {
    const {user, setUser} = useContext(UserContext)
    const [price, setPrice] = useState(0.12)

    return (
        <div className='text-center'>
            <Card className='myCard' style={{width: '30rem'}}>
                <Card.Img src="profile.png" />
                <Card.Body>
                    <Card.Title as="h3">{ user['name'] }:{ user['age'] }</Card.Title>
                    <>{price > 0.15 &&
                    <div>
                        <Card.Title as="h5">Description</Card.Title>
                        <Card.Text>{ user['bio'] }</Card.Text>
                    </div>
                    }</>
                    <>{price > 0.20 &&
                        <div>
                            <Card.Title as="h5">Address</Card.Title>
                            <>{price > 0.30 &&
                                <div>
                                    <Card.Text>{ user['address']['street'] }</Card.Text>
                                </div>
                            }</>
                            <>{price > 0.25 &&
                                <div>
                                    <Card.Text>{ user['address']['city'] }</Card.Text>
                                </div>
                            }</>
                            <>{price > 0.22 &&
                                <div>
                                    <Card.Text>{ user['address']['state'] }</Card.Text>
                                </div>
                            }</>
                            <>{price > 0.25 &&
                            <div>
                                <Card.Text>{ user['address']['zip'] }</Card.Text>
                            </div>
                            }</>
                            <Card.Text>{ user['address']['country']}</Card.Text>
                        </div>
                    }</>
                    <br/>
                    <Button className='btn btn-default' onClick={() => setPrice(price + 0.01)}>${ parseFloat(price).toFixed(2) }</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AdvertisingCard