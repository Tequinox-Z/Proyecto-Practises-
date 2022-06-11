require.config({
    urlArgs: 'bust=0.15312729869037867',
    baseUrl: '/',
    paths: {
        requirejs: 'bower_components/requirejs/require',
        text: 'bower_components/requirejs-text/text',
        'underscore.deep': 'src/underscore.deep',
        jquery: 'bower_components/jquery/jquery',
        'requirejs-text': 'bower_components/requirejs-text/text',
        underscore: 'bower_components/underscore/underscore'
    },
    shim: {
        backbone: {
            exports: 'Backbone',
            deps: [
                'jquery',
                'underscore'
            ]
        },
        underscore: {
            exports: '_'
        }
    }
});
