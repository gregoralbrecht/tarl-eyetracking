---
title: T_J3a
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
Edge lowestWeightE0 = null;
Node wantedN1 = null;
for (Edge e0: graph1.getSelf().getEdges()) {
    if (lowestWeightE0 == null 
            || e0.getWeight() < 
            lowestWeightE0.getWeight()) {
        lowestWeightE0 = e0;
        wantedN1 = e0.getNeighbor(graph1.getSelf());
    }
}
for (Node n2: graph2.getSelf().getNeighbors()) {
    graph1.addNode(n2);
    graph1.addEdge(n2, wantedN1);
}
~~~

