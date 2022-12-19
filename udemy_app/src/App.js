import { useState, useEffect } from "react";
import TestComponent from "./components/testcomponent";
function App() {
  const [data, setData] = useState([
    { title: "TEST", id: 1 },
    { title: "TEST1", id: 2 },

  ]);


  // const changeData = useCallback(() => {
  //   setData("testValue");
  // },[]);

  useEffect(() => {
    // Update the document title using the browser API
     changeData();
  },[]);
  let changeData = () => {
    let currentElement = data.slice(-1)[0] 

    setData([...data, { title: `${currentElement.title} testValue`, id: currentElement.id + 1 }]);
  };



  return (
    <div>
      <TestComponent inputData={data} /> 


    

      <button onClick={() => changeData()}>Change Data</button>
    </div>
  );
}

export default App;
