import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import SideBard from "./components/SideBard";
import { Col, Container, Row } from "react-bootstrap";
import Overview from "./components/Overview";
import PeopleDirectory from "./Pages/PeopleDirectory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Container fluid>
          <Row>
            <Col xs={12} md={2} className="mb-3">
              <SideBard />
            </Col>
          
            <Col xs={12} md={10}>
             
            
        <Routes>
          <Route path="/" element={<Overview />} />
          {/* <Route path='/sidebar' element={<SideBard/>} /> */}

 <Route  path="/directory" element={<PeopleDirectory/>}/>

        </Routes>
            
            </Col>

        </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
