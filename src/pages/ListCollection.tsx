import React, { useEffect } from 'react'
import { useLocation } from "wouter";

export default function ListCollection() {
  const [location, setLocation] = useLocation();
  const arr = [
    {
      id: 1,
      cover: "",
      name: "nama collect",
      listId:[30,46]
    },
    {
      id: 2,
      cover: "",
      name: "nama collect gada 46",
      listId:[30]
    },
  ]

  useEffect(() => {
    localStorage.setItem("collection",JSON.stringify(arr))
  },[])
  return (
    <div style={{marginTop:'86px'}}>
      List Collection
      {arr.map(item => (
        <div onClick={()=>setLocation("/collection/"+item.id)}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
