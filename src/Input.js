import './Input.css';

export default function Input(){
    const changePage = () => {

    }
    return(
        <div class="layout">
            <h2>Create Your DevCard</h2>
            <input className="forms" type="text" placeholder="Your Full Name"/><br/><br/>
            <input className="about" type="text" placeholder="About Me"/><br/><br/>
            
            <p>Technologies You Know:</p>
            <input type="checkbox" /><label>HTML</label>
            <input type="checkbox" /><label>CSS</label><br/>
            <input type="checkbox" /><label>JS</label>
            <input type="checkbox" /><label>Git</label><br/>
            <input type="checkbox" /><label>React</label>
            <input type="checkbox" /><label>Node.js</label><br/><br/>

            <input className="forms" type="text" placeholder="Github URL" /><br/><br/>
            <input className="forms" type="text" placeholder="Twitter URL" /><br/><br/>

            <input className="forms" type="text" placeholder="Favourite Books (Seperate by comma)" /><br/><br/>
            <input className="forms" type="text" placeholder="Favourite Artists (Seperate by comma)" /><br/><br/>
            <input className="forms" type="submit" value="Create Site" />

           
        </div>
    );
}