import React, { useEffect, useState } from "react";
import { Badge, Button, Table } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";

function DataTable() {
 const [userdata, setUserData] = useState([])


async function FetchData() {
    
    try{
        const res = await fetch(`https://66fbcfe28583ac93b40d5390.mockapi.io/yes/peopledirectory`)
        const  data = await res.json()
        console.log(data)
        setUserData(data)



    }catch(e){
        console.log(e)
    }
}


useEffect(()=>{
    FetchData()
},[])



  return (
    <Table striped bordered hover className="my-3">
      <thead>
        <tr>
        <th>id</th>
          <th>

            Name <FaArrowDown />
          </th>
         
          <th>Email</th>
          <th>Status</th>
          <th>Role</th>
          {/* <th>Teams</th> */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
 {userdata.map((item)=>

 
  {
    const {id, name, email,teams,userimag} = item
    return (   
        
        <tr  key={item.id}>

          <td>{id}
           
          </td>
          <td> <span> <img className="w-20 rounded-circle me-2" src={userimag} alt="" /></span>{name}</td>
          <td>{email}</td>
         
         <td className=""><Badge bg="transparent " className="border shadow text-dark"> <span className="logged-in">●</span> Active</Badge></td>
          <td> 
         <div>
         <Badge bg="success me-3">Success</Badge>
      <Badge bg="danger me-3">Danger</Badge>
      <Badge bg="warning" text="dark">
        Warning
      </Badge>
         </div>
          </td>
          <td>
            <div>
                <Button className="me-3"> Add</Button>
                <Button> Edit</Button>
            </div>
          </td>
        </tr>
     )

 })}

        
      </tbody>
    </Table>
  );
}

export default DataTable;
