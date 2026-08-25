import { Navigate } from "react-router-dom";
import PageComponent from "../Components/PageComponent";
import { useStateContext } from "../Context/Context";

function Dashboard({ children, buttons }) {
    const { token } = useStateContext();

    // if (!token) return navigate("/login", { replace: true });
    if (!token) return <Navigate to={"/login", { replace: true }} />;

    return (
        <PageComponent
            title="Dashboard"
            children={children}
            buttons={buttons}
        />
    );
}

export default Dashboard;
