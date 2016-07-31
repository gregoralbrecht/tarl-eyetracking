---
title: T_J5b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
Edge highestWeightE1 = null;
Node wantedN1 = null;
for (Node n1: graph.getSelf().getNeighbors()) {
    for (Edge e1: n1.getEdges()) {
        if(e1.getNeighbor(n1) != graph.getSelf() 
                && (highestWeightE1 == null || e1.getWeight() > highestWeightE1.getWeight())
                ) {
            if(graph.findEdge(graph.getSelf(), n1).getWeight() < 5) {
                highestWeightE1 = e1;
                wantedN1 = n1;
            }
        }
    }
}
graph.removeEdge(graph.findEdge(graph.getSelf(), wantedN1));
~~~

