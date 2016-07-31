---
title: T_J4b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
for (Node n1: graph.getSelf().getNeighbors()) {
    for (Edge e1: n1.getEdges()) {
        if(e1.getWeight() < 8 && e1.getNeighbor(n1) != graph.getSelf()) {
            graph.removeEdge(graph.findEdge(graph.getSelf(), n1));
        }
    }
}
~~~

