import React, { Component } from 'react';
import { ForceGraph2D } from 'react-force-graph';

const inputData = {
    "nodes": [
        {
            "id": "id1",
            "name": "name1",
            "val": 1
        },
        {
            "id": "id2",
            "name": "name2",
            "val": 10
        }
    ],
    "links": [
        {
            "source": "id1",
            "target": "id2"
        }
    ]
}

class addresses_view extends Component {

    render() {
        return (
            <div>
                Addresses
                <ForceGraph2D 
                    graphData={inputData}
                />
            </div>
        );
    }
}

export default addresses_view;