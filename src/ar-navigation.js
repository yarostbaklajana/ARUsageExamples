import React from 'react';
import {Entity} from 'aframe-react';
import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene, Camera, Entity as AREntity} from 'react-aframe-ar';

class MarkerCamera extends AREntity {
    constructor (props) {
        super(props)
        this.primitiveName = 'a-marker-camera'
      }
}

const containerStyle = {
    position: 'fixed',
    top: 10 + 'px',
    width: 100 + '%',
    textAlign: 'center',
    zIndex: 1,
    height: 100 + '%'
}

export const ARNavigation = ({match}) => (
    <div style={containerStyle}>
        <Scene embedded arjs>
            <Box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow />
            <Sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow />
            <Cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow />
            <Plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow />
            <Sky color="#ECECEC" />
            <MarkerCamera preset="hiro"/>
            <Camera look-controls/>
        </Scene>
        </div>
);