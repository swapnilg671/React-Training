import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchRobo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterList, setFilterList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );
        setData(response.data);
        setFilterList(response.data);
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

  data.map(({ id, title }) => (
    <li key={id}>
      <h3>{title}</h3>
    </li>
  ));

  const handleSearch = (event) => {
    setQuery(event.target.value);

    const filteredList = data.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return item;
      }
    });
    console.log(filteredList);
    setFilterList(filteredList);
  };

  return (
    <div>
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div>
        Search:{" "}
        <input name="query" type="text" value={query} onChange={handleSearch} />
      </div>
      <ul>
        {filterList.map(({ id, title }) => (
          <li key={id}>
            <h3>{title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchRobo;
