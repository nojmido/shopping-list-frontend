//usersList.tsx
import React, { useState } from 'react';
import ListUser from './UserOfList';
//import users from './mockDataUsers';  // Importujeme mock data

import { ListGroup } from 'react-bootstrap';

interface UsersListProps {
  users: { id: number, name: string, owner: boolean }[];
}

const UsersList: React.FC<UsersListProps> = (props) => {

  const [userList, setUserList] = useState(props.users);  // Přidání stavu pro sledování seznamu položek

  const handleDelete = (id: number) => {
    // Filtruje userList, aby odstranil položku s daným id
    setUserList(currentUsers => currentUsers.filter(user => user.id !== id));
  }

  return (
    <ListGroup variant="flush">
      {props.users.map((user) => (
        <ListUser
          key={user.id}
          id={user.id}
          name={user.name}
          owner={user.owner}
          onDelete={handleDelete}
        />
      ))}
    </ListGroup>
  );
};

export default UsersList;