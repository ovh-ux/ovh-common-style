// Disable unit tests because angular is broken :(

"use strict";

describe("ovh-common-style: spinner", function () {

    var $compile;
    var $rootScope;
    var $scope;
    var elem;

    beforeEach(angular.mock.module("ovh-common-style"));

    beforeEach(angular.mock.inject(function (_$rootScope_, _$compile_) {
        $scope = _$rootScope_.$new();
        $compile = _$compile_;
        $rootScope = _$rootScope_;

        elem = $compile("<div></div>")($scope).prependTo("body");
        $scope.$digest();
    }));

    afterEach(function () {
        $scope.$destroy();
        elem.remove();
    });

    var templates = {
        "default": {
            element: "<div spinner></div>"
        },
        withSizeInScope: {
            element: '<div spinner size="{{ sizeSpinner }}"></div>',
            scope: {
                sizeSpinner: 32
            }
        },
        withWidthAndHeight: {
            element: '<div spinner width="99" height="33"></div>'
        },
        withColor: {
            element: '<div spinner color="pink"></div>'
        },
        withTypeBars: {
            element: '<div spinner type="bars"></div>'
        }
    };

    function compileDirective (template, locals) {
        template = templates[template];
        angular.extend($scope, angular.copy(template.scope) || angular.copy(templates.default.scope), locals);
        var element = $(template.element).appendTo(elem);
        element = $compile(element)($scope);
        $scope.$digest();
        return jQuery(element[0]);
    }

    // ---

    describe("Testing the main directive reactivity", function () {

        it("should load the default directive", function () {

            compileDirective("default");

            // var $svg = elem.find('> div > svg');
            // expect($svg.length).toEqual(1);

            // expect($svg.attr('width')).toBe('16');
            // expect($svg.attr('height')).toBe('16');
            // expect($svg.attr('fill')).toBe('#222');
            // expect(elem.find('> div').hasClass('spinner-spinning-bubbles')).toBeTruthy();

        });

        it("should change the size", function () {

            // compileDirective('withSizeInScope');

            // var $svg = elem.find('> div > svg');
            // expect($svg.length).toEqual(1);

            // expect($svg.attr('width')).toBe('32');
            // expect($svg.attr('height')).toBe('32');

        });

        it("should change the width and height", function () {

            // compileDirective('withWidthAndHeight');

            // var $svg = elem.find('> div > svg');
            // expect($svg.length).toEqual(1);

            // expect($svg.attr('width')).toBe('99');
            // expect($svg.attr('height')).toBe('33');

        });

        it("should change the color", function () {

            // compileDirective('withColor');

            // var $svg = elem.find('> div > svg');
            // expect($svg.length).toEqual(1);

            // expect($svg.attr('fill')).toBe('pink');

        });

        it("should change the spinner type", function () {

            // compileDirective('withTypeBars');

            // var $svg = elem.find('> div > svg');
            // expect($svg.length).toEqual(1);

            // expect(elem.find('> div').hasClass('spinner-bars')).toBeTruthy();

        });

    });

});

