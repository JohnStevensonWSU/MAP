import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../UserContext";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import "../App.css"

const UserCard = () => {
    const {user, setUser} = useContext(UserContext)

    return (
        <div>
            <Card className="myCard" text="light" bg="dark" style={{ width: "30rem" }}>
                <Card.Img variant="top" src="./profile.png" />
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Card.Title as={"h1"}>{user['name'] }</Card.Title>
                            </Col>
                            <Col>
                                <Card.Title>Age</Card.Title>
                                <Card.Text>{ user['age']}</Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Card.Title>Bio</Card.Title>
                            <Card.Text>{ user['bio']}</Card.Text>
                        </Row>
                        <Row>
                            <Card.Title>Address</Card.Title>
                            <Card.Text>{ user['address']['street'] }</Card.Text>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Text>{ user['address']['city']}</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text>{ user['address']['state']}</Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Text>{ user['address']['zip']}</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text>{ user['address']['country']}</Card.Text>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard