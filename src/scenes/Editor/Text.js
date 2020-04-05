import React from 'react';
import MDBox from './MDBox';


export default function Text(props) {
    const text = props.text;
    const handleChange = (value, textId) => {
        props.TextAction({ value, textId })
      };

    return (
        <React.Fragment>
            <MDBox value={text} mdb={(value) => handleChange(value, props.id)} />

        </React.Fragment>
    );
}