Class: AutoTagger {#AutoTagger}
=========================================================

This plugin will analyse the text of a form field, run it through the Yahoo Term Extraction Web Service and provides a list of signifiant words or phrases as tags.

### Extends:

Request.JSONP (creates a JSON request using script tag injection and handles the callbacks for you).


AutoTagger Method: constructor {#AutoTagger: constructor}
----------------------------------------------------------------------------------

### Syntax:

    new AutoTagger(contextID, options);


### Arguments:

1. contextID (*String*) the ID of input field.
2. options (*object*) An object containing the AutoTagger instance's options.
Note: all the options you know from the class Request.JSONP because we have an inheritance.

PLUS 2

- tagDelimiter (*String*, default to ', ') - the string added between tags , default is a comma next space.
- addQuotes (*Boolean*, default to 'true') - boolean to add quotes around tags that contain spaces

### Returns:

(*Object*) This instance of AutoTagger.

### Events:

All the events you know from Request.JSONP

### success 

(*Function*) - callback to execute when the data returns.

### Signature

    onSuccess(tags)

#### Arguments:

- tags (*String*) - the response received from server consisting of a list of signifiant words.

   ex: "infinitesimal calculus", "pure mathematics", "analytic functions",


### complete

(*Function*) - callback to execute when the data returns.

### Signature:

    onComplete(tags)

#### Arguments:

- tags (*String*) - the response received from server consisting of a list of signifiant words.

   ex: "infinitesimal calculus", "pure mathematics", "analytic functions",


### request

(*Function*) - function to execute when you make a request.

### Signature:

    onRequest(scriptSrc, scriptEl)

#### Arguments:

- scriptSrc (*String*) - the attribute 'src' of the element 'script' used in class request.jsonp 

ex: http://query.yahooapis.com/v1/public/yql?q=...

- scriptEl (*Element*) - the HTMLScriptElement for script tag injection in request.jsonp

ex: &lt;script type="text/javascript" src="..."&gt;


AutoTagger Method: send(#AutoTagger: send) 
------------------------------------------

Executes a JSON request.

### Syntax:

    myreq.send([options]);

#### Arguments: 

- options (*Object*, optional) - key/value options that configure the request. Note: all options you know from Request.JSONP.     

### Returns:

- (*Object*) This instance of AutoTagger.




