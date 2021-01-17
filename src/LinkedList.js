export class Node {
	next = null;
	prev = null;
	value = null;
	styles = {
		mainBox: {
			boxShadow: "none",
		},
	};
	constructor(value) {
		this.value = value;
	}
}

export class LinkedList {
	first = null;
	last = null;
	constructor(node) {
		this.first = node;
		this.last = node;
	}

	findLast() {
		if (this.first) {
			if (this.first.next === null) {
				this.last = this.first
			} else {
				let tempNode = this.first;
				while (tempNode) {
					if (tempNode.next === null) {
						this.last = tempNode;
					}
					tempNode = tempNode.next;
				}
			}
		}
	}

	push(value) {
		const newItem = new Node(value);
		if (!this.first) {
			this.first = newItem;
			this.last = newItem;
			this.last.prev = null;
		} else {
			this.last.next = newItem;
			let previous = this.last;
			this.last = newItem;
			this.last.prev = previous;
		}
	}

	deleteNode(Node) {
		if (Node.next !== null) {
			Node.next.prev = Node.prev;
		} else if(Node.prev === null){
			this.last = null;
		}
		if (Node.prev !== null) {
			Node.prev.next = Node.next;
		} else{
			this.first = Node.next
		}
		Node = null
		this.findLast()
	}

	onClickNext = (Node) => {
		if (Node.next !== null) {
			let tempNodeValue = Node.next.value;
			Node.next.value = Node.value;
			Node.value = tempNodeValue;
		}
	};

	onClickPrev = (Node) => {
		if (Node.prev !== null) {
			let tempNodeValue = Node.prev.value;
			Node.prev.value = Node.value;
			Node.value = tempNodeValue;
		}
	};
}
