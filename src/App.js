import React from 'react';
import './App.css';
import clsx from 'clsx';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

function App() {



  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem button key="Login">
            <Link to="/Login" className="nav-item">Login / Register</Link>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem button key="Login">
            <Link to="/Logout" className="nav-item">Logout</Link>
          </ListItem>
      </List>

    </div>
  );


  return (
    <Router>
    <div className="App">
    {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
        <AppBar className="nav" position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className="" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit"><Link className="nav-link" to="/">Home</Link></Button>
          <Button color="inherit"><Link className="nav-link" to="/About">About</Link></Button>
          <Button color="inherit"><Link className="nav-link" to="/Contact">Contact</Link></Button>
          <Button color="inherit" className="right">Login</Button>
        </Toolbar>
      </AppBar>
      <Route path='/' exact component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Contact' component={Contact} />
    </div>
    </Router>
  );
}

export default App;