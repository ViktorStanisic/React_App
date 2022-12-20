import React from 'react'

export default function TestComponent({inputData},{setData}) {

      function deleteTodo(id) {
            inputData.pop(id.id);
            console.log(inputData);
            setData(inputData)
            console.log(setData(inputData))
      }


      
      return (       
            <div>
                  
                  {inputData.map((x) => (
                        <li key={x.id}>key = {x.id} = {x.title} <span style={{color:"red", cursor:"pointer"}} onClick={() => deleteTodo(x)}>X</span></li>
                  ))}

            </div>
      )
}
