# call-to-action-button

How to Set Up this Implementation:

1) Access the code and instructions at the following GitHub Repo URL: 

https://github.com/mbloomberg1/Test-Repository

2) In a new directory, create a package.json file to be used with the node.js (client) SDK:

**mkdir hello-node-server && cd hello-node-server && npm init**

3) Install the LaunchDarkly SDK:

**npm install launchdarkly-node-server-sdk@6.4.3 --save**

4) In the index.js file in this Test-Repository GitHib repo, replace the example user key in quotes. This user key will be recognized in LaunchDarkly.
var user = { key: "example-user-key" };

5) Replace the SDK key from line 12 of the index.js file with your own SDK key. See a copy of line 12 below.

**const ldClient = LaunchDarkly.init('sdk-935aa048-8313-4f01-8138-967d933xxxxx');**

6) Create a feature flag that has specifically has the name and key, "call-to-action-button."

7) Run the application using the output from the modified index.js file in this Test-Repository GitHib repo, including the updated user key and SDK key.
