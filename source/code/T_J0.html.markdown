---
title: T_J0
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
for (Node neighbor: graph.getSelf().getNeighbors()) {
    for (Node otherNeighbor: graph.getSelf().getNeighbors()) {
        if(!neighbor.equals(otherNeighbor)) {
            graph.addEdge(neighbor, otherNeighbor);
        }
    }
}
~~~

