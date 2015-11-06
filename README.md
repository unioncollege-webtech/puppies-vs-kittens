Puppies Versus Kittens
======================

[![Join the chat at https://gitter.im/unioncollege-webtech/puppies-vs-kittens](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/unioncollege-webtech/puppies-vs-kittens?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Create an Express application to judge who is cuter: puppies or kittens.

Description
-----------

In this exercise we will build a website that will allow visitors to vote on 
which is cuter: puppies or kittens. The website will consist of one static
index.html file and two dynamic routes: one to record votes for puppies, the
other to record votes for kittens. Additionally, we will define a new [class][classes]
called `Counter` and use it to record the votes.

### Create an Express application

Since the website will have a mix of [static] and [dynamic] content, we will use
Express to build our application.

Currently [server.js](./server.js) has an outline of the steps necessary to
serve static files and respond to the `get` requests to `/kittens` and
`/puppies`. Use the [Express API documentation][Express] (specifically, the pages
linked to in the [References](#references) section below) to build out the 
required pieces. Feel free to use the [Express Static Server] repository as a
starting point as well.

## Create the `Counter` function

In this exercise we are also experimenting with 
[creating classes in JavaScript][classes]. JavaScript doesn't have traditional
classes like a typical object oriented programming language. Instead, JavaScript
uses functions as constructors for classes, and we use the `new` operator to 
construct objects from those functions. Instance methods are created by
adding functions to the `.prototype` property of the constructor function.

> Reference note: the Mozilla Developer Network’s 
[Introduction to Object-Oriented JavaScript][classes] is an excellent
description of JavaScript’s approach to object-oriented programming.

We will be defining a new class called `Counter` to record the votes for puppies
and kittens. We'll create a new counter instance, then call `counter.record('puppies')`
to record a vote for puppies, and `counter.record('kittens')` to record votes for
kittens. We'll retrive the accumulated votes by calling 
`counter.retrieve('puppies')`, and `counter.retrieve('kittens')`.

A starting point for the `Counter` class is below:

```js
// Counter constructor definition
function Counter() {
    // Create a property on the `this` reference to store counts for each key
}

// .record(key) - increment the count value for `key`
Counter.prototype.record = function(key) {

};

// .retrieve(key) - retrieve the total recorded counts for `key`
Counter.prototype.retrieve = function(key) {

};

// .results() - return an object containing the cumulative counts for all keys
Counter.prototype.results = function() {
    
};

// Create a new counter instance
var voteCounter = new Counter();

// Record a vote for kittens
voteCounter.record('kittens');
// Retrieve the number of votes for kittens
var kittenVotes = voteCounter.retrieve('kittens');
// => 1
```

Once we create the `Counter` class, we will
[use it inside our route handlers](https://github.com/unioncollege-webtech/puppies-vs-kittens/blob/master/server.js#L18)
for '/puppies' and '/kittens' to record the votes and retrieve the totals.


## Add links to “index.html”

Visitors to the website will be served [`index.html`](./index.html) and will
cast their votes by clicking on a link for their preferred animal. We need to 
update index.html and add links to "/puppies" and "/kittens" so it looks
something like this:

> <h1>Puppies vs. Kittens</h1>
> <p>Cast your vote for the cuter creature: puppies or kittens:</p>
> 
> <a href="/puppies">Puppies</a> <a href="/kittens">Kittens</a>

When the user clicks on one of those links, they will be sent to `/puppies` or 
`/kittens` on our domain. We will be listening for those requests in `server.js`
and will send back a message like the following:

> Thank you for voting! Kittens have 12 total votes so far.

## Style the pages

Currently there are no styles for our Puppies Versus Kittens voting website.
Create a `style.css` file with some lovely styles for this application. Feel
free to update `index.html` as necessary.

Extra Credit
------------

Extra Credit options to come.

Completing and submitting the assignment
----------------------------------------

- To begin, [**fork** this repository](https://guides.github.com/activities/forking/).
- [Create a new Cloud9 workspace](https://docs.c9.io/docs/setting-up-github-workspace)
  from your new repository.
  - Alternatively, you may [**clone**](http://gitref.org/creating/#clone) your
    new repository to your computer by running:

        git clone https://github.com/YOUR_GITHUB_USERNAME/puppies-vs-kittens

- After cloning (in Cloud9 or on your computer), install the `express`
  module using `npm` by running:

        npm install express

- Modify the files and [**commit**](http://gitref.org/basic/#commit) changes to
  complete your solution. Start your server by running:

        node server.js

  or by clicking the green ["Run" button in Cloud9](https://docs.c9.io/docs/run-an-application#section-method-1-use-the-run-panel)
  when editing the `server.js` file.
- [Push](http://gitref.org/remotes/#push)/sync the changes up to GitHub.
- [Create a pull request](https://help.github.com/articles/creating-a-pull-request) on the original repository to turn in the assignment.
- [Create a separate branch](http://gitref.org/branching/#branch) for the extra credit options.

You are also welcome commit, push, and create a pull request **before** you’ve 
completed your solution. You can ask questions or request feedback there in your
pull request. Just mention `@barberboy` in your comments to get my attention.

References
----------

* [Defining classes in JavaScript][classes]
* [`new` operator][new operator]
* [Express]
* [Serving static files with Express][Static]
* [Defining routes in Express][Dynamic]
* [Express Static Server] example repository

[server.js]: ./server.js
[classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Custom_objects
[Express]: http://expressjs.com/4x/api.html
[Static]: http://expressjs.com/starter/static-files.html
[Dynamic]: http://expressjs.com/guide/routing.html
[Express Static Server]: https://github.com/unioncollege-webtech/express-static-server/blob/master/server.js#L3
[new operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new