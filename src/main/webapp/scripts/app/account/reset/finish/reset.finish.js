'use strict';

angular.module('springAngularjsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('finishReset', {
                parent: 'account',
                url: '/reset/finish?key',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/account/reset/finish/reset.finish.html',
                        controller: 'ResetFinishController'
                    }
                },
                resolve: {
                    
                }
            });
    });
