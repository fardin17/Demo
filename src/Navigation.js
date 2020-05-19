import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from "react-bootstrap/Button";


class Navigation extends Component {
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="Home">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="Profile">Profile</Nav.Link>
                        <Nav.Link href="About">About</Nav.Link>
                        <Nav.Link href="Contactinfo">Contactinfo</Nav.Link>
                        <Nav.Link href="Tryparallax">Parallax Section</Nav.Link>
                        <Nav.Link href="Tryscroll">Parallax Scroll</Nav.Link>
                        <Nav.Link href="Video">Video Play</Nav.Link>
                        <Nav.Link href="Login">Login</Nav.Link>
                    </Nav>

                    <Form inline style={{width:"23%"}}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary" style={{boxShadow:"5px 5px 5px -1px purple"}}>
                            Search
                        </Button>

                    </Form>
                    <p style={{color:"White",}}>
                        {this.props.hour}:{this.props.zero}{this.props.min}{this.props.ampm}
                    </p>

                </Navbar>

            </div>
        );
    }
}

export default Navigation;