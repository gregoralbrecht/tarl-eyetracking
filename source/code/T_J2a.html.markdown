---
title: T_J2a
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
public void modifyGraph(Graph graphToModify) {
    Node highestWeightNeighbor = null;
    for(Node neighbor:graphToModify.getSelf().getNeighbors()) {
        if(neighbor.getNeighbors().length > 0) {
            if(graphToModify.getSelf().getEdgeWeight(neighbor) > graphToModify.getSelf().getEdgeWeight(highestWeightNeighbor)) {
                highestWeightNeighbor = neighbor;
            }
        }
    }
    graphToModify.getSelf().removeNeighbor(highestWeightNeighbor);
}
~~~

