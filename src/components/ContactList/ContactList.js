export const ContactList = ({ onDelete, visibilContact }) => {
    return (
        <ul>
            {visibilContact.map(({ name, id, number }) => (
                <li key={id}>
                    <p>{name} : {number}</p>
                    <button type="button" onClick={() => onDelete(id)}>delete</button>
                </li>

            ))}
        </ul>
    );
};