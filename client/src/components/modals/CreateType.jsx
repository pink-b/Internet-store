import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const CreateType = ({show, onHide}) => {

    return (
       <Modal show={show}>
               <Modal.Header closeButton>
                 <Modal.Title>Modal heading</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Form.Control
                       placeholder={"Введите названия типов"}/>
               </Modal.Body>
               <Modal.Footer>
               <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
               <Button variant="outline-success" onClick={onHide}>Добавить</Button>
               </Modal.Footer>
             </Modal>
             );
};

export default CreateType;