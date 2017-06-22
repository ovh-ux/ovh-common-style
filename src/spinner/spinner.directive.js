/**
 * http://jxnblk.com/loading/
 */
angular.module("ovh-common-style").directive("spinner", function () {
    "use strict";

    return {
        restrict: "AE",
        scope: {
            size: "@",
            width: "@",
            height: "@",
            color: "@"
        },
        templateUrl: function ($element, $attrs) {
            switch ($attrs.type) {
            case "bubbles":
                return "spinner/bubbles.html";
            case "bars":
                return "spinner/bars.html";
            case "bouncing-balls":
                return "spinner/bouncing-balls.html";
            case "volume":
                return "spinner/volume.html";
            default:
                return "spinner/spinner.html";
            }
        },
        link: function ($scope, elem, attrs) {
            $scope.width = $scope.width || $scope.size || 16;
            $scope.height = $scope.height || $scope.size || 16;
            $scope.color = $scope.color || "#222";
            $scope.size = attrs.size || "16";

            elem.addClass("spinner-" + (attrs.type || "spinning-bubbles"));
        }
    };
});
