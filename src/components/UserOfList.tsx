//serOfList
//NameOfUser - Displays the user's name
//RoleOfUser - Displays the user's role and the appropriate icon
//UserIsAuthor - If the application user is the author of the list, icons for editing users (delete member, change owner) are drawn

import React from 'react';
import { Button} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as faUserSolid } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';

interface ItemOfListProps {
    id: number;
    name: string;
    owner: boolean;
    onDelete: (id: number) => void;
}

const ItemOfList: React.FC<ItemOfListProps> = ({ id, name, owner, onDelete }) => {

    return (
        <li className="list-group-item d-flex" >
            <div className="p-2">
            {owner ? <FontAwesomeIcon icon={faUserSolid} /> : <FontAwesomeIcon icon={faUserRegular} /> }
            </div>
            <div className="p-2"> {name}</div>
            <div className="ms-auto p-2">
                <Button variant="danger" size="sm" onClick={() => onDelete(id)}>Smazat</Button>
            </div>
        </li>
    );
}

export default ItemOfList;