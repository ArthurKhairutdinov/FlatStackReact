import {useState} from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

const EditTaskForm = ({ onSubmit, task }) => {
    const [value, setValue] = useState(task?.title);

    const handleSubmit = () => {
        console.log(value)
        onSubmit(task.id, value);
        setValue('');
    };

    return (
        <div>
            <Input data-testid='title-input' onChange={setValue} value={value} />
            <Button data-testid='edit-button' primary onClick={handleSubmit}>
                Update!
            </Button>
        </div>
    );
};

export default EditTaskForm;