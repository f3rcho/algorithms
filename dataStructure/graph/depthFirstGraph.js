class Graph {
  constructor() {
    this.adjancencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjancencyList[v1].push(v2);
    this.adjancencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjancencyList[vertex1] = this.adjancencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjancencyList[vertex2] = this.adjancencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjancencyList[vertex].length) {
      const adjancentVertex = this.adjancencyList[vertex].pop();
      this.removeEdge(vertex, adjancentVertex);
    }
    delete this.adjancencyList[vertex];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjancencyList = this.adjancencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjancencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
