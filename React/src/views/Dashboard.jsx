import { Navigate } from "react-router-dom";
import PageComponent from "../Components/PageComponent";
import { useStateContext } from "../Context/Context";

function Dashboard({ children, buttons }) {
    const { token } = useStateContext();
    if (token) return <Navigate to={"/dashboard"} />;

    return (
        <PageComponent
            title="Dashboard"
            children={children}
            buttons={buttons}
        />
    );
}

export default Dashboard;
