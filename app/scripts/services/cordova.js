'use strict';

pravasa
  .factory('cordova', 
    ['$q', '$window', 
    function ($q, $window) {
        var d = $q.defer(); 
        var resolved = false;
        this.ready = d.promise;
            document.addEventListener('deviceready', function () {
            resolved = true;
            d.resolve($window.cordova);
        });

        setTimeout(function () {  
            if (!resolved) {
                if ($window.cordova) 
                    d.resolve($window.cordova);
            }
        }, 3000);

        return this;
  }]);
