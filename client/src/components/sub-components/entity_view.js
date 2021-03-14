import React, { Component } from 'react';
import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';

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

class entity_view extends Component {
    
    render() {
        return (
            <div>
                Entities
                <ForceGraph2D width="100px"
                    graphData={inputData}
                />
            </div>
        );
    }
}

export default entity_view;