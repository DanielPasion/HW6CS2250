import { Link} from "react-router-dom";

export default function NoPage(){
    return(
        <>
        <h1>Error: 404 Page Not Found</h1>
        <Link to="/">Go to Home</Link>
        </>
    )
}