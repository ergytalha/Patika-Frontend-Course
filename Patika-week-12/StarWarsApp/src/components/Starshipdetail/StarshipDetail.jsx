import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchStarshipById } from '../../services/starship';
import './StarshipDetail.css'; 

function StarshipDetail() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStarshipData = async () => {
      try {
        setLoading(true);
        const data = await fetchStarshipById(id);
        setStarship(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchStarshipData();
  }, [id]);

  if (loading) {
    return <div className="loading-message">Yükleniyor...</div>;
  }

  if (error || !starship) {
    return <div className="error-message">Yıldız gemisi yüklenirken bir hata oluştu.</div>;
  }

  return (
    <div className="starship-detail-container">
      <Link to="/" className="back-button">
        ← Ana Sayfaya Dön
      </Link>

      <div className="starship-detail-card">
        <h1 className="starship-name">{starship.name}</h1>
        
        <div className="starship-details-grid">
          <div className="detail-item">
            <span className="detail-label">Model:</span> {starship.model}
          </div>
          <div className="detail-item">
            <span className="detail-label">Üretici:</span> {starship.manufacturer}
          </div>
          <div className="detail-item">
            <span className="detail-label">Yolcu Sayısı:</span> {starship.passengers}
          </div>
          <div className="detail-item">
            <span className="detail-label">Mürettebat:</span> {starship.crew}
          </div>
          <div className="detail-item">
            <span className="detail-label">Atmosferdeki Maksimum Hız:</span> {starship.max_atmosphering_speed}
          </div>
          <div className="detail-item">
            <span className="detail-label">Kargo Kapasitesi:</span> {starship.cargo_capacity}
          </div>
          <div className="detail-item">
            <span className="detail-label">Uzunluk:</span> {starship.length}
          </div>
          <div className="detail-item">
            <span className="detail-label">Sınıf:</span> {starship.starship_class}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarshipDetail;