import { Item, List, Button } from "./ContactList.styled";
import PropTypes from 'prop-types';

export const ContactList = ({ onDelete, visibilContact }) => {
    return (
        <List>
            {visibilContact.map(({ name, id, number }) => (
                <Item key={id}>
                    <p>{name} : {number}</p>
                    <Button type="button" onClick={() => onDelete(id)}>Delete</Button>
                </Item>

            ))}
        </List>
    );
};

ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    visibilContact: PropTypes.array.isRequired,
}