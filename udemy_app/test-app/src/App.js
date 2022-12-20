import {  useState } from "react";
import TestComponent from "./components/testcomponent";
function App() {

  const [data, setData] = useState([
    // { title: "TEST", id: 1 },
    // { title: "TEST1", id: 2 },
  ]);

  // useEffect(()=> {
  //   setData({title: "DODADENO", id: 3})
  // },[setData])

   function addTodo(event) {
    event.preventDefault();
    const { todo } = event.target.elements

    if(data.length > 0) {
    const currentElement = data.slice(-1)[0]
    setData([...data, { title: `${todo.value}`, id: currentElement.id + 1 }]);

   }else {
    setData([...data, { title: `${todo.value}`, id:  1 }]);


   }

    console.log(data)
  }


  return (
    <div style={{
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'start',
      flexDirection: 'column',
    }}>
      <form onSubmit={addTodo}>
        <label>Enter something:</label>
        <input type="text" id="todo" />
        <input type="submit" />
      </form>
      <div> 
        { <TestComponent inputData={data} setData={setData} /> }
      </div>
    </div>
  );
}

export default App;
