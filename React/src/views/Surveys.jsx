import { Navigate } from "react-router-dom";
import PageComponent from "../Components/PageComponent";
import { useStateContext } from "../Context/Context";

function Surveys({ children, buttons }) {
    const { token } = useStateContext();

    if (!token) return <Navigate to={"/login"} />;

    return (
        <PageComponent
            title="Surveys"
            children={children}
            buttons={buttons}
        ></PageComponent>
    );
}

export default Surveys;
