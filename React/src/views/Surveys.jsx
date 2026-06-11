import { Navigate } from "react-router-dom";
import PageComponent from "../Components/PageComponent";
import { useStateContext } from "../Context/Context";
import SurveylistItem from "../Components/SurveylistItem";

function Surveys({ children, buttons }) {
    const { token, surveys } = useStateContext();

    if (!token) return <Navigate to={"/login"} />;

    return (
        <PageComponent title="Surveys" children={children} buttons={buttons}>
            {surveys.map((survey) => (
                <SurveylistItem survey={survey} />
            ))}
        </PageComponent>
    );
}

export default Surveys;
