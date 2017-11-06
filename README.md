## Gh-polls-bot-test

> Travis cron jobs for [gh-polls-bot](https://github.com/evenchange4/gh-polls-bot).


[![Travis][travis-badge]][travis]
[![Dependency Status][dependency-badge]][dependency]
[![devDependency Status][devDependency-badge]][devDependency]
[![peerDependency Status][peerDependency-badge]][peerDependency]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper]
[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

- Test repo: https://github.com/evenchange5/gh-polls-bot-test/issues
- Test status: https://travis-ci.org/evenchange4/gh-polls-bot-test/builds

## Developer Guide

### Environments

- Create a `.env` file from `.env.example`.

### Requirements

-   node >= 9.0.0
-   yarn >= 1.3.2

```
$ git clone https://github.com/evenchange4/gh-polls-bot
$ yarn install --pure-lockfile
```

### Test

```
$ yarn run format
$ yarn run eslint
$ yarn run test:watch
```

## CONTRIBUTING

*   ⇄ Pull requests and ★ Stars are always welcome.
*   For bugs and feature requests, please create an issue.
*   Pull requests must be accompanied by passing automated tests (`$ yarn run test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[travis-badge]: https://img.shields.io/travis/evenchange4/gh-polls-bot-test/master.svg?style=flat-square
[travis]: https://travis-ci.org/evenchange4/gh-polls-bot-test
[dependency-badge]: https://david-dm.org/evenchange4/gh-polls-bot-test.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/gh-polls-bot-test
[devDependency-badge]: https://david-dm.org/evenchange4/gh-polls-bot-test/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/gh-polls-bot-test#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/gh-polls-bot-test/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/gh-polls-bot-test#info=peerDependencies
[license-badge]: https://img.shields.io/github/license/evenchange4/gh-polls-bot-test.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[greenkeeper-badge]: https://badges.greenkeeper.io/evenchange4/gh-polls-bot-test.svg
[greenkeeper]: https://greenkeeper.io/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
