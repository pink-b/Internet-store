import React, { useContext, useState } from 'react';
import { Modal, Form, Button, Dropdown, Col, Row } from 'react-bootstrap';
import { Context } from '../..';

const CreateDevice = ({show, onHide}) => {
  const {device} = useContext(Context)
  const [info, setInfo] = useState([])
  console.log(device);
  
  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

    return (
        <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить устройство</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className="mt-2 mb-3">
              <Dropdown.Toggle>
                Выберите тип
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map(type =>
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2 mb-3">
              <Dropdown.Toggle>
                Выберите бренд
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map(brand =>
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        <Form.Control
                className="mt-3"
                placeholder="Введите названия устройства"/>
        <Form.Control
                className="mt-3"
                placeholder="Введите названия устройства"
                type="number"/>
        <Form.Control
                className="mt-3"
                type="file"/>
        <hr/>
        <Button
          variant="outline-dark"
          onClick={addInfo}>
            Добавить новое свойство
        </Button>
        {info.map(i =>
          <Row className="mt-2" key={i.number}>
            <Col md={4}>
            <Form.Control
              placeholder="Введите название"  
            />
            </Col>
            <Col md={4}>
            <Form.Control
              placeholder="Введите описание"
            />
            </Col>
            <Col md={4}>
              <Button
              onClick={() => removeInfo(i.number)}
                variant={"outline-danger"}
              >Удалить</Button>
            </Col>
          </Row>
        )}
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
        </Modal.Footer>
      </Modal>
      );
};

export default CreateDevice;