import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import dinoImage from "/camila.png";

const FRAME_WIDTH = 20;  // ancho de cada frame en el sprite real
const FRAME_HEIGHT = 20; // alto de cada frame
const TOTAL_FRAMES = 6;
const SCALE = 3;         // escala para que el sprite se vea grande

const DinoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50px;
  width: ${FRAME_WIDTH * SCALE}px;  /* tamaño en pantalla */
  height: ${FRAME_HEIGHT * SCALE}px; /* tamaño en pantalla */
  background-image: url(${dinoImage});
  background-repeat: no-repeat;
  background-size: ${FRAME_WIDTH * TOTAL_FRAMES * SCALE}px ${FRAME_HEIGHT * SCALE}px;
  transition: transform 0.1s;
  image-rendering: pixelated;
`;

const Dino = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [frame, setFrame] = useState(0);
  const frameRef = useRef(0);

  // Salto
  const handleKeyPress = (e) => {
    if (e.key === " " || e.key === "ArrowUp") {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    }
  };

  // Animación
  useEffect(() => {
    const interval = setInterval(() => {
      frameRef.current = (frameRef.current + 1) % TOTAL_FRAMES;
      setFrame(frameRef.current);
    }, 100); // cambia cada 100ms
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <DinoContainer
      style={{
        transform: isJumping ? "translateY(-120px)" : "translateY(0)",
        backgroundPosition: `-${frame * FRAME_WIDTH * SCALE}px 0px` // mueve el frame exacto escalado
      }}
    />
  );
};

export default Dino;
