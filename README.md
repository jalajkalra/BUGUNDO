# BUGUNDO
Bug Prioritization System
Abstract
A software bug is an error, flaw, failure, or fault in a computer program or system that causes it to
produce an incorrect or unexpected result or to behave in unintended ways. If bugs occur (which they
certainly do), the person finding the bug should be able to report (document & send) the bug to people
in charge of fixing that error or failure. There are a lot of different expressions used to describe and
name a bug reporting system. So here are just a few names:
• Bug Reporting System
• Issue Tracking Software
• Issue Management Software
Bugundo is a website for people which enables them to track bugs and glitches and prioritize them
in order to their severity and recommend which bugs should be taken away perilously.
“BUGUNDO” provides the user these services under one roof giving the user all the details about
the bugs present in his system, which bug is fatal and which one mild. In addition to this, it’ll
recommend how the bug removal should be prioritized taking severity into consideration.

SYSTEM REQUIREMENTS SOFTWARE
Ø Web Technologies:
o Front-End: React, Redux, Third Party Libraries
o Back-End: Node.js, Express, MongoDB, Body-Parser
Ø Machine Learning Library in Python3: “Numpy, Pandas, Scipy”
Ø Database- MongoDB
HARDWARE
Ø Processor i5 or above
Ø RAM at least 8GB
Ø GPU

ALGORITHMS
  Implementing K-means:
The K-means algorithm is a method to automatically cluster similar data examples together.
Concretely, you are given a training set {x (1), ..., x(m)} (where x (i) ∈ R n ), and want to
group the data into a few cohesive “clusters”. The intuition behind K-means is an iterative
procedure that starts by guessing the initial centroids, and then refines this guess by repeatedly
assigning examples to their closest centroids and then recomputing the centroids based on the
assignments.
The inner-loop of the algorithm repeatedly carries out two steps: (i) Assigning each training
example x (i) to its closest centroid, and (ii) Recomputing the mean of each centroid using the
points assigned to it. The K-means algorithm will always converge to some final set of means
for the centroids.
 Finding closest centroids:
In the “cluster assignment” phase of the K-means algorithm, the algorithm assigns every
training example x (i) to its closest centroid, given the current positions of centroids.
Specifically, for every example i we set c (i) := j that minimizes ||x (i) − µj ||2 , where c (i) is
the index of the centroid that is closest to x (i) , and µj is the position (value) of the j’th centroid.
 Computing centroid means:
Given assignments of every point to a centroid, the second phase of the algorithm recomputes,
for each centroid, the mean of the points that were assigned to it.
 DATASET
The dataset which we are using is named as “final dataset for work ecllipse.csv” [2]
which we got from Kaggle and contains details bug prioritization or assign, defect
analysis.
https://www.kaggle.com/monika11/bug-triagingbug-assignment



Conclusion:

Using BUGUNDO comes with multifarious benefits for the testers.

	Ensure Quality Assurance

A flawless product with no functional glitches is always expected from a software development company. With BUGUNDO, it’ll become much easier to release a product in the market without any functionality issues. BUGUNDO identifies issues in advance and ensures that the flaws are removed and bugs are fixed. The tracking system not only tracks the problems but also analyses which bugs are to be removed first to ensure the best and most efficient output.
	Identify Glitches in Advance and Understand Defect Trends

BUGUNDO helps testers identify the issues much earlier and take action on a priority basis. On the other hand, human tracking can hardly achieve this in a short time span. As a result, the chances of the software release with the functional glitches are almost nil when you are running it through a bug tracking tool.
With a streamlined bug fixing approach, the tool ensures that the entire development process becomes absolutely hassle-free and reduce the cost of development as well as time. A defect management system not only eliminates the additional pressure but also improves the overall efficiency of the team.
This work aims to develop and propose a recommender system based on learning to rank approach and deep learning techniques. Our main idea was to investigate the use of Data mining on Stack Overflow to automatically suggest relevant solutions that fix software bugs and programming errors. This system will decrease the time generally spent by developers during the manual efforts for fixing bugs or during the consultation of Q&A websites. For future work, we will try to test the approach of learning to rank using pair-wise or list-wise techniques. We will also try to improve our model performance using features that are more specific in the training phase. Other deep learning algorithms and techniques like CNN and LSTM will be also considered for future testing and comparison purposes. More parameters will be considered like OS time taken for resolution etc.




References:
[1] Harrag, F.; Khamliche, M. Mining Stack Overflow: a Recommender Systems-Based
Model. Preprints 2020, 2020080265 (doi: 10.20944/preprints202008.0265.v1).
[Online] Available: https://www.preprints.org/manuscript/202008.0265/v1
[2] Latest Bug Report dataset from Kaggle (2020). [Online] Available:
https://www.kaggle.com/monika11/bug-triagingbug-assignment
[3] Parameters in bug report [Online] Available:
http://www.softwaretestingstuff.com/2008/05/classification-of-defects-bugs.html




