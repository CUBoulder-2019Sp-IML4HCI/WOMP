# WOMP - What is on your hand?
--

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
An output would be an weight the person is lifting in the hand.

## ML models used:

1. Neural network:
We used a single layer 8 nodes neural network and it gave a 78%  4-fold validation.We used a 8 node to be intuitive with 8 pods of Myoband.


## Feature Engineering:
This was the most important step in our project.
1. Noise frequency jumps: 
We tried to select only every 5th recording so that we are sampling at a slower rate, and we thought we could avoid the noise. Although we avoided the noise, we were loosing valuable information that happpens in those 4 recordings. The model trained on this was surprisingly working if you held on to the object for a quiet long time, and also there was a fluctuation between min and max which we tried to improve in later approaches.

2. Min,Max,Avg over 8 pods:
We felt using the eight values from each pod was redudant and the pattern was not really captured by the neural network. So we decided into taking min,max,avg values to represent each pod, thereby reducing the overhead for neural network to learn the latent structure. But still we were facing the problem of noise, which kept switching between 0-1 in output layer.

3. Rolling average for noise freq and min,max and avg:
We decided to use min,max,avg features to represent each pod, but we decided to average these features over 5 iterations(approx: 1 sec). The noise was reduced as every action performmed from 0-5 iteration was captured and the features effectively changed the output.

## How to train:

We were not able to create an UI with trainable elements due to the time constraint. But we can train in wekinator using the following method:

## Learning portion:

- We learnt how to process stream input which streams at different frequency
- We also learnt data processing and handling noisy data
- We tried out various regression models and understood neural networks works best after feature engineering.

## Acknowledgement:
1. [myo-to-osc](https://github.com/cpmpercussion/myo-to-osc) : Used for sending myo signals to osc port
2. [web-to-osc] : () : Used to visualize the myo output

## Requirements:
1. node.js
2. numpy

## Youtube link : https://youtu.be/tDPDxOPUTf8

## Github link : https://github.com/CUBoulder-2019Sp-IML4HCI/WOMP