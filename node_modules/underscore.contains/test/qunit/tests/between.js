define(['underscore.contains'], function(undef) {

return function() {

    QUnit.module('Between');

    test('Number usage: _.between(boundaries, number, exclusive = false)', function() {

        var interval = [0,10];

        ok(_.between);

        ok(_.between(interval, 9));

        ok(_.between(interval, 10), 'edges inclusive');

        ok(!_.between(interval, 19));

    });

    test('Number usage: _.between(boundaries, number, exclusive = true)', function() {
        var interval = [0,10];

        ok(_.between([0,10], 9, true));
        ok(!_.between(interval, 10, true), 'edges exclusive');
    })

    test('String usage: _.between(boundaries, string, exclusive = false)', function() {
        var interval = ['a','f'];

        ok(_.between(interval,'c'));

        ok(_.between(interval,'f'), 'edges inclusive');

        ok(!_.between(interval, 't'));
    });

    test('String usage: _between(boundaries, string, exclusive = true)', function() {
        var interval = ['a','f'];

        ok(_.between(interval, 'b', true));
        ok(!_.between(interval, 'a', true), 'edges exclusive');
    })

    test('Array usage: _.between(boundaries, array)', function() {
        var nInterval = [-300, 100];

        ok(_.between(nInterval, [-200, 0, 7]), 'array of numbers');
        ok(_.between(nInterval, [-300, 0, 7]));
        ok(!_.between(nInterval, [-300, 0, 7], true));

        var sInterval = ['a','h'];
        ok(_.between(sInterval, ['a','c','h']), 'array of strings');
        ok(!_.between(sInterval, ['a','c','f'], true));


    })

}
});
