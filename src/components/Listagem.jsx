import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css'


const Listagem = () => {
  const [digimons, setDigimons] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24);
  const [totalPages, setTotalPages] = useState(0);


  const fetchDigimonData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('https://digimon-api.vercel.app/api/digimon');
      setTotalPages(Math.ceil(data.length / itemsPerPage));
      setDigimons(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

    useEffect(() => {
        fetchDigimonData()
    }, []);

    const renderDigimonData = () => {
      if (loading || !digimons?.length) {
          return (<h3>Carregando</h3>)
    } 

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleDigimons = digimons.slice(startIndex, endIndex);

    return (
      <div>
        <div className="card-container">
          {visibleDigimons.map((digimon) => (
            <Link to={`/detalhes/${digimon.name}`} key={digimon.name} className="card">
              <p>Nome: {digimon.name}</p>
              <p>Nível: {digimon.level}</p>
            </Link>
          ))}
        </div>
        {renderPagination()}
      </div>
    );
  };

  const renderPagination = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
    return (
      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`button ${currentPage === pageNumber ? 'active' : ''}`}
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="title">
        <h2>Digimon's Database</h2>
        <h4>Djerowd Alexsander Ruiz Moreschi Faria   22.7844-8</h4>
      </div>
      {renderDigimonData()}
    </div>
  );
};

export default Listagem;
