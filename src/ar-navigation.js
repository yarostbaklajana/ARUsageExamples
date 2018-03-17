import React from 'react';
import {Entity} from 'aframe-react';
import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene, Camera, Entity as AREntity} from 'react-aframe-ar';
import './components';
import { cameraChangeHandler } from './components';

console.log('Aframe', AFRAME);

class MarkerCamera extends AREntity {
    constructor (props) {
        super(props)
        this.primitiveName = 'a-marker-camera'
      }
}

const containerStyle = {
    position: 'fixed',
    top: 0 + 'px',
    width: 100 + '%',
    textAlign: 'center',
    zIndex: 1,
    height: 100 + '%'
}

const EmployeeMarker = ({props}) => {
    return (
        <Text></Text>
    );
};

export const ARNavigation = ({match}) => (
    <div style={containerStyle}>
        <Scene embedded arjs>
            <Box 
                position="-1 0.5 -3" 
                rotation="0 45 0" 
                color="#4CC3D9" 
                opacity="0.5" 
                shadow 
                gps-place="longitude: 37.469820; latitude: 55.153653"
            />
            <Camera 
                componentchange={ (ev) => { console.log('CHanged '); cameraChangeHandler(ev); }} 
                look-controls 
                user-height="1.6" 
                gps-position 
                compass-rotation
            />
        </Scene>
    </div>
);