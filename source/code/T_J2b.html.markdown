---
title: T_J2b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 16
---
~~~
Edge highestWeightE0 = null; 
for (Edge e0: graph.getSelf().getEdges()) {
    if((highestWeightE0 == null 
            || e0.getWeight() > highestWeightE0.getWeight()) 
            && e0.getNeighbor(graph.getSelf()).getEdgeCount() > 1) {
        highestWeightE0 = e0;
    }
}
graph.removeEdge(highestWeightE0);
~~~

