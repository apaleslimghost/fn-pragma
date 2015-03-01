var pragma = require('./');
var expect = require('expect.js');

describe('fn-pragma', function() {
	it('should be empty for an empty function', function() {
		expect(pragma(function() {})).to.be.empty();
	});

	it('should contain a single pragma with name', function() {
		var ann = pragma(function() {
			/* @pragma */
		});

		expect(ann.length).to.be(1);
		expect(ann[0]).to.eql({
			name: 'pragma',
			args: []
		});
	});

	it('should contain a multiple pragmas with names', function() {
		var ann = pragma(function() {
			/* @pragma1 @pragma2 */
		});

		expect(ann.length).to.be(2);
		expect(ann[0]).to.eql({
			name: 'pragma1',
			args: []
		});
		expect(ann[1]).to.eql({
			name: 'pragma2',
			args: []
		});
	});

	describe('args', function() {
		it('should support strings', function() {
			var ann = pragma(function() {
				/* @pragma('foo') */
			});
			expect(ann[0].args).to.eql(['foo']);
		});
		it('should support numbers', function() {
			var ann = pragma(function() {
				/* @pragma(5) */
			});
			expect(ann[0].args).to.eql([5]);
		});
		it('should support bools', function() {
			var ann = pragma(function() {
				/* @pragma(true) */
			});
			expect(ann[0].args).to.eql([true]);
		});
		it('should support multiple args', function() {
			var ann = pragma(function() {
				/* @pragma(true, false, 'foo', 5) */
			});
			expect(ann[0].args).to.eql([true, false, 'foo', 5]);
		});
	});
});