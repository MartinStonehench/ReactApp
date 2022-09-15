import React, { useState } from 'react';

export function Dropdown() {
    
    const [selects, setSelects] = useState();

    return (
        <>
            <h1> Value : {selects} </h1>

            <select value={selects} onChange={e => setSelects(e.target.value)}>
                <option> Apple iPhone </option>
                <option> Samsung Galaxy </option>
                <option> Nokia 3210 </option>
            </select>
        </>
    );
}