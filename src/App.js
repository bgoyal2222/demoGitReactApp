import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Profile from "./Components/Profile/Profile";
import Repos from './Components/Repositories/Repos';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header" />
          <Container>
            <Row>
              <Col md="3">
                <Profile />
              </Col>
              <Col md="9">
                <Repos />
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
