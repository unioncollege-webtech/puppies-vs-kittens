Puppies Versus Kittens
======================

[![Join the chat at https://gitter.im/unioncollege-webtech/puppies-vs-kittens-advanced](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/unioncollege-webtech/puppies-vs-kittens-advanced?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Improve the [Puppies Versus Kittens][previous] website by using cookies, `POST`
requests, and templates.

[previous]: https://github.com/unioncollege-webtech/puppies-vs-kittens

Description
-----------

In the previous exercise, we built a website that allowed visitors to vote on 
which is cuter: puppies or kittens. The website will consisted of a static
index.html file and two dynamic routes to record votes for puppies and kittens.
Additionally, we defined a new [class][classes] called `Counter` and used it
to record the votes.

In this exercise, we will begin where we left off and improve on our application
considerably.

There are several problems with our website:

* Using ‘GET’ requests for something like this is very bad. 
[According to the specification](https://tools.ietf.org/html/rfc7231#section-4.2.1),
`GET` requests are expected to be "safe", meaning that they are essentially 
read-only, and do not have a side-effecton the server. This is currently not the
case with our website, as each consecutive visit will increase the recorded 
counter.

* The user can vote multiple times; we currently have no way of keeping track of
who is voting.

* The message shown after voting is plain and ugly. It would be better to show
the user a styled web page and a helpful message, and display the results of
the poll so far.

* The `Counter` function is out of place in `server.js`. It would be better to
move it to its own file and use `require` to load it.

In this exercise we will build on our previous website and solve each of the
problems listed above.

### Use the `POST` method to submit the results

TODO (http://expressjs.com/4x/api.html#req.body)

### Use cookies to record that a user has voted

TODO (http://expressjs.com/4x/api.html#req.cookies)

### Use templates to render a dynamic response after voting

TODO (http://expressjs.com/4x/api.html#res.render, https://github.com/donpark/hbs)

### Move `Counter` to its own file

TODO (https://nodejs.org/api/modules.html#modules_modules)


Extra Credit
------------

* Currently the recorded votes go away after restarting the server. Use a file
or database or some other option to persist the results.
* Use CSS and/or JavaScript to display the results with a bar or pie chart.

Completing and submitting the assignment
----------------------------------------

- To begin, [**fork** this repository](https://guides.github.com/activities/forking/).
- [Create a new Cloud9 workspace](https://docs.c9.io/docs/setting-up-github-workspace)
  from your new repository.
  - Alternatively, you may [**clone**](http://gitref.org/creating/#clone) your
    new repository to your computer by running:

        git clone https://github.com/YOUR_GITHUB_USERNAME/puppies-vs-kittens-advanced

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
* [Express body-parser middleware][body-parser] ([example][body-parser example])

[server.js]: ./server.js
[classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Custom_objects
[Express]: http://expressjs.com/4x/api.html
[Static]: http://expressjs.com/starter/static-files.html
[Dynamic]: http://expressjs.com/guide/routing.html
[Express Static Server]: https://github.com/unioncollege-webtech/express-static-server/blob/master/server.js#L3
[new operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
[cookie-parser]: https://www.npmjs.com/package/cookie-parser
[body-parser]: https://www.npmjs.com/package/body-parser
[body-parser example]: https://github.com/expressjs/body-parser#expressconnect-top-level-generic