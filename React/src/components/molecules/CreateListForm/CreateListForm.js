import React, { useState, useCallback } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import useCreateList from "../../../hooks/mutation/useCreateList";

const CreateListForm = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [value, setValue] = useState("");

    const onChange = (val) => {
        setValue(val)
    }

    const {create} = useCreateList();

    const openForm = useCallback(() => {
        setIsFormOpen(!isFormOpen)
    }, [isFormOpen])

    return (
        <div>
            <Button onClick={openForm}>Create List</Button>
            {isFormOpen &&
                <>
                    <Input onChange={onChange} />
                    <Button onClick={() => create(value)}> Create! </Button>
                </>}
        </div>
    )
};

export default CreateListForm;
