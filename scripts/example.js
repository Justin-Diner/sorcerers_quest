class Example {
	constructor(ele) {
		this.ele = ele
		this.ele.innerHTML = "<h1> It's Alive!</h1>"
		this.myHandleClick = this.handleClick.bind(this);
		this.ele.addEventListener("click", this.myHandleClick)
	}

	handleClick() {
		this.ele.children[0].innerText = "Ouch";
	}
}

export default Example;