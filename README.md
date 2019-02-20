

# WOMP - What is on your hand?

## Description:

The main ambition of this project is using emg signals to identify what weight you are carrying without a weight scale. This has an application of using it in smart watches in future where we can not only identify how much weight training you are working.

## Goals:

- Able to identify exact weight held in hand.
- User specific models to identify the strain in hands based on the weights.
- Able to understand what kind of an object is in hand

## Completed Goals:
- Regression on how much weight is in your hand.

## Input Data:
We are using myo emg data for this process. Myoband has 8 pods where each pod streams 8 electronic signals that depict the electronic version of muscle interaction and strain. Myo band streams at 200 hz. Our first step was to capture all these emg signals, when sending 64 signals to wekinator for training.

We were stuck in the data stage for a long time, trying to figure out how to capture the streaming data. We used a queueing approach which keeps accumulating emg signals until all the 8 are accumulated.

## Output Data:
An output would be an weight ranging from minimum weight a person could lift to maximum weight a person could lift.

## ML models used:

1. Neural network:

2. Logistic Regression:


## Feature Engineering:
This was the most important step in our project.
1. Noise frequency jumps:
2. Min,Max,Avg over 8 pods:
3. Rolling average for noise freq and min,max and avg:

## Learning portion:


## Acknowledgement:
1. [myo-to-osc](https://github.com/cpmpercussion/myo-to-osc) : Used for sending myo signals to osc port
2. [web-to-osc] : #todo
