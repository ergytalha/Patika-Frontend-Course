export const fetchAllStarships = async (url = null) => {
    try {
      const apiUrl = url || 'https://swapi.dev/api/starships/';
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('API isteği başarısız oldu');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Starship verileri çekilirken hata:', error);
      throw error;
    }
  };
  
  export const fetchStarshipById = async (id) => {
    try {
      const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
      
      if (!response.ok) {
        throw new Error('API isteği başarısız oldu');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Starship detayları çekilirken hata:', error);
      throw error;
    }
  };

  export const fetchStarshipByName = async (name) => {
    try {
      const response = await fetch(`https://swapi.dev/api/starships/`);
      
      if (!response.ok) {
        throw new Error("API isteği başarısız oldu");
      }
  
      const data = await response.json();
      
      // İsme göre gemi bulma
      const starship = data.results.find((ship) => ship.name.toLowerCase() === name.toLowerCase());
  
      if (!starship) {
        throw new Error(`Starship "${name}" bulunamadı.`);
      }
  
      return fetchStarshipById(starship.url.split("/").slice(-2, -1)[0]); // URL içinden ID çıkar
    } catch (error) {
      console.error("Starship adıyla detay çekilirken hata:", error);
      throw error;
    }
  };
  