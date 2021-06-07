import { useState } from 'react';
import todos from '../../config/tasks';

const useToDo = () => {
    const [list, setList] = useState(todos);

    return { list, updateList: setList };
};

export default useToDo;