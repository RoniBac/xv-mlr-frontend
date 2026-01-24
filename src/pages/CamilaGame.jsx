import { useNavigate } from "react-router-dom";
import Game from '../components/secret/Game.jsx'; // Ajusta según tu estructura

function CamilaGame() {
  const navigate = useNavigate();

  return (
    <div className="game-overlay">
      <div className="game-box">
        <h2>🐱 Camila Run</h2>

        {/* Aquí se monta tu juego tipo Dino Game */}
        <Game />
      </div>
    </div>
  );
}

export default CamilaGame;
