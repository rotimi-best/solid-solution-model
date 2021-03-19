import React from 'react'
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import './Sidebar.css'

export default function Sidebar({ temp, handleTemp }) {
    const [value, setValue] = React.useState(temp);

    React.useEffect(() => {
        if (temp !== value) {
            setValue(temp);
        }
    }, [temp]);

    const handleTempChange = (e) => {
        setValue(parseInt(e.target.value));
    }
    
    return (
        <div className="root">
            <Card className="m-auto" style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Входные данных</Card.Title>
                    {/* <Dropdown.Divider />
                    <Card.Subtitle className="mb-2 font-italic">
                        Энергия взаимодействия между атомами, k=1...4
                    </Card.Subtitle>
                    <Card.Text>
                        <strong>W<sub>k</sub>:</strong> 
                    </Card.Text> */}
                    <Dropdown.Divider />
                    <Card.Subtitle className="mb-2 font-italic">
                        Квазибинарных параметров взаимодействия в твердых растворах (Дж/моль)
                    </Card.Subtitle>
                    <Card.Text>
                        <strong>α13 = αGaP—InP:</strong> 14665
                    </Card.Text>
                    <Card.Text>
                        <strong>α24 = αGaAs—InAs:</strong> 12570
                    </Card.Text>
                    <Card.Text>
                        <strong>α12 = αGaP—GaAs:</strong> 1676
                    </Card.Text>
                    <Card.Text>
                        <strong>α34 = αInP—InAs:</strong> 1676
                    </Card.Text>
                    <Dropdown.Divider />
                    <Card.Subtitle className="mb-2 font-italic">
                        Универсальная газовая постоянная
                    </Card.Subtitle>
                    <Card.Text>
                        <strong>R:</strong> 8.3144598 м2 кг с-2 К-1 Моль-1
                    </Card.Text>
                    <Dropdown.Divider />
                    <Card.Subtitle className="mb-2 font-italic">
                        Абсолютная температура эпитаксии
                    </Card.Subtitle>
                    <Card.Text>
                        <strong>Т:</strong> 1200°<strong>K</strong>
                    </Card.Text>
                    <Dropdown.Divider />
                    <Card.Subtitle className="mb-2 font-italic">
                        Концентрационные параметры
                    </Card.Subtitle>
                    <Card.Text>
                        <strong>X:</strong> 0.63
                        <strong>Y:</strong> 0.72
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="mb-3" />
            <Card className="m-auto " style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Выходные данных</Card.Title>
                    <Card.Subtitle className="mb-2 font-italic">Tемпература: <span style={{ color: 'red'}}>{temp}°<strong>K</strong></span></Card.Subtitle>
                    
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="температура"
                            aria-label="температура"
                            aria-describedby="temperature-addon1"
                            value={value}
                            onChange={handleTempChange}
                            type="number"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={() => handleTemp(value, true)}>Обновить</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                    <Button variant="outline-secondary" onClick={() => handleTemp(903, true)}>Перезапустить</Button>

                </Card.Body>
            </Card>
        </div>
    )
}
