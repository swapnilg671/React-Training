import React, { useState, useEffect } from "react";
import "./RandomRobo.css";

function RandomRobo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(`https://random-data-api.com/api/users/random_user?size=10`)
  //     .then((response) =>{
  //     if(!response.ok){
  //       throw new Error(
  //         `This is an HTTP error: The status is ${response.status}`
  //       )
  //     }
  //     return response.json();
  //   })

  //     .then((actualData) => console.log(actualData))
  //     .catch((err)=> {console.log(err.message);})

  // }, []);

  useEffect(() => {
    fetch(`https://random-data-api.com/api/users/random_user?size=10`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })

      .catch((err) => {
        setData(null);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>RandomRobo</h1>
      {loading && <div>A moment please</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, avatar, first_name, last_name, email }) => (
            <li key={id}>
              <div className="robofCard">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img alt={first_name} src={avatar} />
                    <h3 className="Rname">
                      {first_name}
                      {last_name}
                    </h3>
                  </div>
                  <div class="flip-card-back">
                    <h1>more information</h1>
                    <div>{email}</div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      {console.log("api")}
    </div>
  );
}

export default RandomRobo;
