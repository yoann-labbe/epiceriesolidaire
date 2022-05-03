import React, { useState } from 'react';
import UpButton from '../UpButton/UpButton';
import Header from './Header';


export default function NavBarre(props) {
    const { children } = props;
    const [log, setLog] = useState("")
    if (props.connect) {
        return (
            <div>
                {console.log(props.connect)}
                <Header under={setLog} />
                {children}
                <UpButton showBelow={250} />

            </div>
        );
    } else {
        return (
            <div>

                <Header />
                {children}
                <UpButton showBelow={250} />
            </div>
        );
    }


}

