import PageComponent from "../Components/PageComponent";

function Dashboard({ children, buttons }) {
    return (
        <PageComponent
            title="Dashboard"
            children={children}
            buttons={buttons}
        />
    );
}

export default Dashboard;
