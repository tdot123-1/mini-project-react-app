import RentalsList from "../components/RentalsList"

const DashboardPage = ({ handleDelete, apartments }) => {
    return (
        <div className="dashboard-page">
            <h1>Dashboard</h1>
            <button>Add apartment</button>
            <RentalsList handleDelete={handleDelete} apartments={apartments} />
        </div>
    )
}

export default DashboardPage;