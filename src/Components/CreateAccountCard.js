import React, {useContext, useEffect, useRef, useState} from 'react';
import {UserContext} from "../UserContext";
import {Button, Card, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import "../App.css"
import "./Components.css"

const CreateAccountCard = () => {
    const {user, setUser} = useContext(UserContext)
    const [newUser, setNewUser] = useState({})

    const Submit = (e) => {
        e.preventDefault()
        console.log("Submitting")
        console.log(JSON.stringify(newUser))
        setUser(newUser)
    }

    return (
        <div>
            <Card className="myCard myCreateCard" text="light" bg="dark">
                <Card.Header as={"h1"} className={"center"}>Welcome to TimeBook!</Card.Header>
                <Card.Body>
                    <Form onSubmit={(e) => Submit(e)}>
                        <Container>
                            <Row>
                                <h3 className="text-center">Personal Info</h3>
                                <Col>
                                    <Form.Group>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>Name</InputGroup.Text>
                                            <Form.Control
                                                placeholder="Enter your name here..."
                                                onChange={(e) =>
                                                    setNewUser({
                                                        ...newUser,
                                                        "name": e.target.value
                                                    })}
                                            />
                                        </InputGroup>
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>Age</InputGroup.Text>
                                            <FormControl
                                                placeholder="Enter your age here..."
                                                onChange={(e) => {
                                                    setNewUser({
                                                        ...newUser,
                                                        "age": e.target.value
                                                    })
                                                }}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Form.Group>
                                    <InputGroup>
                                       <InputGroup.Text>Bio</InputGroup.Text>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Tell us about yourself..."
                                            onChange={(e) =>
                                                setNewUser({
                                                    ...newUser,
                                                    "bio": e.target.value
                                                })}/>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row>
                                <h3 className="text-center">Address</h3>
                                <Form.Group>
                                    <InputGroup>
                                        <InputGroup.Text>Address</InputGroup.Text>
                                        <Form.Control placeholder="Street Address"
                                            onChange={(e) => {
                                                setNewUser({
                                                    ...newUser,
                                                    "address": {
                                                        ...newUser['address'],
                                                        "street": e.target.value
                                                    }
                                                })
                                            }}/>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <InputGroup>
                                            <InputGroup.Text>City</InputGroup.Text>
                                            <Form.Control placeholder="City"
                                                onChange={(e) =>
                                                    setNewUser({
                                                        ...newUser,
                                                        "address": {
                                                            ...newUser['address'],
                                                            "city": e.target.value
                                                        }
                                                    })
                                                }/>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <InputGroup>
                                            <InputGroup.Text>State</InputGroup.Text>
                                            <Form.Control placeholder="State"
                                                          onChange={(e) =>
                                                              setNewUser({
                                                                  ...newUser,
                                                                  "address": {
                                                                      ...newUser['address'],
                                                                      "state": e.target.value
                                                                  }
                                                              })
                                                          }/>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <InputGroup>
                                            <InputGroup.Text>Postal Code</InputGroup.Text>
                                            <Form.Control placeholder="Postal Code"
                                                          onChange={(e) =>
                                                              setNewUser({
                                                                  ...newUser,
                                                                  "address": {
                                                                      ...newUser['address'],
                                                                      "zip": e.target.value
                                                                  }
                                                              })
                                                          }/>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <InputGroup>
                                            <InputGroup.Text>Country</InputGroup.Text>
                                            <Form.Control placeholder="Country"
                                                          onChange={(e) =>
                                                              setNewUser({
                                                                  ...newUser,
                                                                  "address": {
                                                                      ...newUser['address'],
                                                                      "country": e.target.value
                                                                  }
                                                              })
                                                          }/>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        <br/>
                        <Button type="submit" className="text-center">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CreateAccountCard