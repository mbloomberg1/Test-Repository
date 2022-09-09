// Import the LaunchDarkly client.
import LaunchDarkly from 'launchdarkly-node-server-sdk';

// Set up the user properties.
const user = {
  firstName: 'First',
  lastName: 'Last',
  key: 'example-user-key',
};

// Create a an instance of the LaunchDarkly client with your environment-specific SDK key.
const ldClient = LaunchDarkly.init('sdk-935aa048-8313-4f01-8138-967d933625dc');

// When the LaunchDarkly client is ready, call it with the feature flag key you want to evaluate.
ldClient.once('ready', function() {
  ldClient.variation('call-to-action-button', user, false, function(err, showFeature) {
    console.log("SDK successfully connected! The value of call-to-action-button is " + showFeature + " for " + user.key);

// Close the LaunchDarkly SDK, after ensuring that analytics events have been delivered.
    ldClient.flush(function() {
      ldClient.close();
    });
  });
});
