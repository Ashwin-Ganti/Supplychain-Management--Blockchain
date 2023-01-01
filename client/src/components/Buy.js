import { ethers } from "ethers";
import React, { useState } from 'react';
import "./Buy.css"
import aw from "./airworks.png";
const Buy = ({ state }) => {
  const [formData, setFormData] =useState(
    {
        question1:"",
        question2:""
    });

    function handleChange(event) {
      const {name, value} = event.target;
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              [name]:value
          }
      })
  }

  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
  

    // const amount = { value: ethers.utils.parseEther("0.001") };
    // console.log(amount);
    const transaction = await contract.processOrder(formData.question1,formData.question2);
    await transaction.wait();
    console.log("Transaction is done");
  };
  return (
    <>
      <div className="outerbox">
        <div className="flex">
        <img src={aw} alt="airworks"/>
        <h1>Process Form</h1>
        </div>
        
        <p>Please Answer the below questions : </p>
        <form onSubmit={buyChai}>
          
              <legend>The Package received in sealed Condition?</legend>
              
              <input 
                  type="radio"
                  id="unemployed"
                  name="question1"
                  value="true"
                  checked={formData.question1 === "true"}
                  onChange={handleChange}
              />
              <label htmlFor="unemployed">true</label>
              <br />
              
              <input 
                  type="radio"
                  id="part-time"
                  name="question1"
                  value="false"
                  checked={formData.question1 === "false"}
                  onChange={handleChange}
              />
              <label htmlFor="part-time">false</label>
              <br />
              <legend>Document and Saftey Check of the Package Verified?</legend>
              
              <input 
                  type="radio"
                  id="true"
                  name="question2"
                  value="true"
                  checked={formData.question2 === "true"}
                  onChange={handleChange}
              />
              <label htmlFor="true">true</label>
              <br />
              
              <input 
                  type="radio"
                  id="false"
                  name="question2"
                  value="false"
                  checked={formData.question2 === "false"}
                  onChange={handleChange}
              />
              <label htmlFor="false">false</label>
              <br />              
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;

