import React, { useState, useEffect } from "react";
import axios from "axios";

const Task = () => {
  const [phoneOrigin, setphoneorigin] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:8800", {
        phonenumber: "8240362880",
      })
      .then((res) => {
        setphoneorigin(res.data.phoneorigen);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="bg-teal-400 h-24 inline-flex justify-center items-center font-bold text-3xl border-2 border-indigo-600">
        <h1>Phone Origin : {phoneOrigin}</h1>
      </div>
    </>
  );
};

export default Task;
