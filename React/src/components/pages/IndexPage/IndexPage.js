import routes from '../../../config/routes';
import {Link} from "react-router-dom";

const IndexPage = () => (
    <>

        <Link link={routes.TASKS}> Tasks</Link>
        <Link link={routes.TASKAPI}>Tasks from api</Link>
        <Link link={routes.LISTS}> Lists</Link>
    </>
);

export default IndexPage;