requirejs.config({
    paths: {

        jquery: '/lib/jquery/jquery',
        angular: '/lib/angular/angular',
        angularRoute: '/lib/angular-route/angular-route',
        bootstrap: '/lib/bootstrap/bootstrap',
        
        app : './app',

        utils : '/utils/main',
        plunins : '/plugins/main',
        text : '/plugins/dialog/module/text'

    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'bootstrap': {deps:['jquery']}
    }
});

requirejs([
    
    'angular',
    'app',
    'jquery',
    'utils',
    'plunins',
    'routes',
    'bootstrap'

], function(app) {

    angular.bootstrap(document, ['app']);

});