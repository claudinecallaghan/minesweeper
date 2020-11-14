import React, { FC, useState } from "react";

import Button from "../Button"
import NumberDisplay from "../NumberDisplay";
import { generateCells } from "../utils";

import './App.scss'

const App: FC = () => {
    const [cells, setCells] = useState(generateCells());

    const renderCells = (): React.ReactNode => {
        return cells.map((row, rowIndex) => 
            row.map((cell, colIndex) => <Button key={`${rowIndex}-${colIndex}`} />)
        );
    };

    return (
        <div className="App">
            <div className="Header">
                <NumberDisplay value={0} />
                <div className="Face">
                    <span role="img" aria-label="smiley face emoji">😄</span>
                </div>
                <NumberDisplay value={99} />
            </div>
            <div className="Body">{renderCells()}</div>
        </div>
    );
};

export default App