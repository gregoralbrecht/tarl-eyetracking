---
title: T_J2a
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
public void modifyGraph(Graph graphToModify) {
    Node lowestWeightNeighbor = null;
    for(Node neighbor:graphToModify.getSelf().getNeighbors()) {
        for(Node neighborNeighbor:neighbor.getNeighbors()) {
            if(neighbor.getEdgeWeight(neighborNeighbor) < 
        }
        TODO: finish task

        if(neighbor.getNeighbors().length > 0) {
            if(graphToModify.getSelf().getEdgeWeight(neighbor) > graphToModify.getSelf().getEdgeWeight(highestWeightNeighbor)) {
                highestWeightNeighbor = neighbor;
            }
        }
    }
    graphToModify.getSelf().removeNeighbor(highestWeightNeighbor);
}
~~~

