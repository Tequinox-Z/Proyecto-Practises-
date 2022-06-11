require.config({
    urlArgs: 'bust=0.8188601713627577',
    baseUrl: '/',
    paths: {
        requirejs: 'bower_components/requirejs/require',
        text: 'bower_components/requirejs-text/text',
        'underscore.contains': 'src/underscore.contains',
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
