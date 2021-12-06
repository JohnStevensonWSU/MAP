import React, {useContext, useEffect, useRef, useState} from "react";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {UserContext} from "../UserContext";
import "../App.css"
import "./Components.css"
import UserCard from "./UserCard";
import CreateAccountCard from "./CreateAccountCard";

const Profile = () => {
    const { user, setUser } = useContext(UserContext)
    const [name, setName] = useState("")
    const [hometown, setHometown] = useState("")
    const [accountCreated, setAccountCreated] = useState(false)

    useEffect(() => {
        if (user != null && 'name' in user) {
            setAccountCreated(true)
        }
    },[user])

    const changeName = ( e ) => {
        e.preventDefault()
        if (name === "") {
            alert("Please enter a name")
            return
        }

        if (user != null && user['name'] != null && name != null) {
            setUser({
                ...user,
                name: name
            })
        }
    }

    return (
        <div className="myDiv">
            <>{ accountCreated ? <UserCard/> :
                <CreateAccountCard/>
            }</>
        </div>
    )
}

export default Profile


{/*<Form onSubmit={ (e) => changeName(e) }>*/}
{/*    <Form.Group className="mb-3" controlId="formName">*/}
{/*        <Form.Label>Name</Form.Label>*/}
{/*        <Form.Control type="string"  placeholder="Enter name"*/}
{/*                      onChange={*/}
{/*                          (event) =>*/}
{/*                              setName(event.target.value)}/>*/}
{/*    </Form.Group>*/}
{/*    <Form.Group>*/}
{/*        <Form.Label>Hometown</Form.Label>*/}
{/*        <Form.Control type="string" placeholder="Enter your hometown"*/}
{/*                      onChange={*/}
{/*                          (event) =>*/}
{/*                              setHometown(event.target.value)}/>*/}
{/*    </Form.Group>*/}
{/*    <Button type="submit" variant="primary">Submit</Button>*/}
{/*</Form>*/}