import {Link} from 'react-router-dom';
import routes from '../../../config/routes';
import DefaultTemplate from '../../templates/DefaultTemplate';

const Home = () => (
    <DefaultTemplate>
        <h1>WELCOME TO TODO LIST</h1>
        <Link to={routes.TASKS}>See tasks</Link>
    </DefaultTemplate>
);

export default Home;
