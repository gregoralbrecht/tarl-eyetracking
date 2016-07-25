---
title: T_J2b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 16
---
~~~
Edge highestWeightEdge = null; 
for (Edge adjacentEdge: graph.getSelf().getEdges()) {
    if((highestWeightEdge == null 
            || adjacentEdge.getWeight() > highestWeightEdge.getWeight()) 
            && adjacentEdge.getNeighbor(graph.getSelf()).getEdgeCount() > 1) {
        highestWeightEdge = adjacentEdge;
    }
}
graph.removeEdge(highestWeightEdge);
~~~

