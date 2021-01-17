import React from "react";

class Box extends React.Component {
	render() {
		return (
			<div
				className="mainBox"
				style={this.props.Node.styles.mainBox}
				name="mainBox"
			>
				<div className="value-ref">
					<button className="showPrev" onClick={() => this.props.showPrevRef(this.props.Node)}>
						Prev
					</button>
					<button className="deleteButton" onClick={()=>this.props.deleteNode(this.props.Node)}>Delete</button>
					<div className="value">
						<label className="nodeValue" htmlFor="">
							NODE VALUE: <br />
							<span className="textValue">{this.props.Node.value}</span>
						</label>
					</div>
					<button  className="showNext" onClick={() => this.props.showNextRef(this.props.Node)}>
						Next
					</button>
				</div>

				<button
					className="prevButton"
					onClick={(e) => this.props.onClickPrev(this.props.Node)}
				>
					 {"<<"}
				</button>

				<button
					className="nextButton"
					onClick={(e) => this.props.onClickNext(this.props.Node)}
				>
					{">>"}
				</button>
			</div>
		);
	}
}

export default Box;
