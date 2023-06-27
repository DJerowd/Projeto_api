import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import './styles.css'

const Detalhes = () => {
  const { nomeDigimon } = useParams();
  const [digimon, setDigimon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://digimon-api.vercel.app/api/digimon/name/${nomeDigimon}`)
      .then((response) => {
        setDigimon(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [nomeDigimon]);


  const handleVoltar = () => {
    navigate(-1);
  };


  return (
    <div className="detalhes-container">
      <h1>Detalhes do Digimon</h1>
      {digimon && (
        <div className="card">
          <h2>Nome: {digimon.name}</h2>
          <p>Nível: {digimon.level}</p>
          <div className="container">
            <img src={digimon.img} alt={digimon.name} />
          </div>
          <button onClick={handleVoltar}>Voltar</button>
        </div>
      )}
    </div>
  );
};

export default Detalhes;

