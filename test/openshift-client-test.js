'use strict';

const test = require('tape');
const proxyquire = require('proxyquire');

test('openshift client tests', (t) => {
  // Need to stub the config loader for these tests
  const stubbedConfigLoader = (client) => {
    return Promise.resolve(client);
  };

  const openshiftRestClient = proxyquire('../lib/openshift-rest-client', {
    './config-loader': stubbedConfigLoader
  });

  const osClient = openshiftRestClient();
  t.equal(osClient instanceof Promise, true, 'should return a Promise');

  osClient.then((client) => {
    t.ok(client.projects, 'client object should have a projects object');
    t.ok(client.buildconfigs, 'client object should have a buildconfigs object');
    t.ok(client.services, 'client object should have a services object');
    t.ok(client.deploymentconfigs, 'client object should have a deploymentconfigs object');
    t.ok(client.routes, 'client object should have a routes object');
    t.end();
  });
});
