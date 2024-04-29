//SettingsList
import React, { useState } from 'react';
import { ListGroup, Form, Button, InputGroup } from 'react-bootstrap';

interface SettingsListProps {
    shopListName: string;
    setShopListName: (name: string) => void;
}

const SettingsList: React.FC<SettingsListProps> = (props) => {

    const [shopChangedName, setChangedName] = useState<string>(props.shopListName);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        props.setShopListName(shopChangedName);
    }

    return (
        <ListGroup variant="flush">
            <ListGroup.Item>
            <div className="col-sm-6">
                <Form onSubmit={handleSave}>
                    <InputGroup>
                    <Button variant="primary" type="submit"> Change name </Button>
                        <Form.Control
                            type="text"
                            //value={props.shopListName}
                            onChange={(e) => setChangedName(e.target.value)}  // Aktualizace názvu pomocí setteru
                            placeholder="New name of the list"
                        />
                        </InputGroup>
                </Form>
                </div>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default SettingsList;