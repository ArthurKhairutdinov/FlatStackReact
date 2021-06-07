import React from 'react'
import useLists from '../../../hooks/query/useLists';
import TaskList from "../../molecules/TaskList";
import routes from "../../../config/routes";
import CreateListForm from "../../molecules/CreateListForm";
import {Link} from "react-router-dom";

const ListPage = () => {

    const {lists} = useLists();
    return (
        <>
            <div>
                <div>
                    <Link link={routes.HOME}>Home</Link>
                    <CreateListForm />
                </div>
                {lists.map(list => (
                    <TaskList list={list} />
                ))}
            </div>
        </>
    );
};

export default ListPage;