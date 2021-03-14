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

class officers_view extends Component {

    getOfficers = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:5000/v1/officer", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div>
                Officers
                <ForceGraph2D width="100px"
                    graphData={inputData}
                />
            </div>
        );
    }
}

export default officers_view;