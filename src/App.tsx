import { Row } from "antd";
import React from "react";
import Authentication from "./component/Authentication/Authentication";
import Navbar from "./component/Navbar/Navbar";
import NhapSo from "./component/NhapSo/NhapSo";
import ThongKe from "./component/ThongKe/ThongKe";
import TraCuuSo from "./component/TraCuuSo/TraCuuSo";

function App() {
  return (
    <div className="App">
      <Row>
        <Navbar />
      </Row>
      <ThongKe />
    </div>
  );
}

export default App;
