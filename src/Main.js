import { LinkedList } from "./LinkedList";
import React from "react";
import Box from "./box";
import "./main.css";

class Main extends React.Component {
	constructor() {
		super();
		this.linkedList = new LinkedList();
		this.state = {
			childrens: [],
			inputValue: "",
			showForm: false,
		};
		this.count = 0;
	}

	showNextRef = (Node) => {
		if (Node.next) {
			Node.next.styles.mainBox = {
				boxShadow: "1px 1px 10px 7px rgba(30, 231, 120, 0.5)",
			};
			this.printNodes();
			setTimeout(() => {
				Node.next.styles.mainBox = {
					boxShadow: "none",
				};
				this.printNodes();
			}, 250);
		}
	};
	showPrevRef = (Node) => {
		console.log("llega aqui");
		if (Node.prev) {
			Node.prev.styles.mainBox = {
				boxShadow: "1px 1px 10px 7px rgba(231, 60, 30, 0.7)",
			};
			this.printNodes();
			setTimeout(() => {
				Node.prev.styles.mainBox = {
					boxShadow: "none",
				};
				this.printNodes();
			}, 250);
		}
	};

	onClickNext = (Node) => {
		this.linkedList.onClickNext(Node);
		this.printNodes();
	};

	onClickPrev = (Node) => {
		this.linkedList.onClickPrev(Node);
		this.printNodes();
	};

	deleteNode = (Node) => {
		console.log("viene hasta aqui");
		this.linkedList.deleteNode(Node);
		this.printNodes();
	};

	printNodes = () => {
		let Node = this.linkedList.first;
		let arrayNodes = [];
		while (Node) {
			arrayNodes.push(
				<Box
					Node={Node}
					key={this.count}
					onClickNext={this.onClickNext}
					onClickPrev={this.onClickPrev}
					showNextRef={this.showNextRef}
					showPrevRef={this.showPrevRef}
					deleteNode={this.deleteNode}
				/>
			);
			this.count++;
			Node = Node.next;
		}
		this.setState({ childrens: arrayNodes });
	};

	addaNode = (e) => {
		if (!this.state.showForm) {
			this.setState({ showForm: true });
		} else {
			this.linkedList.push(this.state.inputValue);
			this.printNodes();
			this.setState({ inputValue: "", showForm: false });
		}
	};

	onChangeInput = (e) => {
		this.setState({ inputValue: e.target.value });
	};

	render() {
		return (
			<div className="main-container">
				<div className="title">
					<h1>LinkedList</h1>
				</div>
				<div className="boxes-added">{this.state.childrens}</div>
				<div className="add-value">
					{this.state.showForm && (
						<input
							className="input-add-node"
							type="text"
							name="newValue"
							onChange={this.onChangeInput}
							autoComplete="off"
							placeholder="Valor"
						/>
					)}
					<button className="button-add" onClick={this.addaNode}>
						Añadir
					</button>
					<br />
					<button
						className="button-show"
						onClick={() => console.log(this.linkedList)}
					>
						Mostrar lista
					</button>
				</div>
			</div>
		);
	}
}

export default Main;
