import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

interface ItemOfListProps {
  id: number;
  name: string;
  initialPurchased: boolean;
  onDelete: (id: number) => void;
}

const ItemOfList: React.FC<ItemOfListProps> = ({ id, name, initialPurchased, onDelete }) => {
  const [purchased, setPurchased] = useState<boolean>(initialPurchased);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('purchasedItems') || '{}');
    if (purchased) {
      data[id] = true;
    } else {
      delete data[id];
    }
    sessionStorage.setItem('purchasedItems', JSON.stringify(data));
  }, [purchased, id]);

  return (
    <li className="list-group-item d-flex" style={{ textDecoration: purchased ? 'line-through' : 'none' }}>
      <div className="p-2">
        <Form.Check
          type="checkbox"
          checked={purchased}
          onChange={() => setPurchased(!purchased)}
        />
      </div>
      <div className="p-2"> {name}</div>

      <div className="ms-auto p-2">
        <Button variant="outline-danger" size="sm" onClick={() => onDelete(id)}>Smazat</Button>
      </div>

    </li>
  );
}

export default ItemOfList;