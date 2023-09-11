import './button.css';
export default function Button({text}){
    return(
    <button type="button" className="lineButton">{text}</button>
    );
}