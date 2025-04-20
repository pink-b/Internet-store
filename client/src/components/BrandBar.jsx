import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import {Row, Card, Col} from 'react-bootstrap';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row >
            <Col className="d-flex">
            {device.brands.map(brand =>
                <Card
                key={brand.id}
                className="p-3"
                style={{cursor: "pointer"}}
                onClick={() => device.setSelectedBrand(brand)}
                border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                >
                    {brand.name}
                </Card>
            )}
            </Col>
        </Row>
    );
});

export default BrandBar;