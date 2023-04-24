
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Form from "./container/Form";
import Success from "./container/Success";
import SharedLayout from "./container/SharedLayout";
import ProtectedRout from "./container/ProtectedRout";
import { useState } from "react";


function App() {

  const [data,setData ] = useState()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Form  setData={setData}/>}/>
          <Route path="/Success" element={<ProtectedRout data={data}><Success data={data}/></ProtectedRout>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
