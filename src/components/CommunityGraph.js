import { Graph } from 'react-d3-graph';



function CommunityGraph() {
    // graph payload (with minimalist structure)
    const data = {
        nodes: [
            { id: '0 x 4500 = 4500' },
            { id: '0 x 1 = 1' },
            { id: '4 x 0 = 4' },
            { id: '10 x 0 = 10' },
            { id: '0 x 64 = 64' },
            { id: '0 x 6 = 6' },
            { id: '15 x 0 = 15' },
            { id: '0 x 160 = 160' },
            { id: '700 x 0 = 700' }
        ],
        links: [
            { source: '0 x 4500 = 4500', target: '0 x 1 = 1' },
            { source: '0 x 4500 = 4500', target: '4 x 0 = 4' },
            { source: '0 x 4500 = 4500', target: '10 x 0 = 10' },
            { source: '0 x 4500 = 4500', target: '0 x 64 = 64' },
            { source: '0 x 4500 = 4500', target: '0 x 6 = 6' },
            { source: '0 x 4500 = 4500', target: '15 x 0 = 15' },
            { source: '0 x 4500 = 4500', target: '700 x 0 = 700' },
            { source: '0 x 4500 = 4500', target: '0 x 160 = 160' },
            { source: '0 x 1 = 1', target: '0 x 4500 = 4500' },
            { source: '0 x 1 = 1', target: '4 x 0 = 4' },
            { source: '0 x 1 = 1', target: '10 x 0 = 10' },
            { source: '0 x 1 = 1', target: '0 x 64 = 64' },
            { source: '0 x 1 = 1', target: '0 x 6 = 6' },
            { source: '0 x 1 = 1', target: '15 x 0 = 15' },
            { source: '0 x 1 = 1', target: '700 x 0 = 700' },
            { source: '0 x 1 = 1', target: '0 x 160 = 160' },

            { source: '4 x 0 = 4', target: '0 x 4500 = 4500' },

            { source: '4 x 0 = 4', target: '0 x 1 = 1' },
            { source: '4 x 0 = 4', target: '10 x 0 = 10' },
            { source: '4 x 0 = 4', target: '0 x 64 = 64' },
            { source: '4 x 0 = 4', target: '0 x 6 = 6' },
            { source: '4 x 0 = 4', target: '15 x 0 = 15' },
            { source: '4 x 0 = 4', target: '700 x 0 = 700' },
            { source: '4 x 0 = 4', target: '0 x 160 = 160' },
            { source: '10 x 0 = 10', target: '0 x 4500 = 4500' },
            { source: '10 x 0 = 10', target: '0 x 1 = 1' },
            { source: '10 x 0 = 10', target: '4 x 0 = 4' },
            { source: '10 x 0 = 10', target: '0 x 64 = 64' },
            { source: '10 x 0 = 10', target: '0 x 6 = 6' },
            { source: '10 x 0 = 10', target: '15 x 0 = 15' },
            { source: '10 x 0 = 10', target: '700 x 0 = 700' },
            { source: '10 x 0 = 10', target: '0 x 160 = 160' },

            { source: '0 x 64 = 64', target: '0 x 4500 = 4500' },
            { source: '0 x 64 = 64', target: '0 x 1 = 1' },
            { source: '0 x 64 = 64', target: '4 x 0 = 4' },
            { source: '0 x 64 = 64', target: '10 x 0 = 10' },
            { source: '0 x 64 = 64', target: '0 x 6 = 6' },
            { source: '0 x 64 = 64', target: '15 x 0 = 15' },
            { source: '0 x 64 = 64', target: '700 x 0 = 700' },
            { source: '0 x 64 = 64', target: '0 x 160 = 160' },


            { source: '0 x 6 = 6', target: '0 x 4500 = 4500' },
            { source: '0 x 6 = 6', target: '0 x 1 = 1' },
            { source: '0 x 6 = 6', target: '4 x 0 = 4' },
            { source: '0 x 6 = 6', target: '10 x 0 = 10' },
            { source: '0 x 6 = 6', target: '0 x 64 = 64' },
            { source: '0 x 6 = 6', target: '15 x 0 = 15' },
            { source: '0 x 6 = 6', target: '700 x 0 = 700' },
            { source: '0 x 6 = 6', target: '0 x 160 = 160' },


            { source: '15 x 0 = 15', target: '0 x 4500 = 4500' },
            { source: '15 x 0 = 15', target: '0 x 1 = 1' },
            { source: '15 x 0 = 15', target: '4 x 0 = 4' },
            { source: '15 x 0 = 15', target: '10 x 0 = 10' },
            { source: '15 x 0 = 15', target: '0 x 64 = 64' },
            { source: '15 x 0 = 15', target: '0 x 6 = 6' },
            { source: '15 x 0 = 15', target: '700 x 0 = 700' },
            { source: '15 x 0 = 15', target: '0 x 160 = 160' },

            { source: '700 x 0 = 700', target: '0 x 4500 = 4500' },
            { source: '700 x 0 = 700', target: '0 x 1 = 1' },
            { source: '700 x 0 = 700', target: '4 x 0 = 4' },
            { source: '700 x 0 = 700', target: '10 x 0 = 10' },
            { source: '700 x 0 = 700', target: '0 x 64 = 64' },
            { source: '700 x 0 = 700', target: '0 x 6 = 6' },
            { source: '700 x 0 = 700', target: '15 x 0 = 15' },
            { source: '700 x 0 = 700', target: '0 x 160 = 160' }
        ]
    };


    // the graph configuration, you only need to pass down properties
    // that you want to override, otherwise default ones will be used
    const myConfig = {
        "automaticRearrangeAfterDropNode": false,
        "collapsible": false,
        "directed": false,
        "focusAnimationDuration": 0.75,
        "focusZoom": 1,
        "freezeAllDragEvents": false,
        "height": 400,
        "highlightDegree": 1,
        "highlightOpacity": 1,
        "linkHighlightBehavior": false,
        "maxZoom": 8,
        "minZoom": 0.1,
        "nodeHighlightBehavior": false,
        "panAndZoom": false,
        "staticGraph": false,
        "staticGraphWithDragAndDrop": false,
        "width": 800,
        "d3": {
            "alphaTarget": 0.05,
            "gravity": -100,
            "linkLength": 100,
            "linkStrength": 1,
            "disableLinkForce": false
        },
        "node": {
            "color": "blue",
            "fontColor": "black",
            "fontSize": 8,
            "fontWeight": "normal",
            "highlightColor": "SAME",
            "highlightFontSize": 8,
            "highlightFontWeight": "normal",
            "highlightStrokeColor": "SAME",
            "highlightStrokeWidth": "SAME",
            "labelProperty": "id",
            "mouseCursor": "pointer",
            "opacity": 1,
            "renderLabel": true,
            "size": 200,
            "strokeColor": "none",
            "strokeWidth": 1.5,
            "svg": "",
            "symbolType": "circle"
        },
        "link": {
            "color": "#d3d3d3",
            "fontColor": "black",
            "fontSize": 8,
            "fontWeight": "normal",
            "highlightColor": "SAME",
            "highlightFontSize": 8,
            "highlightFontWeight": "normal",
            "labelProperty": "label",
            "mouseCursor": "pointer",
            "opacity": 1,
            "renderLabel": false,
            "semanticStrokeWidth": false,
            "strokeWidth": 1.5,
            "markerHeight": 6,
            "markerWidth": 6,
            "strokeDasharray": 0,
            "strokeDashoffset": 0,
            "strokeLinecap": "butt"
        }
    }

    // // Callback to handle click on the graph.
    // // @param {Object} event click dom event
    // const onClickGraph = function (event) {
    //     window.alert('Clicked the graph background');
    // };

    // const onClickNode = function (nodeId, node) {
    //     window.alert('Clicked node ${nodeId} in position (${node.x}, ${node.y})');
    // };

    // const onDoubleClickNode = function (nodeId, node) {
    //     window.alert('Double clicked node ${nodeId} in position (${node.x}, ${node.y})');
    // };

    // const onRightClickNode = function (event, nodeId, node) {
    //     window.alert('Right clicked node ${nodeId} in position (${node.x}, ${node.y})');
    // };


    // const onClickLink = function (source, target) {
    //     window.alert(`Clicked link between ${source} and ${target}`);
    // };

    // const onRightClickLink = function (event, source, target) {
    //     window.alert('Right clicked link between ${source} and ${target}');
    // };

    // const onNodePositionChange = function (nodeId, x, y) {
    //     window.alert(`Node ${nodeId} moved to new position x= ${x} y= ${y}`);
    // };

    // // Callback that's called whenever the graph is zoomed in/out
    // // @param {number} previousZoom the previous graph zoom
    // // @param {number} newZoom the new graph zoom
    // const onZoomChange = function (previousZoom, newZoom) {
    //     window.alert(`Graph is now zoomed at ${newZoom} from ${previousZoom}`);
    // };


    return (
        <Graph
            id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
            data={data}
            config={myConfig}
        // onClickGraph={onClickGraph}
        // onClickNode={onClickNode}
        // onDoubleClickNode={onDoubleClickNode}
        // onRightClickNode={onRightClickNode}
        // onClickLink={onClickLink}
        // onRightClickLink={onRightClickLink}
        // onNodePositionChange={onNodePositionChange}
        // onZoomChange={onZoomChange}
        />
    );
};

export default CommunityGraph;