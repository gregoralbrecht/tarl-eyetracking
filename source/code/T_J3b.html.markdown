---
title: T_J3b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
Edge highestWeightE1 = null;
Node wantedN2 = null;
for (Edge e0: graph1.getSelf().getEdges()) {
    if (highestWeightE1 == null 
            || e0.getWeight() > 
            highestWeightE1.getWeight()) {
        highestWeightE1 = e0;
        wantedN2 = e0.getNeighbor(graph1.getSelf());
    }
}
for (Node n3: graph2.getSelf().getNeighbors()) {
    graph1.addNode(n3);
    graph1.addEdge(n3, wantedN2);
}
~~~

