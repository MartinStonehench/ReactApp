import React from 'react';
import { ImageChanger } from './ImageChanger';
import { Dropdown } from './Dropdown';

export class App extends React.Component {
    render() {
        return (
            <>
                {/* <h1> Here will be printed the value from the dropdown menu  </h1> */}

                <ImageChanger />

                {/* <Dropdown /> */}
            </>
        );
    }
}