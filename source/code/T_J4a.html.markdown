---
title: T_J4a
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
for (Edge e0: graph.getSelf().getEdges()) {
    if(e0.getWeight() > 3) {
        Node n1 = e0.getNeighbor(graph.getSelf()); 
        for (Node n2: n1.getNeighbors()) {
            if (!n2.equals(graph.getSelf())) {
                graph.removeEdge(graph.findEdge(graph.getSelf(), n2));
            }
        }
    }
}
~~~

