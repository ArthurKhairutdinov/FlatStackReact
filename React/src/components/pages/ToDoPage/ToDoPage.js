import React, { useState, useEffect } from 'react';
import ToDoList from '../../molecules/ToDoList';
import ToDoForm from '../../molecules/ToDoForm';
import useToDo from "../../../hooks/query/useToDo";
import Button from "../../atoms/Button";

const ToDoPage = () => {
    const { list: initialList, updateList } = useToDo();
    const [list, setList] = useState(initialList);
    const [listUnSaved, setListUnsaved] = useState(false);
    const [isChange, setChange] = useState(false);

    useEffect(() => {
        if (JSON.stringify(initialList) !== JSON.stringify(list)) {
            setListUnsaved(true);
        } else {
            setListUnsaved(false);
        }
    }, [initialList, list, listUnSaved]);

    const onAddNewListItem = (value) => {
        setList([...list, { title: value, checked: false,  id: list.length }]);
    };
    const handleRemove = (i) => setList(list.filter((elem, index) => i !== index));

    const onSave = () => {
        updateList(list);
    };

    const onDismiss = () => {
        setList(initialList);
    };

    const handleCheck = (ev, i) => {
        const {
            target: { checked },
        } = ev;
        setList((currentList) => currentList.map((listItem, index) => (i === index ? { ...listItem, checked } : listItem)));
    };

    useEffect(() => {
        setChange(!isChange)
    }, [list]);

    return (
        <>

                <title isChange={isChange}>ToDoPage</title>
                <ToDoList list={list} onRemove={handleRemove} onCheck={handleCheck}  />
                <ToDoForm onSubmit={onAddNewListItem} />
                {listUnSaved && (
                    <div>
                        <Button onClick={onDismiss}>Dismiss</Button>
                        <Button primary onClick={onSave}>
                            Save
                        </Button>
                    </div>
                )}
        </>
    );
};

export default ToDoPage;
