var AutoTagger = new Class({
       /* Extends */
       Extends: Request.JSONP,
       /* options */
       options: {
           /* YQL endpoint */
           url: 'http://query.yahooapis.com/v1/public/yql?q=',
           /* parameters for request */
           data: {
             diagnostics: true,
             format: 'json'
           },
           /* some options */
           tagDelimiter: ", ",
           addQuotes: true                
       },
       /* @public, constructor of class */
       initialize: function(contextID, options) {
             var inputField = document.id(contextID);
             if(!inputField) {return false;}
             var content = (inputField.nodeName.toLowerCase() == 'input' || inputField.nodeName.toLowerCase() == 'textarea') ? 
                            inputField.get('value').replace(/'|"/g,'') : inputField.get('text').replace(/'|"/g,''),
                 yql = "select * from search.termextract where context='"+ content +"'";
             this.options.url += encodeURIComponent(yql);
             this.parent(options);
       },
       /*
        * @private, updates the response from service
        */
       _updateResponse: function(tags) {
             if(typeof tags != 'string'){
               if(this.options.addQuotes) {
                 for(var i=tags.length-1;i>=0;i--){
                      if(tags[i].indexOf(' ') !== -1) {
                            tags[i] = '"' + tags[i] + '"';
                      }
                 }
               }
               tags = tags.join(this.options.tagDelimiter);
             } else {
               tags = (tags.indexOf(' ') !== -1) ? '"' + tags + '"' : tags;
             }
           return tags;
        }.protect(),
        /*
         * @public, override first success 
         *          this function is called when the data are chez nous,
         *          then called the parent
         */           
        success: function(o, index) {
             if(window.console) {console.log(o);}
             if(!o[0].error && o[0].query.results !== null) {
               this.response = this._updateResponse(o[0].query.results.Result);
               this.parent(this.response, index);
             } else if(o[0].error && o[0].error.description){
               var err = o[0].error.description;
               this.parent(err, index); 
             } else if(o[0].query.results === null){
               this.parent("not found any tags", index); 
             }
         }   
}); //end class 

