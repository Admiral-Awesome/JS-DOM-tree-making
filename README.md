# JS DOM tree making

## Opportunities W3C DOM
  
  W3C or World Wide Web Consortium declares DOM or Document Object Model 
  that allows us building, adding, removing, hidding , etc all elements of Document.
  
  With the object model, JavaScript gets all the power it needs to create dynamic HTML:

    -JavaScript can change all the HTML elements in the page
    -JavaScript can change all the HTML attributes in the page
    -JavaScript can change all the CSS styles in the page
    -JavaScript can remove existing HTML elements and attributes
    -JavaScript can add new HTML elements and attributes
    -JavaScript can react to all existing HTML events in the page
    -JavaScript can create new HTML events in the page
## getTree(node)
  
  few days ago i desired to write such method.
  It is stored in "js/dom-detour.js"
  
  if we use index.html and getTree(document)
  
  we can get somesthing like this: 

HTML depth : 1

BODY depth : 2

HEAD depth : 2

META depth : 3

SCRIPT depth : 3

SCRIPT depth : 3

DIV depth : 3

TITLE depth : 3

BR depth : 3

BR depth : 3

P depth : 4

DIV depth : 4

P depth : 4

PRE depth : 5

SPAN depth : 5

###it can be used for any element you want
###one more example getTree(document.body) finished with :

BODY depth : 0

DIV depth : 1

BR depth : 1

BR depth : 1

SCRIPT depth : 1

P depth : 2

DIV depth : 2

P depth : 2

SPAN depth : 3

PRE depth : 3
