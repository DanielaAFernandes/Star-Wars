import { useState, useEffect } from 'react';

function Api() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      setApiData(data);
      console.log(`oiii ${data}`);
    };
    fetchApi();
  }, []);
  return (
    <div>
      { apiData }
    </div>
  );
}

export default Api;
