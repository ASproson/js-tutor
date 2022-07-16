# JS Tutor

Hello there! In this repo you'll be tested on a wide range of JavaScript concepts, to get started follow the instructions below

1. Fork this repository to your own account
2. Clone the repo down to your system
3. Open the repo in VSCode
4. Right click the js-tutor folder, and select Open in Integrated Terminal
5. Type `cd 00` in the terminal and press tab, that will auto-complete and take you into the folder 00 Intro

From there, simply follow the list down to completion. To test your work you need to enter the following command for each file in the terminal: 

`node 00returnString.js`
</br>

`node 01convertNum.js`

You can use the auto-complete for this as well by typing `node 00`, `node 01` etc then pressing tab. 

Additionally, inside of 00 Intro there is a solutions file. Before looking at the solutions spend an *hour* - *a full hour* - trying to solve it alone using things like Google, StackOverflow, Discord communities, etc. It'll be frustrating when you get stuck, but it's all part of the process of improving

Remember to star and watch the project on GitHub, as new problems and solutions will be added constantly

## 01 Beginner and onwards

Once you have completed 00 Intro we move into 01 Beginner and start using Test-Driven Development (TDD). But what is TDD? Watch this [video](https://www.youtube.com/watch?v=Jv2uxzhPFl4&ab_channel=Fireship) by the amazing Fireship. In this repo we will use the [Jest](https://jestjs.io/) testing framework

All challenges in 01 Beginner have complete TDD. To begin, enter these commands in the terminal:

`cd 01 Beginner`

`npm i`

This will install the testing suite. As long as we are in the cd 01 Beginner folder we can run the following command in the terminal and execute our tests:

`npm t`

For this section of the course we will run a single test at a time - this means we need to modify package.json a little bit for each challenge. By default it will be as follows:

```JSON
{
  "scripts": {
    "test": "jest JT00canDivideBy.test.js"
  },
  "devDependencies": {
    "jest": "^28.1.3"
  }
}
```

Simply rename the `JT00canDivideBy.test.js` string to the challenge you are currently working on. When you are problem solving split your screen so that you can see both the coding file (they will always start with JS) and the testing file (these will always start with JT). Look at the test expects to see and write code to pass the tests one at a time. If you prefer, you can always modify the test file like so to run a single test at a time using `.only`:

```JavaScript
describe('canDivideBy()', () => {
    test.only('when passed 1, returns []', () => {
        expect(canDivideBy(1)).toEqual([])
    }),
    test('when passed 4, returns [1, 2]', () => {
        expect(canDivideBy(4)).toEqual([1, 2])
    }),
    test('when passed 5, returns [1]', () => {
        expect(canDivideBy(5)).toEqual([1])
    }),
    test('when passed 10, returns [1, 2, 5]', () => {
        expect(canDivideBy(10)).toEqual([1, 2, 5])
    })
})
```
