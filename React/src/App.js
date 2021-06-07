import {BrowserRouter, Switch, Route} from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import ToDoPage from './components/pages/ToDoPage';
import IndexPage from "./components/pages/IndexPage/IndexPage";
import TaskPage from "./components/pages/TaskPage";
import TasksFromApi from "./components/pages/TasksFromApi/TasksFromApi";
import ListsPage from "./components/pages/ListsPage"
import ApolloClient from '../src/lib/ApoloClient'
import EditPage from "./components/pages/EditPage";

const App = () => (
    <ApolloProvider client={ApolloClient}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <IndexPage />
                </Route>

                <Route exact path='/tasks'>
                    <ToDoPage />
                </Route>

                <Route exact path='/tasks/:id'>
                    <TaskPage />
                </Route>

                <Route exact path='/tasks/edit/:id'>
                    <EditPage />
                </Route>

                <Route exact path='/tasksgraph'>
                    <TasksFromApi />
                </Route>

                <Route exact path='/lists'>
                    <ListsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    </ApolloProvider>
);

export default App;
