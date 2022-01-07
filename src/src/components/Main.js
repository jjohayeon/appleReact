/* eslint-disable */
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import styled from 'styled-components';
import ShoppingList from './ShoppingList';

const Jumbotron = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #ccc;
`;

const Main = ({ shoes }) => {
  let listMap = shoes.map((a, i) => {
    return <ShoppingList shoes={shoes[i]} i={i} key={i}></ShoppingList>;
  });
  return (
    <>
      <Jumbotron className="background">
        <h1>20% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <div className="container">
        <div className="row">{listMap}</div>
      </div>
    </>
  );
};
export default Main;
