import Form from "./Form.js";

export default function Input(){
    const changePage = () => {

    }
    return(
        <div>
            <h2>Create Your DevCard</h2>
            <Form type="text" placeholder="Your Full Name"/><br/>
            <Form type="text" placeholder="About Me"/><br/>
            
            <p>Technologies You Know:</p>
            <Form type="checkbox"> HTML</Form>
            <Form type="checkbox"> CSS</Form>
            <Form type="checkbox"> JS</Form>
            <Form type="checkbox"> Git</Form>
            <Form type="checkbox"> React</Form>
            <Form type="checkbox"> Node.js</Form><br/>

            <Form type="text" placeholder="Github URL" /><br/>
            <Form type="text" placeholder="Twitter URL" /><br/>

            <Form type="text" placeholder="Favourite Books (Seperate by comma)" /><br/>
            <Form type="text" placeholder="Favourite Artists (Seperate by comma)" /><br/>
            <Form type="submit" value="Create Site" />

           
        </div>
    );
}