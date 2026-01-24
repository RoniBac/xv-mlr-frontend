import React from 'react';
import styled from 'styled-components';
import cactusImage from '/cactus.png';
import birdImage from '/bird.png';

const SCALE = 2; // tamaño de los cactus

const ObstacleContainer = styled.div`
  position: absolute;
  bottom: ${props => (props.type === 'bird' ? '120px' : '0')}; // pájaros más bajos
  top: ${props => (props.type === 'cactus' ? '265px' : '0')};
  left: ${props => props.position}px;
  width: ${props => (props.type === 'cactus' ? 50 * SCALE : 50)}px;
  height: ${props => (props.type === 'cactus' ? 80 * SCALE : 50)}px;
  background: ${props =>
    props.type === 'cactus' ? `url(${cactusImage})` : `url(${birdImage})`} no-repeat center/contain;
`;


const Obstacle = ({ type, position }) => {
  return <ObstacleContainer type={type} position={position} />;
};

export default Obstacle;



