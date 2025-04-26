import { Outlet } from "react-router-dom";

function StudentViewCommonLayout() {
    return <div>Common Content <Outlet/></div>;
}

export default StudentViewCommonLayout;