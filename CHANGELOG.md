# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.4.0"></a>
# [1.4.0](https://github.com/bucharest-gold/openshift-rest-client/compare/v1.3.0...v1.4.0) (2018-06-05)


### Bug Fixes

* travis-ci should use npm install instead of npm ci ([#74](https://github.com/bucharest-gold/openshift-rest-client/issues/74)) ([5d7b59b](https://github.com/bucharest-gold/openshift-rest-client/commit/5d7b59b))


### Features

* **ingress:** Expose the Ingress api. ([#77](https://github.com/bucharest-gold/openshift-rest-client/issues/77)) ([c80b457](https://github.com/bucharest-gold/openshift-rest-client/commit/c80b457)), closes [#73](https://github.com/bucharest-gold/openshift-rest-client/issues/73)



<a name="1.3.0"></a>
# [1.3.0](https://github.com/bucharest-gold/openshift-rest-client/compare/v1.2.0...v1.3.0) (2018-05-24)


### Features

* add v1beta1 api endpoints ([#70](https://github.com/bucharest-gold/openshift-rest-client/issues/70)) ([cb8da7a](https://github.com/bucharest-gold/openshift-rest-client/commit/cb8da7a))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/bucharest-gold/openshift-rest-client/compare/v1.1.2...v1.2.0) (2018-05-22)


### Bug Fixes

* **tests:** missing PVC test ([f10cdc8](https://github.com/bucharest-gold/openshift-rest-client/commit/f10cdc8))


### Features

* **events:** events findAll/find & tests ([14577a2](https://github.com/bucharest-gold/openshift-rest-client/commit/14577a2))
* **PVC:** add persistent volume claims methods and tests ([306d2b5](https://github.com/bucharest-gold/openshift-rest-client/commit/306d2b5))



<a name="1.1.2"></a>
## [1.1.2](https://github.com/bucharest-gold/openshift-rest-client/compare/v1.1.1...v1.1.2) (2018-05-21)



<a name="1.1.1"></a>
## [1.1.1](https://github.com/bucharest-gold/openshift-rest-client/compare/v1.1.0...v1.1.1) (2018-05-14)


### Bug Fixes

* **package:** update dependecies to fix sshpk security issue, https://nodesecurity.io/advisories/606 ([#65](https://github.com/bucharest-gold/openshift-rest-client/issues/65)) ([5cde946](https://github.com/bucharest-gold/openshift-rest-client/commit/5cde946)), closes [#64](https://github.com/bucharest-gold/openshift-rest-client/issues/64)



<a name="1.1.0"></a>
# [1.1.0](https://github.com/bucharest-gold/openshift-rest-client/compare/v1.0.1...v1.1.0) (2018-03-20)


### Features

* **build-configs:** Adding instantiate method to buildconfigs ([#60](https://github.com/bucharest-gold/openshift-rest-client/issues/60)) ([7c86990](https://github.com/bucharest-gold/openshift-rest-client/commit/7c86990))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/bucharest-gold/openshift-rest-client/compare/v1.0.0...v1.0.1) (2018-02-19)


### Bug Fixes

* **package:** add hoek directly as a dependecy to fix the security issue - https://nodesecurity.io/advisories/566 ([#57](https://github.com/bucharest-gold/openshift-rest-client/issues/57)) ([c81fdb5](https://github.com/bucharest-gold/openshift-rest-client/commit/c81fdb5)), closes [#56](https://github.com/bucharest-gold/openshift-rest-client/issues/56)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/bucharest-gold/openshift-rest-client/compare/v0.11.0...v1.0.0) (2018-02-12)


### Features

* include the openshift-config-lodaer. ([2e21e0e](https://github.com/bucharest-gold/openshift-rest-client/commit/2e21e0e)), closes [#54](https://github.com/bucharest-gold/openshift-rest-client/issues/54)


### BREAKING CHANGES

* It is no longer necessary to include the openshift-config-loader separate.  By default, just calling the rest client will do the default config loading.
If a user needs to pass a config into the client, use the settings object.  ex:  settings.config = {...}
