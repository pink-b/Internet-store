import React from 'react';
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {REGISTRATION_ROUTE} from '../utils/consts'

const Auth = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш пароль..."
                    />
                </Form>

                <Row className="d-flex justify-content-between mt-3">
                    <Col className="d-flex align-items-center">
                    
                    
                        <div>Нет аккаунта? </div>
                        <NavLink className="ms-2" to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                        <Button 
                            className="mt-2 ms-auto"
                            variant={"outline-success"}>
                            Войти
                        </Button>
                    </Col>
                   
                        
                   
                </Row>
            </Card>
        </Container>
    );
};

export default Auth;