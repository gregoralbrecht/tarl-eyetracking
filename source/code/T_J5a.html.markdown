---
title: T_J5a
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
Edge lowestWeightE0 = null;
Node wantedN2 = null;
for (Node n1: graph.getSelf().getNeighbors()) {
    for (Edge e1: n1.getEdges()) {
        Node n2 = e1.getNeighbor(n1);
        if(!n2.equals(graph.getSelf()) && (lowestWeightE0 == null ||
        e1.getWeight() <  lowestWeightE0.getWeight())) {
            if(graph.findEdge(graph.getSelf(), n2).getWeight() < 8) {
                lowestWeightE0 = e1;
                wantedN2 = n2;
            }
        }
    }
}
graph.removeEdge(graph.findEdge(graph.getSelf(), wantedN2));
~~~
