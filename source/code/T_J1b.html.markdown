---
title: T_J1b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 14
---
~~~
public void modifyGraph(Graph graphToModify) {
    for(Node neighbor:graphToModify.getSelf().getNeighbors()) {
        for(Node neighborNeighbor:neighbor.getNeighbors()) {
            if(neighborNeighbor != graphToModify.getSelf()) {
                if(!neighbor.isConnected(neighborNeighbor)) {
                    neighbor.addNeighbor(neighborNeighbor);
                }
                graphToModify.getSelf().addNeighbor(neighborNeighbor);
            }
        }
    }
}
~~~

