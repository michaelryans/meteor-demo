import React from 'react'
import { Container, Navbar, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// const { Navbar } = ReactBootstrap

export default function UpperNavbar() {
    return (
        <Container
            className='border-bottom shadow-bottom'
            fluid style={{
                backgroundColor: 'white',
            }}>
            <Container className='px-0'>
                <Navbar variant="light"
                    className='p-0'
                    style={{
                    backgroundColor: 'white',
                }}>
                    <Navbar.Brand>
                        <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" className="App-logo" alt="logo" style={{ height: '40px' }} />
                        <img src="https://banner2.kisspng.com/20180820/hzb/kisspng-meteor-javascript-react-application-software-porta-meteor-logo-transparent-png-stickpng-5b7b707d82e439.0014856015348163815361.jpg" className="App-logo" alt="logo" style={{ height: '40px' }} />
                        
                        
                        <Link to='/' style={{ textDecoration: 'none', color: 'black', marginRight: '10px' }}>
                            meteor<span style={{ 'fontWeight': '700' }}>home</span></Link>
                        <Link to='/todos' style={{ textDecoration: 'none', color: 'black', marginRight: '10px' }}>
                            meteor<span style={{ 'fontWeight': '700' }}>todo</span></Link>
                    </Navbar.Brand>
                </Navbar>
            </Container>
        </Container>
    )
}
