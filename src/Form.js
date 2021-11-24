import "./Input.css";

export default function Form({type, placeholder, children}){
    return(
        <div>
            <input className="forms" type={type} placeholder={placeholder} />{children}
        </div>
    );
}