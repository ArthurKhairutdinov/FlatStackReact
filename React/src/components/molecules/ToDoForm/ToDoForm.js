import {useState} from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

const ToDoForm = ({ disabled, onSubmit }) => {
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        console.log(value)
        onSubmit(value);
        setValue('');
    };

    return (
        <div>
            <Input disabled={disabled} onChange={setValue} value={value} />
            <Button primary disabled={disabled} onClick={handleSubmit}>
                Add!
            </Button>
        </div>
    );
};

export default ToDoForm;
