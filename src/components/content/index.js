import Button from "react-bootstrap/Button"


/*
Primary => Blue
Secondary => Grey
Success => Green 
Warning => Yellow
Danger => Red
Info => Teal
Light => White
Dark => Black
*/

/* 
sm md lg xl xxl
*/
export default function Content () {
    return(
        <>
            <h2>Content</h2>
            <Button variant="outline-info" size="lg" active>Login</Button>
            <Button variant="outline-info" size="lg" disabled>Recovery Password</Button>
        </>
    )
}