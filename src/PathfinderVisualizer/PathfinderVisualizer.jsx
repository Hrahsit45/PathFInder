import React , {Component} from "react";

import Node from './Node/Node';

import './PathfinderVisualizer.css';

export default class PathfinderVisualizer extends Component {
constructor(props) {
    super(props);
    this.state = {};
}

componentDidMount() {
    const nodes = [];
    for(let row = 0 ; row < 20; row++)
    {
        const currentRow = [];
        for(let col = 0 ; col < 50; col++)
        {
            const currentNode = {
                col,
                row,
            };
            currentRow.push(currentNode);
        }
        nodes.push(currentRow);
    }
    this.state({nodes});
}
render() {
    return (
        <div>
            foo 
            <Node></Node>
         </div>
    )
}

}