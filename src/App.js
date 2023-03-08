import "./index.scss";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/Items/ItemListContainer";
import ItemDetailContainer from "./componentes/Items/ItemDetails/ItemDetailContainer";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element= {<ItemListContainer/>}/>
          <Route path="/items/:idProducto" element={<ItemDetailContainer/>} />
          <Route path="/category/:idCategory" element ={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
