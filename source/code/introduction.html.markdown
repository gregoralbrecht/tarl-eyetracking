---
title: Introduction
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 6
---

**Before we begin, please read this short introduction on network topologies and topology adaptations carefully. It's vital that you understand what this experiment is about because we will present you with several tasks that we ask you to solve.**


**What are topology adaptations?**
A network topology is a schematic description of the arrangement of nodes and connecting links - also referred to as edges - that compose a network. Network applications often use at least two topology layers: the underlay and the overlay. While the underlay reflects physical connectivity between the devices, the overlay describes logical communication patterns. Many topology adaptations consider multiple topologies - think of it like multiple layers - for the decision and the execution of changes. As a result, one adaptation may affect one or more topologies of the same network. During this experiment the various topologies without a network will be numbered T1, T2, etc.

Because the overlay topology and its performance is immensely dependent on the underlying physical network, it’s important that the overlay topology is able to react to changes and adapt accordingly. Many networking applications implement such topology adaptations to cope with network dynamics, however, they are lacking a unified and general model to express and compare them. Recently, researchers of the Databases and Distributed Systems Group at TU Darmstadt developed a domain-specific language to specify topology adaptation logic more adequately. This experiment is an examination of this newly developed language.

**What is the purpose of this experiment?**
This experiment seeks to analyze the user friendliness of TARL - Topology Adaption Rule Language - and compares it to adaptation rules expressed in Java. You will be presented with an introduction to TARL and afterwards asked to solve several tasks regarding the syntax and application of TARL on network changes. Following this, you will be given a similar introduction to adaption logic in Java and similar tasks concerning network changes. The experiment will be concluded with a short survey about your experience.