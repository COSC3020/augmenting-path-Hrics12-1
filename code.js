function augmentingPath(graph, start, end) {
    let queue = [start];
    let visited = new Set();
    let path = new Map();
    
    while (queue.length > 0) {
        let node = queue.shift();
        visited.add(node);
    
        if (node === end) {
            let result = [end];
            while (node !== start) {
                node = path.get(node);
                result.unshift(node);
            }
            return result;
        }
        for (let neighbor in graph[node]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                path.set(neighbor, node);
            }
        }
    }
    return [];
}
