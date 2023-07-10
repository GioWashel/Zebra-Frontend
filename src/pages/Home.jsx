import { Navbar } from "../components/navbar";
import { Login } from "./Login"
import "./Home.css";


export const Home = () => {
   
    return(
        <div className="home">
            <Navbar/>
            <Login/>
        </div>
    );
};