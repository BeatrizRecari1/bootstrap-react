import Nav from "react-bootstrap/Nav"

export default function Navmain () {

    return (
    
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href="home">
                        Home
                    </Nav.Link>
                </Nav.Item>

                 <Nav.Item>
                    <Nav.Link href="portfolio">
                        Portfolio
                    </Nav.Link>
                </Nav.Item>

                        <Nav.Item>
                    <Nav.Link href="/about">
                        About
                    </Nav.Link>
                </Nav.Item>

                    <Nav.Item>
                    <Nav.Link href="/about">
                        Contact
                    </Nav.Link>
                </Nav.Item>

                    <Nav.Item>
                    <Nav.Link href="/about">
                    <button className="disable">Login</button> 
                    </Nav.Link>
                </Nav.Item>


                

            </Nav>
       
    )
}