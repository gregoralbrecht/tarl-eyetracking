---
title: T_J2a
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
Edge lowestWeightE1 = null;
Node wantedN1 = null;
for (Node n1: graph.getSelf().getNeighbors()) {
    for (Edge e1: n1.getEdges()) {
        if (!e1.getNeighbor(n1).equals(graph.getSelf())) {
            if (lowestWeightE1 == null 
                    || e1.getWeight() < lowestWeightE1.getWeight()) {
                lowestWeightE1 = e1;
                wantedN1 = n1;
            }
        }
    }
}
graph.removeEdge(graph.findEdge(graph.getSelf(), wantedN1));
~~~

