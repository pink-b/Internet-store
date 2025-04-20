import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem';
import { Context } from '..';

const DeviceList = () => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
};

export default DeviceList;