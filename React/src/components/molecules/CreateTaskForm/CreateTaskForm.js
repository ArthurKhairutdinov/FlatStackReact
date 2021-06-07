import React, { useState, useCallback } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import useCreateTask from "../../../hooks/mutation/useCreateTask";

const CreateTaskForm = ({ listId }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [value, setValue] = useState("");

    const onChange = (val) => {
        setValue(val)
    }

    const {create} = useCreateTask();

    const openForm = useCallback(() => {
        setIsFormOpen(!isFormOpen)
    }, [isFormOpen])

    return (
        <div>
            <Button onClick={openForm}>Create Task</Button>
            {isFormOpen &&
            <>
                <Input onChange={onChange} />
                <Button onClick={() => create(value, listId)}> Create! </Button>
            </>}
        </div>
    )
};

export default CreateTaskForm;