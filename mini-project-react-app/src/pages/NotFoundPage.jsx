import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <div className="btn-div">
                <Link to="/">
                    <button className="button">return</button>
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage;