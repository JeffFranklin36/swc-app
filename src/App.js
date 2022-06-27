//react features
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import './App.css';

//components
import Home from './Components/Home'
import Signin from './Components/Signin'
import Panels from './Components/Panels'
import Tickets from './Components/Tickets.js';

//bootstrap style components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'


function App() {

  const panels = ['Lucasfilm Panel', 'Lego Panel', 'Ashoka Panel', 'Mandalorian Panel', 'Cosplay Competition']

  const tickets = [
    {
      'Title': 'Jedi Master VIP Pass',
      'Text': 'VIP access to all exclusive events',
      'Cost': '$765',
      'Img': 'Images/VIP-Tix.jpg',
      'Days': 4
    },
    {
      'Title': '4-Day Adult',
      'Text': '4 day event access',
      'Cost': '$159',
      'Img': 'Images/Adult-4-Day.jpg',
      'Days': 4
    },
    {
      'Title': '4-Day Kids',
      'Text': 'VIP access to all exclusive events',
      'Cost': '$61',
      'Img': 'Images/Kids-4-Day.jpg',
      'Days': 4
    },
    {
      'Title': 'Single Day Adult Friday',
      'Text': 'Access to all Friday events',
      'Cost': '$65',
      'Img': 'Images/Single-Day.jpg',
      'Days': 1
    },
    {
      'Title': 'Single Day Adult Saturday',
      'Text': 'Access to all Saturday events',
      'Cost': '$65',
      'Img': 'Images/Single-Day.jpg',
      'Days': 1
    },
    {
      'Title': 'Single Day Adult Sunday',
      'Text': 'Access to all Sunday events',
      'Cost': '$65',
      'Img': 'Images/Single-Day.jpg',
      'Days': 1
    },
    {
      'Title': 'Single Day Adult Monday',
      'Text': 'Access to all Monday events',
      'Cost': '$65',
      'Img': 'Images/Single-Day.jpg',
      'Days': 1
    },
    {
      'Title': 'Single Day Kids Friday',
      'Text': 'Access to all Friday events',
      'Cost': '$65',
      'Img': 'Images/Single-Day.jpg',
      'Days': 1
    },
    {
      'Title': 'Single Day Kids Saturday',
      'Text': 'Access to all Saturday events',
      'Cost': '$65',
      'Img': 'Images/Single-Day.jpg',
      'Days': 1
    },
    {
      'Title': 'Single Day Kids Sunday',
      'Text': 'Access to all Sunday events',
      'Cost': '$65',
      'Img': 'Images/Single-Day.jpg',
      'Days': 1
    },
    {
      'Title': 'Single Day Kids Monday',
      'Text': 'Access to all Monday events',
      'Cost': '$65',
      'Img': 'Images/Single-Day.jpg',
      'Days': 1
    },
    {
      'Title': 'Vendor',
      'Text': 'Vendors Click here for more info',
      'Cost': 'NA',
      'Img': 'Images/Single-Day.jpg',
      'Days': 4
    },
  ]

  // const tickets = ['Jedi Master Vip Pass', 'Standard 4-Day Adult', '4-Day Kids', 'Single Day Adult', 'Single Day Kids']

  return (
    <div className="App">
      <Router>
      <header>
          <h1 className="title">Welcome Star Wars Fans!</h1>
          <Container>
            <Nav variant="tabs" fill>
              <Nav.Item>
                <Nav.Link>
                <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                <Link to="/panels">Panels</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                <Link to="/tickets">Tickets</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                <Link to="/signin">Sign-in</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>

        <div className='display'>
          <Routes>
            <Route path ='/' element={<Home/>} />
            <Route path ='/panels' element={<Panels panels={panels}/>} />
            <Route path ='/tickets' element={<Tickets tickets={tickets}/>} />
            <Route path ='/signin' element={<Signin/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;