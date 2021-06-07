import { Link } from "react-router-dom";
import ToDoListItem from '../../atoms/ToDoListItem/ToDoListItem';
import Button from "../../atoms/Button";
import CheckBox from "../../atoms/Checkbox";

const ToDoList = ({ list, onRemove, onCheck }) => (
        <ul>
            {list?.map(( {title,checked, id}, i) => (
                <ToDoListItem id={id} key={`${i}-${title}`} checked={checked} >
                    <CheckBox onChange={(ev) => onCheck(ev, i)} />
                    <Link to={`tasks/${id}`}>
                        <span>{title}</span>
                    </Link>
                    <Button error outlined onClick={() => onRemove(i)}>
                        x
                    </Button>
                </ToDoListItem>
            ))}
        </ul>
);

export default ToDoList;
