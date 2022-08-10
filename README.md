# Reverse Polish Notation Calculator

## Description

This project contains a calculator that handles input in Reverse Polish Notation, as well as numerous interfaces for interacting with the calculator.

## Instructions

1. Clone the repository to your machine.
   git clone https://github.com/ConnorBryan/rpn-calculator

2. Install the program.
   npm i

3. Start the program.
   npm start

4. Follow the prompts and get the answers you've been looking for.

## Architecture

### Overview

The calculator is able to recognize numbers and operators defined in the `operations/` directory. Each subsequent operation is comprised of a symbol and relevant pure calculation functionality, and should be indepentently tested. With each new consumer of the calculation functionality (CLI, WebSocket, file), a new, tested interface file bridges the gap between consumer and calculator while acting as an independent module.

### Directories

| Directory   | Description                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| helpers/    | Contains isolated functionality larger in scope than a single in-file utility function.                                                                 |
| interfaces/ | Contains a variety of implementations of consumers of the calculator.                                                                                   |
| operations/ | Each file contains an operation symbol and an operation implementation exported in a common format; directory exports a mapping of symbol to operation. |

## Doing It Differently

- TypeScript (which eliminates entire classes of errors from needing to be tested)
- If not TypeScript, expanded JSDoc notation
- Publishing as an actual NPM package using rollup
- CONTRIBUTING.md to list expectations for contributing further
- Utilize dependency mocking to test `interfaces/cli.js` and future interface additions, as well as any file in the `helpers/` directory.
- More specific test cases in existing suites to handle a wider variety of conditions.

## Questions

1. Example 1 does not use floating point notation and displays the result as an integer. Example 2 does use floating point notation even though the inputs wouldn't normally cause that to be the case intuitively.

**How would I change based on requirements?**
Based on a provided cli flag, override a defaut setting (i.e. make default setting at precision based on inputs, with a flag override --precision to force arbitrary desired precision.)
