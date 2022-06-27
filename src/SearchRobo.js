import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchRobo() {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterList, setFilterList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://random-data-api.com/api/users/random_user?size=10`
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

  // Data.map(({ id, first_name ,email}) => (
  //   <li key={id}>
  //     <h3>{first_name}</h3>
  //     <h4>{email}</h4>
  //   </li>
  // ));

  const handleSearch = (event) => {
    setQuery(event.target.value);

    const filteredList = Data.filter((item) => {
      if (
        item.first_name.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        return item;
      }
    });

    console.log(filteredList);
    setFilterList(filteredList);
  };

  return (
    <div>
      <h1>Search Robots</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div>
        Search:{" "}
        <input name="query" type="text" value={query} onChange={handleSearch} />
      </div>
      <ul>
        {filterList.map(({ id, first_name, email }) => (
          <li key={id}>
            <h3>{first_name}</h3>
            <h4>{email}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchRobo;
