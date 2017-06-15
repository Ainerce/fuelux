define(function Module (require) {
	var $ = require('jquery');
	var html = require('text!test/markup/tree-markup.html!strip');

	return function tabIndexModule (QUnit) {
		QUnit.module( 'tab indexes', {}, function testTabIndexes () {
			QUnit.skip('are all set to -1 on tree load', function loadTree (assert) {

			});
			QUnit.skip('are set to 1 for selected items', function loadTree (assert) {

			});
			QUnit.skip('are all set to -1 on new item selection', function loadTree (assert) {

			});
			QUnit.skip('root tree element is set to -1 on item selection', function loadTree (assert) {

			});
		});
	};
});
