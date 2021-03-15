import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      {/* BrowserRouter는 /#/가 없음, github page에 업로드 하기가 어려움 */}
      <Navigation /> {/* router 밖에서는 Link를 사용할 수 없음 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} /> {/* :id -> 변수 */}
    </HashRouter>
  );
}

export default App;
