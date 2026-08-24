import { useNavigate } from "react-router-dom";
import PageComponent from "../Components/PageComponent";
import { useStateContext } from "../Context/Context";

function Dashboard({ children, buttons }) {
    const { token } = useStateContext();
    const navigate = useNavigate();
    if (!token) return navigate("/login", { replace: true });

    return (
        <PageComponent
            title="Dashboard"
            children={children}
            buttons={buttons}
        />
    );
}

export default Dashboard;
