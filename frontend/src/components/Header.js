import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import logo from "../assets/film.svg";
import { NavLink } from 'react-router-dom';
import {UseLocalStorage} from './useLocalStorage';
import {History} from './History';

export const Header = (props) => {
  const [isLogin, setIslogin] =  UseLocalStorage("email", "");

  function logout(event) {
    window.localStorage.clear();
    window.location.href = "/login";
  }

  let styles = {
    marginRight: '10px',
  };

  let style1 = {
    color: "white",
    marginRight: '20px',
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="film logo"
              src={logo}
              className="d-inline-block align-top"
            />
            
             <a 
              href="/Dashboard"
              style={style1}
            >
             CloudCritics
             </a>

             <a 
              href="/History"
              style={{color: "white"}}
            >
              History
             </a>
          
          </Navbar.Brand>
          </Container>

        { isLogin.length === 0 &&
          <div style={styles}>
          <a
            href="/login"
          >
            <Button variant="btn btn-warning">Login</Button>
          </a>
        </div>
      }

      { isLogin.length === 0 &&
        <div style={styles}>
          <a href="/register">
            <Button variant="btn btn-warning">Sign-up</Button>
          </a>
        </div>
        }
          


        { isLogin.length !== 0 &&
          <div style={styles}>
          <a
            href="/login"
            onClick={() => {
              logout();
            }}
          >
            <Button variant="btn btn-warning">Logout</Button>
          </a>
        </div>
        }
          
        
      </Navbar>
    </div>
  );
};

export default Header;
