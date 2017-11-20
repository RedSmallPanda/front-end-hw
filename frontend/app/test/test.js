describe('Routes test', function() {
    beforeEach(module('ShoppingList'));
    var location, route, rootScope;
    beforeEach(inject(
        function(_$location_, _$route_, _$rootScope_) {
            location = _$location_;
            route = _$route_;
            rootScope = _$rootScope_;
        }));
    describe('index route', function() {
        beforeEach(inject(
            function($httpBackend) {
                $httpBackend.expectGET('views/home.html')
                    .respond(200, 'main HTML');
            }));
        it('should load the index page on successful load of /',
            function() {
                location.path('/main-list');
                rootScope.$digest();
                expect(route.current.controller)
                    .toBe('MainShoppingListController as mainList')
            });
        it('should go to the detail path ', function() {
        location.path('src/shoppinglist/templates/item-detail.template.html');
        rootScope.$digest();
        expect(route.current.controller)
            .toBe('ItemDetailController as itemDetail')
    });
    });
});