import React from 'react'
import "./NameBoard.css"

import dataJSON from "../assets/data/assignmentData.json";
import { NameCard } from './NameCard';

const employeeList = dataJSON[0].data;
//console.log(dataJSON);
//console.log(employeeList);

export const NameBoard = () => {

    return (
    //<NameCard imgUrl={"https://reqres.in/img/faces/8-image.jpg"} fName={"Tom"} lName={"Clark"} email={"michael.lawson@reqres.in"} />
    <div id="id-nameboard">
        {
            employeeList.map(employee=>(
                <NameCard imgUrl={employee.avatar} fName={employee.first_name} lName={employee.last_name} email={employee.email} />
            ))
        }
    </div>
    )
}
