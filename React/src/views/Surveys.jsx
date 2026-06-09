import PageComponent from "../Components/PageComponent";

function Surveys({ children, buttons }) {
    return (
        <PageComponent title="Surveys" children={children} buttons={buttons} />
    );
}

export default Surveys;
