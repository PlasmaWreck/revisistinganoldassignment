import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PageHandler from './pages/pageHandler';
import {Row, Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="appBodyMain">
      <Row className="centerX">
        <PageHandler />
      </Row>
    </Container>
  );
}

export default App;
