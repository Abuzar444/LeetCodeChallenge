var verticalTraversal = function (root) {
    let q = [{ node: root, col: 0 }];
    let map = new Map();
    let minCol = Number.MAX_SAFE_INTEGER;
    let maxCol = Number.MIN_SAFE_INTEGER;

    let row = 0;
    while (q.length != 0) {
        let n = q.length;

        for (let i = 0; i < n; i++) {
            let { node, col } = q.shift();
            minCol = Math.min(minCol, col);
            maxCol = Math.max(maxCol, col);

            if (map.has(col)) {
                map.get(col).push({ val: node.val, row: row });
            } else {
                map.set(col, [{ val: node.val, row: row }]);
            }

            if (node.left) q.push({ node: node.left, col: col - 1 });

            if (node.right) q.push({ node: node.right, col: col + 1 });
        }

        row++;
    }

    let result = [];
    for (let col = minCol; col <= maxCol; col++) {
        if (map.has(col)) result.push(map.get(col).sort((a, b) => {
            if (a.row != b.row) return a.row - b.row;
            if (a.row == b.row) return a.val - b.val;
        }).map(r => r.val));
    }

    return result;
};

