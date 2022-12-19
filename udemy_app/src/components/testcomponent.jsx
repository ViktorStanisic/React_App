import React from 'react'

export default function TestComponent({ inputData }) {
      return (
            <div>
                  {inputData.map((x) => (

                        <li key={x.id}>key = {x.id} = {x.title}</li>
                        

                  ))}

            </div>
      )
}
