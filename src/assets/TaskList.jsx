export default function TaskList(props) {
    const listaDeLi = props.tasks.map((task) => //el map convierte lista de objetos a lista de li
        task.completed ? (
            <li className="li">{task.text}</li>
        ) : (
            <li>{task.text}</li>
        )
    );

return(
    <ul>{listaDeLi}</ul>
);
};