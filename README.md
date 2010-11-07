AutoTagger
====================

This plugin will analyse the text of a form field, run it through the Yahoo term extractor and returns the found keywords as tags.

![Screenshot](http://farm5.static.flickr.com/4030/5153139831_ee3377cfa9_b.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document.

        #HTML
        <script type="text/javascript" src="mootools-core.js"></script>
        <script type="text/javascript" src="Request.JSONP.js"></script>
        <script type="text/javascript" src="AutoTagger.js"></script>

In your JS.

       #JS
       (function($){
          window.addEvent('domready',function() {
             $('bt').addEvent('click',function() {
               new AutoTagger('context',{
                   onComplete: function(tags) {
                      $('context').setStyle('opacity','1.0').removeClass('loading');                    
                      $('tags').set('value', tags);
                   },
                   onRequest: function(scriptSrc, scriptEl) {
                      $('context').setStyle('opacity','0.5').addClass('loading'); 
                      if(window.console) {console.log('make a request!'); }
                   }
               }).send(); 
             });
          });
       })(document.id);

In your HTML.

       #HTML
       <div class="yui-g">
        <label for="context">Your message:</label>
        <textarea id="context">
          Mathematical analysis, which mathematicians refer to simply as analysis, has its beginnings in the rigorous formulation of infinitesimal calculus. It is a branch of pure mathematics that includes the theories of differentiation, integration and measure, limits, infinite series,[1] and analytic functions. These theories are often studied in the context of real numbers, complex numbers, and real and complex functions. However, they can also be defined and studied in any space of mathematical objects that has a definition of nearness (a topological space) or, more specifically, distance (a metric space).
        </textarea>
        <button id="bt">Get</button>
        <label for="tags">Tags:</label><input type="text" id="tags" />
        </div>
### Notes:

You can view in action:

- [http://thinkphp.github.com/AutoTagger/](http://thinkphp.github.com/AutoTagger/)


### Requirements:

- MooTools Core 1.3
- MooTools More (Request.JSONP)