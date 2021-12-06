import React from "react";

import "../pages/css/barchart.css";

function BarGroup(props) {
  let barPadding = 2;
  let barColour = "#348AA7";
  let widthScale = (d) => d * 2;

  let width = widthScale(props.d.value);
  let yMid = props.barHeight * 0.5;

  return (
    <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
        {props.d.name}
      </text>
      <rect
        y={barPadding * 0.5}
        width={width}
        height={props.barHeight - barPadding}
        fill={barColour}
      />
      <text
        className="value-label"
        x={width - 8}
        y={yMid}
        alignmentBaseline="middle"
      >
        {props.d.value}
      </text>
    </g>
  );
}

class BarChart extends React.Component {
  //state not used.
  state = {
    data: [
      { name: "\u{1F922}", value: this.props.barf },
      { name: " \u{1F612}", value: this.props.meh },
      { name: "\u{1f525}", value: this.props.fire },
    ],
  };

  render() {
    let chartData = [
      { name: "\u{1F922}", value: this.props.barf },
      { name: " \u{1F612}", value: this.props.meh },
      { name: "\u{1f525}", value: this.props.fire },
    ];

    let barHeight = 30;
    // let barGroups = this.state.data.map((d, i) => (
    //   <g transform={`translate(0, ${i * barHeight})`}>
    //     <BarGroup d={d} barHeight={barHeight} />
    //   </g>
    // ));

    let barGroups = chartData.map((d, i) => (
      <g transform={`translate(0, ${i * barHeight})`}>
        <BarGroup d={d} barHeight={barHeight} />
      </g>
    ));

    return (
      <svg width="800" height="150">
        <g className="container">
          {/* <text className="title" x="10" y="30">
            Week beginning 9th July
          </text> */}
          <g className="chart" transform="translate(100,60)">
            {barGroups}
          </g>
        </g>
        {/* {console.log(this.props.barf)} */}
      </svg>
    );
  }
}

export default BarChart;
