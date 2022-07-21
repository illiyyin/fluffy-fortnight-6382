import React,{useEffect} from 'react'

export default function ListCollection() {

  const arr = [
    {
      id: 1,
      cover: "",
      name: "nama collect",
      listId:[30,46]
    }
  ]

  useEffect(() => {
    localStorage.setItem("collection",JSON.stringify(arr))
  },[])
  return (
    <div style={{marginTop:'86px'}}>
      List Collection
      {arr.map(item => (
        <div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
