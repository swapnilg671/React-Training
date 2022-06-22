import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchRobo2() {
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
  // ));‌
  const [searchParam] = useState(["first_name", "email"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  //function search(){};
  function search(filterList) {
    return Data.filter((item) => {
      if (item.first_name === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      } else if (filterParam === "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      }
    });
  }
  console.log(searchParam);

  // if (error) {
  //   return (
  //     {error.message}
  //   );
  // } else if (!isLoaded) {
  //   return <>loading...</>;
  // } else {

  return (
    <div>
      <h1>Search Robo2 </h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div>
        Search:{" "}
        <input
          name="query"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="selectName">
        <div>filter User by</div>
        <select
          name="fname"
          onChange={(event) => {
            setFilterParam(event.target.value);
          }}
        >
          <option value="first_name">Name</option>
          <option value="email">Email</option>
          <option value="All">Both</option>
        </select>
      </div>
      <ul>
        {search(filterList).map((item) => (
          <div>
            <li>{item.first_name}</li>
            <li>{item.email}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SearchRobo2;
