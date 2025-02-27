import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllStarships } from "../../services/starship";
import "./StarshipList.css"; 
import shipImage from '../../assets/star-destroyer.png';
import logo from '../../assets/starwars-logo.png';

function StarshipList() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    fetchStarshipsData();
  }, []);

  const fetchStarshipsData = async (url = null) => {
    try {
      setLoading(true);
      const response = await fetchAllStarships(url);

      if (url) {
        setStarships([...starships, ...response.results]);
      } else {
        setStarships(response.results);
      }

      setNextPage(response.next);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (nextPage) {
      fetchStarshipsData(nextPage);
    }
  };

  const filteredStarships = starships.filter(
    (starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      starship.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="starship-container">
    
    <img className="logo" src={logo} alt="" />

      <div className="search-container">
        <input
          type="text"
          placeholder="İsim veya modele göre ara..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && starships.length === 0 ? (
        <div className="loading-message">Yükleniyor...</div>
      ) : error ? (
        <div className="error-message">
          Yıldız gemileri yüklenirken bir hata oluştu.
        </div>
      ) : (
        <>
          <div className="starship-grid">
            {filteredStarships.length > 0 ? (
              filteredStarships.map((starship) => (
                <div key={starship.name} className="starship-card">
                  <img
                    src={shipImage}
                    alt={starship.name}
                    className="starship-image"
                  />
                  <div className="starship-details">
                    <Link
                      to={`/starship/${encodeURIComponent(
                        starship.url.split("/").slice(-2)[0]
                      )}`}
                      className="starship-link"
                    >
                      <div className="starship-name">{starship.name}</div>
                      <div className="starship-model">Model: {starship.model}</div>
                      <div className="starship-speed">
                        Hız: {starship.max_atmosphering_speed}
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">Sonuç bulunamadı</div>
            )}
          </div>

          {nextPage && !loading && (
            <div className="load-more-container">
              <button onClick={handleLoadMore} className="load-more-button">
                Daha Fazla
              </button>
            </div>
          )}

          {loading && starships.length > 0 && (
            <div className="loading-message">Daha fazla yükleniyor...</div>
          )}
        </>
      )}
    </div>
  );
}

export default StarshipList;