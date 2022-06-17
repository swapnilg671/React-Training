import React from "react";

function IList(props) {
  // const animals = [
  //   { name: "cow", size: 34,image:'https://cdn-icons-png.flaticon.com/512/1998/1998610.png' },
  //   { name: "sheep", size: 16 }
  // ];
  const animals = [
    {
      name: props.name,
      size: props.size
    }
  ];

  const clist = animals.map((data) => (
    <div>
      <ol>
        <li>{data.name}</li>
        <li>{data.size}</li>
      </ol>
    </div>
  ));

  return (
    <div>
      <h2>{props.title}</h2>
      {clist}
    </div>
  );
}
export default IList;
