import { Button, Group, IconButton, InfoSignIcon, majorScale, Pane, SegmentedControl } from 'evergreen-ui';
import React from 'react';

export const TabBar = () => {
    const [options] = React.useState([
        { label: 'Info', value: 'info' },
        { label: 'Ships', value: 'ships' },
        { label: 'Crew', value: 'crew' },
        { label: 'Media', value: 'media' },
    ]);

    const [value, setValue] = React.useState<any>('info');

    return (
        <Pane position="fixed" bottom="0" width="100%" background="gray50">
            <SegmentedControl
                width={240} options={options} value={value} onChange={(value) => setValue(value)} minWidth="100%"
            />
        </Pane>
    );

};

{/*
<Group minWidth="100%" onSelect={selected}>
    <IconButton icon={InfoSignIcon}/>
    <IconButton icon={InfoSignIcon}/>
    <IconButton icon={InfoSignIcon}/>
</Group>
*/}