---
title: T_J1a
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
for (Node neighbor: graph.getSelf().getNeighbors()) {
    for (Node neighborNeighbor: neighbor.getNeighbors()) {
        if(!neighborNeighbor.equals(graph.getSelf())) {
            graph.addEdge(graph.getSelf(), neighborNeighbor);
            for(Node otherNeighbor: graph.getSelf().getNeighbors()) { 
                graph.addEdge(otherNeighbor, neighborNeighbor);
            }
        }
    }
}
~~~

