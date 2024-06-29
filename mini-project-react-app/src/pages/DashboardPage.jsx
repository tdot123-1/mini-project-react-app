import RentalsList from "../components/RentalsList"
import { Link } from "react-router-dom";

const DashboardPage = ({ handleDelete, apartments }) => {
    return (
        <div className="dashboard-page">
            
            
            <h1>Dashboard</h1>
            
            <div className="btn-div">
                <Link to="/add-rental">
                    <button className="button">Add apartment</button>
                </Link>
            </div>
            
            <RentalsList handleDelete={handleDelete} apartments={apartments} />

        </div>
    )
}

export default DashboardPage;