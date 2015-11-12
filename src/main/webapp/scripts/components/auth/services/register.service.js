'use strict';

angular.module('springAngularjsApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


