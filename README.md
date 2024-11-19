# @ppica/free-port-finder

## Description

`@ppica/free-port-finder` is an NPM package that helps you find a desired port number if it is free, or just the first available one. This can be particularly useful for applications that need to dynamically allocate ports.

## Installation

You can install this package directly from its Git repository:

```bash
npm i @ppica/free-port-finder
```

## Usage

```javascript
import getAvailablePort from "@ppica/free-port-finder";

(async () => {
  console.log(await getAvailablePort(3000));
})();
```
