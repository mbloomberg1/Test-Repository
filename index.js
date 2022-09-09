// Import the LaunchDarkly client.
import LaunchDarkly from 'launchdarkly-node-server-sdk';

// Create a an instance of the LaunchDarkly client with your environment-specific SDK key.
const ldClient = LaunchDarkly.init('sdk-935aa048-8313-4f01-8138-967d933625dc');

// Set up the user properties. This user should appear on your LaunchDarkly users dashboard
const user = {
  firstName: 'Bob',
  lastName: 'Loblaw',
  key: 'example-user-key',
};

// When the LaunchDarkly client is ready, call it with the feature flag key you want to evaluate.
ldClient.once('ready', function() {
  ldClient.variation('call-to-action-button', user, false, function(err, showFeature) {
    console.log("SDK successfully connected! The value of call-to-action-button is " + showFeature + " for " + user.key);

    // Close the LaunchDarkly SDK, after ensuring that analytics events have been delivered.

    // IMPORTANT: in a real application, you would only call close() when the application is
    // about to quit-- NOT after every call to variation(). The reason that this step is
    // inside the variation handler is that we want it to happen after the SDK has been
    // initialized and after the flag has been evaluated. Node.js will not allow the
    // application to exit as long as the SDK is still running.
    ldClient.flush(function() {
      ldClient.close();
    });
  });
});
