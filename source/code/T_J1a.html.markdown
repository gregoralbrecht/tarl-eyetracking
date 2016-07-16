---
title: T_J1a
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 21
---
~~~
public void modifyGraph(Graph graphToModify) {
    for(Node neighbor:graphToModify.getSelf().getNeighbors()) {
        for(Node neighborNeighbor:neighbor.getNeighbors()) {
            for(Node neighborNeighborNeighbor:neighborNeighbor.getNeighbors()) {
                graphToModify.getSelf().addNeighbor(neighborNeighborNeighbor);
            }
            graphToModify.getSelf().addNeighbor(neighborNeighbor);
        }
    }
}
~~~

