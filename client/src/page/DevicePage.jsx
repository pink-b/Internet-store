import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Image, Card, Button } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'}

    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб'},
        {id: 2, title: 'Камера', description: '12 мп'},
        {id: 3, title: 'Процессор', description: 'Пентиум 3'},
        {id: 4, title: 'Кол-во ядер', description: '2'},
        {id: 5, title: 'Фккумулятор', description: '5 гб'},
    ]

    return (
        <Container style={{padding: 20}}>
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img}>
                </Image>
            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center justify-content-center">
                <Col>
                    <h2>{device.name}</h2>
                    <div
                    className="d-flex align-items-center justify-content-center"
                    style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}>
                        5
                    </div>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                >
                    <h3>{device.price}</h3>
                    <Button variant={"outline-dark"}>Добавить в корзину</Button>
                </Card>
            </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>Характеристики</h2>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
       
    );
};

export default DevicePage;