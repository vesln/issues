[![Build Status](https://secure.travis-ci.org/vesln/issues.png)](http://travis-ci.org/vesln/issues)

# Important Notice

I'm no longer actively maintaining this project. If you are interested supporting it - [ping me on twitter](https://twitter.com/vesln).
The only thing that I will ask you is to not change the API drastically. If you are planning on doing that - better start a brand new project.

If you want me to transfer you only the name on npm, I'd be happy to only if the project **does not have any downloads on npm lately**. In case it's being
downloaded, there are people that depend on it and might step up and start maintaining, so I will not transfer it to you, regardless if you want to release
a new major version etc.

If you have any other questions, let me know.

Thanks!

Veselin

# GitHub Issues - CLI edition

## Description
	
GitHub Issues from the CLI.

## Features

- Issues for all your (or not yours) repos.
- Issues for supplied repo.
- Different formatters.

## Synopsis

```

Usage: issues <username> [repository]

Options:
  --reporter basic, eighty, number, short

```

### Configurations

```
$ issues set <key> <value>
$ issues clear <key>
```

Options:

username - GitHub username

token    - GitHub token

reporter - Default reporter

### All issues:

```

$ issues vesln

```

### Just one repo:

```

$ issues nodejitsu forever

```

### Private issues:

```

$ issues set username username
$ issues set token token

```

! Note: Use sudo if necessary.

And then:

```
$ issues username
$ issues username your-private-repo

```

### From any git repo with origin or upstream: (since 0.2.0)

```
$ cd your-repo
$ git issues
```

## Requirements

- NPM (http://npmjs.org/)
- Node.js 0.6 (http://nodejs.org/)

## Install

```

$ npm install issues -g

```

## Tests

```

$ npm test

```

## Disclaimer

This tool is not official. It just uses the GitHub API and that's it.
	
## License

MIT License

Copyright (C) 2012 Veselin Todorov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.%
