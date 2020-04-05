import Markdown from '../../components/Markdown';
import ReactMde from "react-mde";
import React from 'react';
import Box from '@material-ui/core/Box';

export default function MDBox(props) {
    const [value, setValue] = React.useState(props.value);
    const [selectedTab, setSelectedTab] = React.useState("write");
    const timeoutRef = React.useRef(null);


    React.useEffect(() => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            timeoutRef.current = null;
            props.mdb(value)
        }, 1000);
    }, [value]);

    return (
        <Box my={1} width={1}>
        <ReactMde
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={md =>
                Promise.resolve(<Markdown children={md} />)
            }
            value={value}
            onChange={setValue}
        /></Box>);
}