---
title: T_J4b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
for (Node neighbor: graph.getSelf().getNeighbors()) {
    for (Edge neighborEdge: neighbor.getEdges()) {
        if(neighborEdge.getWeight() < 8 && neighborEdge.getNeighbor(neighbor) != graph.getSelf()) {
            graph.removeEdge(graph.findEdge(graph.getSelf(), neighbor));
        }
    }
}
~~~

