import React from 'react';
import {Entity} from 'aframe-react';
import {Box, Scene, Camera, Entity as AREntity} from 'react-aframe-ar';

class MarkerCamera extends AREntity {
    constructor (props) {
        super(props)
        this.primitiveName = 'a-marker-camera'
      }
}

export const ARNavigation = ({match}) => (
    <div>
        <Scene artoolkit='sourceType: webcam;'>
            <Box position="-1 0.5 -10" rotation="0 45 0" color="#4CC3D9" shadow />
            <MarkerCamera preset="hiro"/>
            <Camera look-controls="true"/>
        </Scene>
    </div>
);