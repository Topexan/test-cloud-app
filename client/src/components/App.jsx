import React from "react";
import Navbar from "./navbar/Navbar";
import './app.css'
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <div className="wrap">
        <Switch>
          <Route path="/registration" component={Registration} />
        </Switch>
        </div>
        
      </div>    
    </BrowserRouter>
    
  );
}

export default App;
