'use strict';

pravasa
  .service('feedsService', ['$q', function ($q) {
   
        this.currentPlace;
        this.output = [];
        this.feedDataUrl = 'http://www.prajavani.net/taxonomy/term/70/all/feed';
        this.routeBaseUrl = 'http://www.prajavani.net/';


        this.setPlaceInfo = function(selPlace){
            this.currentPlace = selPlace;
        };

        this.getPlaceInfo = function(){
            return this.currentPlace;
        };

        // Extract route maps from the content
        this.getImages = function(str){
            var image = $(str).find('img');
            if(image.length){
                var path = this.routeBaseUrl + $(image[0]).attr('src'); 
            }
            return path;
        };

        //converts from RSS object to an object we're interested in
        this.parseEntry = function(feedData) {

            var list = [];
            var _this = this;

            angular.forEach(feedData, function(key, value){
                var obj = {};
                    obj.title = key.title;
                    obj.content = $(key.content).text();
                    obj.publishedDate = key.publishedDate;
                    obj.path = _this.getImages(key.content);
                this.push(obj);
            }, list);

            return list;
        };

        this.getFeedData = function() {
            var _this = this;
            var d = $q.defer();
            var feed = new google.feeds.Feed(this.feedDataUrl);
            feed.setNumEntries(50);
            feed.load(function(result) {
                var data = result.feed.entries;
                this.output = _this.parseEntry(data);
                d.resolve(this.output)
            });
            return d.promise;
        
        };
    
  }]);
