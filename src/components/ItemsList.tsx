import React, { useState, useEffect } from 'react';
import ItemOfList from './ItemOfList';
import items from './mockData';  // Importujeme mock data

import { ListGroup, Form, Button, InputGroup } from 'react-bootstrap';

interface ItemsListProps {
  items: { id: number, name: string, purchased: boolean }[];
}

const ItemsList: React.FC<ItemsListProps> = (props) => {

  const [purchasedItems, setPurchasedItems] = useState<{ [key: number]: boolean }>({});
  const [itemList, setItemList] = useState(items);  // Přidání stavu pro sledování seznamu položek
  const [newItem, setNewItem] = useState("");  // Pro ukládání textu nové položky
  const [filterPurchased, setFilterPurchased] = useState(false); // Pro ukládání stavu 'Filter purchased items'

  useEffect(() => {
    const loadedItems = JSON.parse(sessionStorage.getItem('purchasedItems') || '{}');
    setPurchasedItems(loadedItems);
  }, []);

  const handleDelete = (id: number) => {
    // Filtruje itemList, aby odstranil položku s daným id
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
  }

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();  // Zabránění obnově stránky

    const newItemObject = {
      id: new Date().getTime(),  // Přiřazení nového unikátního ID
      name: newItem,
      state: ""
    };
    setItemList([...itemList, newItemObject]);
    setNewItem("");  // Resetování inputu
  };

  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Filter purchased items"
            checked={filterPurchased}
            onChange={() => setFilterPurchased(!filterPurchased)}
          />
        </Form>
      </ListGroup.Item>
      {itemList.filter(item =>
        filterPurchased ?
          item.state !== 'purchased' :
          (item.state === 'purchased' || item.state !== 'purchased')).map((item) => (
            <ItemOfList
              key={item.id}
              id={item.id}
              name={item.name}
              initialPurchased={!!purchasedItems[item.id]}
              onDelete={handleDelete}
            />
          ))}

      <ListGroup.Item>
        <Form onSubmit={handleAddItem}>
          <InputGroup>
            <Form.Control
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Přidat novou položku"
            />
          </InputGroup>
        </Form>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ItemsList;