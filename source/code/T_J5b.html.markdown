---
title: T_J5b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
Edge highestWeightEdge = null;
Node wantedNeighbor = null;
for (Node neighbor: graph.getSelf().getNeighbors()) {
    for (Edge neighborEdge: neighbor.getEdges()) {
        if(neighborEdge.getNeighbor(neighbor) != graph.getSelf() 
                && (highestWeightEdge == null || neighborEdge.getWeight() > highestWeightEdge.getWeight())
                ) {
            if(graph.findEdge(graph.getSelf(), neighbor).getWeight() < 5) {
                highestWeightEdge = neighborEdge;
                wantedNeighbor = neighbor;
            }
        }
    }
}
graph.removeEdge(graph.findEdge(graph.getSelf(), wantedNeighbor));
~~~

