import { Contenedor } from "./join-elements";
import form from "../atomos/form.css"
import Button2 from "./button2.js"
import {Link} from "react-router-dom"


const Formulario = () => {
    return (    
<Contenedor>
    <form>
    <ul>
    <li>
        <label for="name">Name:</label><br></br>
        <input type="text" id="name" name="user_name"/>
        </li>
    <li>
        <label for="mail">Email:</label><br></br>
        <input type="email" id="mail" name="user_mail"/>
    </li>
    <li>
        <label for="msg">Password:</label><br></br>
        <input type="password" id="password" name="user_password"/>
    </li>
    </ul>
    <Link to="/join"><Button2>Join Now</Button2></Link>
    </form>
</Contenedor>
    );
 }

 export default Formulario