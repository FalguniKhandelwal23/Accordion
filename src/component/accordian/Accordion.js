import React, { useState } from "react";
import { questions } from "./api";
import "./Accordion.css";
import MyAccordion from './MyAccordion';
const Accodion=()=>{
    const[data,setdata]=useState(questions);
    return(
        <>
            <section className="main-div">
            <h1> React Interview Questions</h1>
            {
                data.map((curElem)=>{
                    const{id}=curElem;
                    return <MyAccordion key={id}{...curElem}/>

                })
            }
            </section>
        </>
    )
}
export default Accodion 