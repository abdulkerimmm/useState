import React, { useEffect, useState } from "react";

export const App = () => {
  const [name, setName] = useState("abdulkerim");
  let withoutStateName = "abdulkerim";
  console.log("1");
  useEffect(() => {
    console.log("useEffect");
  }, []);
  console.log("2");
  console.log("in am in the my first branch");
  return (
    <div>
      {console.log("3")}

      <button
        onClick={() => {
          {
            console.log("4");
          }
          setName("Salah");
          withoutStateName = "else";
          {
            console.log("5");
          }
        }}
      >
        Change names
      </button>

      <p>useState Value: {name}</p>
      <p>without useState Value: {withoutStateName}</p>
      {console.log("6")}
    </div>
  );
};

export default App;
