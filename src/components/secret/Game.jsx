import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import Dino from "./Dino";
import Obstacle from "./Obstacle";

/* ===== CONFIG ===== */
const GAME_WIDTH = Math.min(window.innerWidth - 20, 800);
const GAME_HEIGHT = Math.min(window.innerHeight * 0.6, 400);

const GROUND_Y = 350;
const GRAVITY = 4;
const JUMP_FORCE = -20;
const OBSTACLE_SPEED = 30;

/* ===== STYLES ===== */
const GameContainer = styled.div`
  width: ${GAME_WIDTH}px;
  height: ${GAME_HEIGHT}px;
  background: #f7f7f7;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #ccc;
`;

const Score = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
  color: #333;
`;

const GameOver = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color: #333;
`;

/* ===== GAME ===== */
const Game = () => {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [obstacles, setObstacles] = useState([]);

  const [dinoY, setDinoY] = useState(GROUND_Y);
  const [velocityY, setVelocityY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  /* ===== JUMP CONTROL REFS ===== */
  const jumpStartRef = useRef(0);
  const jumpHoldRef = useRef(false);
  const cooldownUntilRef = useRef(0);
  const difficulty = Math.floor(score / 10);

  /* ===== SPAWN OBSTACLES ===== */
  const spawnObstacle = (type) => {
    setObstacles((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        type,
        position: GAME_WIDTH,
      },
    ]);
  };

  /* ===== SCORE ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isGameOver) setScore((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isGameOver]);

  /* ===== OBSTACLES ===== */
useEffect(() => {
  if (isGameOver) return;

  // delays base
  const cactusBase = 4500;
  const birdBase = 8000;

  // cada 50 puntos se reduce el delay
  const cactusDelay = Math.max(cactusBase - difficulty * 400, 1500);
  const birdDelay = Math.max(birdBase - difficulty * 600, 2500);

  const cactusTimer = setInterval(() => {
    if (!isGameOver) spawnObstacle("cactus");
  }, cactusDelay);

  const birdTimer = setInterval(() => {
    if (!isGameOver) spawnObstacle("bird");
  }, birdDelay);

  return () => {
    clearInterval(cactusTimer);
    clearInterval(birdTimer);
  };
}, [difficulty, isGameOver]);


  /* ===== JUMP START ===== */
  const handleJumpStart = useCallback(() => {
    const now = Date.now();

    if (
      isGameOver ||
      jumpHoldRef.current ||
      now < cooldownUntilRef.current ||
      dinoY < GROUND_Y
    )
      return;

    jumpHoldRef.current = true;
    jumpStartRef.current = now;

    setVelocityY(JUMP_FORCE);
    setIsJumping(true);
  }, [isGameOver, dinoY]);

  /* ===== JUMP END ===== */
  const handleJumpEnd = useCallback(() => {
    if (!jumpHoldRef.current) return;

    const heldTime = Date.now() - jumpStartRef.current;
    const effectiveHold = Math.min(heldTime, 100);

    cooldownUntilRef.current =
      Date.now() + Math.floor(effectiveHold / 4);

    jumpHoldRef.current = false;
  }, []);

  /* ===== INPUT ===== */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        handleJumpStart();
      }
    };

    const onKeyUp = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        handleJumpEnd();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    window.addEventListener("touchstart", handleJumpStart);
    window.addEventListener("touchend", handleJumpEnd);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("touchstart", handleJumpStart);
      window.removeEventListener("touchend", handleJumpEnd);
    };
  }, [handleJumpStart, handleJumpEnd]);

  /* ===== COLLISION ===== */
  const checkCollision = useCallback(() => {
    const dinoRect = { x: 50, y: dinoY, width: 50, height: 50 };

    obstacles.forEach((obs) => {
      const obstacleRect = {
        x: obs.position,
        y: obs.type === "bird" ? 230 : GROUND_Y,
        width: 50,
        height: 50,
      };

      if (
        dinoRect.x < obstacleRect.x + obstacleRect.width &&
        dinoRect.x + dinoRect.width > obstacleRect.x &&
        dinoRect.y < obstacleRect.y + obstacleRect.height &&
        dinoRect.y + dinoRect.height > obstacleRect.y
      ) {
        setIsGameOver(true);
      }
    });
  }, [obstacles, dinoY]);

  /* ===== GAME LOOP ===== */
  useEffect(() => {
    const loop = setInterval(() => {
      if (isGameOver) return;

      /* obstáculos */
      setObstacles((prev) =>
        prev
          .map((o) => ({ ...o, position: o.position - OBSTACLE_SPEED }))
          .filter((o) => o.position > -100)
      );

      /* salto sostenido máx 100ms */
      if (jumpHoldRef.current) {
        const held = Date.now() - jumpStartRef.current;
        if (held <= 100) {
          setVelocityY(JUMP_FORCE);
        } else {
          jumpHoldRef.current = false;
        }
      }

      /* gravedad */
      setVelocityY((v) => {
      const newV = v + GRAVITY;

      setDinoY((y) => {
        const nextY = y + newV;

        if (nextY >= GROUND_Y) {
          setIsJumping(false);
          return GROUND_Y;
        }

        return nextY;
      });

      return newV;
    });


      checkCollision();
    }, 50);

    return () => clearInterval(loop);
  }, [velocityY, checkCollision, isGameOver]);

  /* ===== RENDER ===== */
  return (
    <GameContainer>
      <Score>Score: {score}</Score>

      {isGameOver && (
        <GameOver>Game Over! Final Score: {score}</GameOver>
      )}

      <Dino y={dinoY} />

      {obstacles.map((obs) => (
        <Obstacle key={obs.id} type={obs.type} position={obs.position} />
      ))}
    </GameContainer>
  );
};

export default Game;
