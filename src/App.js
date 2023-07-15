import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ReastaurentList from "./components/ReastaurentList";
import ReastaurentCreate from "./components/ReastaurentCreate";
import ReastaurentUpdate from "./components/ReastaurentUpdate";
import ReastaurentDetail from "./components/ReastaurentDetail";
import ReastaurentSearch from "./components/ReastaurentSearch";
import Home from "./components/Home";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Routes>
        <Navbar bg="light" expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/list">
                  List
                </Nav.Link>
                <Nav.Link as={Link} to="/create">
                  Create
                </Nav.Link>
                <Nav.Link as={Link} to="/search">
                  Search
                </Nav.Link>
                <Nav.Link as={Link} to="/update/:id">
                  Update
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
         <Route path="/list">
          <ReastaurentList/>
         </Route>
         <Route path="/create">
          <ReastaurentCreate/>
         </Route>
         <Route path="/update">
          <ReastaurentUpdate/>
         </Route>
         <Route path="/details">
          <ReastaurentDetail/>
         </Route>
         <Route path="/search">
          <ReastaurentSearch/>
         </Route>
         <Route  exact path="/">
          <Home/>
         </Route>
         </Router>
      </Routes>
    </div>
  );
}

export default App;
