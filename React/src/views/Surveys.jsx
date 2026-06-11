import { Link, Navigate } from "react-router-dom";
import PageComponent from "../Components/PageComponent";
import { useStateContext } from "../Context/Context";
import SurveylistItem from "../Components/SurveylistItem";

function Surveys({ children }) {
    const { token, surveys } = useStateContext();

    if (!token) return <Navigate to={"/login"} />;

    function onDeleteClick() {
        console.log("deleted");
    }

    return (
        <PageComponent
            title="Surveys"
            buttons={
                <Link to="/surveys/create">
                    <button
                        type="button"
                        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-teal-500 border border-transparent text-foreground-inverse hover:bg-teal-600 focus:outline-hidden focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className=" size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <p>Create new Survey</p>
                    </button>
                </Link>
            }
            children={children}
        >
            <div className="grid gap-6 grid-cols sm:grid-cols-2 md:grid-cols-3">
                {surveys.map((survey) => (
                    <SurveylistItem
                        key={survey.id}
                        survey={survey}
                        onDeleteClick={onDeleteClick}
                    />
                ))}
            </div>
        </PageComponent>
    );
}

export default Surveys;
