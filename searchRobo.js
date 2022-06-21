import React from 'react';
import axios from 'axios';

function searchRobo(){
useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      );
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  getData();
}, []);
return(
  <div>
<h3>title<h3/>
  </div>
)
}
export default searchRobo;