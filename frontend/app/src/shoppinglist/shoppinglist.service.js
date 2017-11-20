(function () {
    'use strict';

    angular.module('ShoppingList')
        .service('ShoppingListService', ShoppingListService);


    ShoppingListService.$inject = ['$q', '$timeout']
    function ShoppingListService($q, $timeout) {
        var service = this;

        // List of shopping items
        var items = [];

        items.push({
            name: "iPhoneX",
            quantity: "Only $1099",
            description: "The perfect cellphone, which is almost a work of art!",
            num:"1"
        });
        items.push({
            name: "iPad Pro",
            quantity: "On sale, only $399",
            description: "Cheaper than iPhone, but have large screen and powerful cpu.",
            num:"2"
        });
        items.push({
            name: "iWatch",
            quantity: "Only 299",
            description: "If you like sports, you will definitely fall in love with it!",
            num:"5"
        });

        service.getItems = function () {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve(items);
            }, 800);

            return deferred.promise;
        };
    }

})();