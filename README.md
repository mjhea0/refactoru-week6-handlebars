## CLIENT13: Handlebars: Mock Search Engine

### Objective

Create a data driven UI using Handlebars

### Skills

*   Creating an Express app
*   Understanding the relationship between client and server.
*   Creating Handebars templates
*   AJAX
*   jQuery

### Resources

*   [handlebarsjs.com](http://handlebarsjs.com/)
*   [dummy data](/public/samples/search-data.js)

### Requirements

#### Part I

1.  Setup an Express server
2.  Define an Express route, "/search" in your Express app
3.  Add the dummy data object listed above as a variable inside of your "/search" route
4.  Create a form using Jade that contains a search input (like Google)
5.  Add a div below it with the ID "results"
6.  Create a Handlebars template for your "results" div
7.  When a user enters a value into the search box and presses "Enter". Send the entered search term via AJAX to your "/search" endpoint
8.  In your "/search" route take the search term that was sent to your server and find its corresponding description in the "data" object.
9.  Use `res.send` to send the JSON back to the client.
10.  When you recieve the response from the server, compile your Handlebars template `Handlebars.compile`, passing the data to it.
11.  Take the resulting Handlebars string and append it to your results div using jQuery.

#### Bonus

Get really fancy with the search engine

1.  Modify your code so that you are able to search for any text within the "dummy data" object.
