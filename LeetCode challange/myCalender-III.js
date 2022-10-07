function Node(start, end) {
    this.start = start;
    this.end = end;
	// coveredBy: [start, end) is covered by how many events
    this.coveredBy = 0;
	// max:  the maximum that the subset of [start, end)  is covered by how many events
    this.max = 0;
    this.left = null;
    this.right = null;
}
var MyCalendarThree = function() {
    this.root = new Node(0, Math.pow(10, 9));
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    this.add(this.root, start, end);
    return this.getMax();
};
MyCalendarThree.prototype.add = function(node, start, end) {
	// if node has no overlap with [start, end), then skip
    if (!node || node.start >= end || node.end <= start) return;
	// if node is covered by [start, end)
    if (start <= node.start && node.end <= end) {
        node.coveredBy++;
        node.max++;
        return;
    }
    var mid = node.start + Math.floor((node.end - node.start) / 2);
	// if [start, end) has overlap with left node: [node.start, mid)
    if (start < mid) {
        if (!node.left) {
            node.left = new Node(node.start, mid);
        }
        this.add(node.left, start, end);
    }
	// if [start, end) has overlap with right node: [mid, node.right)
    if (mid < end) {
        if (!node.right) {
            node.right = new Node(mid, node.end);
        }
        this.add(node.right, start, end);
    }
    node.max = node.coveredBy + Math.max(node.left && node.left.max || 0, node.right && node.right.max || 0);
};

MyCalendarThree.prototype.getMax = function() {
    return this.root.max;
};
