import React from 'react';
import Particles from 'react-tsparticles';
import particleJson from './particle-config';

const Particle = ({ comp }) => {
    return (
        <>
            <Particles params={particleJson}>
            </Particles>
            {comp}
        </>
    );
};

export default Particle;
