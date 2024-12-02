# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.


The augmentingPath function has a worse case of $\Theta( V + E )$ because the function might have to visit every node and every edge in the graph. If there are a lot of nodes or edges this could take a while. $V$ is the number of nodes and $E$ is the number of edges. So if the graph is big and has a lot of nodes and edges the function could take longer to run. The function needs to keep track of which nodes it has visited and the path it has taken too so if there are a lot of nodes it will need more memory to store the paths. 
Source:
https://stackoverflow.com/questions/58662066/cannot-get-all-routes-from-a-to-e-in-a-directed-graph
https://github.com/COSC3020/augmenting-path-Hrics12



"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
