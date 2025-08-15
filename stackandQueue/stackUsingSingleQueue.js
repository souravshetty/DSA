var MyStack = function () {
	this.q1 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
	this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
	let n = this.q1.length;
	for (let i = 0; i < n - 1; i++) {
		let frontEle = this.q1.shift();
		this.q1.push(frontEle);
	}
	let ans = this.q1.shift();
	//shift to dlete element in queue
	// exchange q1 and q2

	return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
	let n = this.q1.length;
	for (let i = 0; i < n - 1; i++) {
		this.q1.push(this.q1.shift());
	}
	let front = this.q1[0];
	this.q1.push(this.q1.shift());

	return front;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
	return this.q1.length == 0;
};
