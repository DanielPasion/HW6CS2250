import { Link} from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>Welcome to my app</h1>
            <Link to="Api">Go to Api</Link>
            <br></br>
            <Link to="Tictactoe">Go To Tic Tac Toe</Link>
        </div>
    )
}