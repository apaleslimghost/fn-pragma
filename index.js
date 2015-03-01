var vm = require('vm');

// ugh sorry
var pragma = /@(?:([\w\-\$][\w\d\-\$]*)(?:\(([^\)]*)\))?)/ig;
var comment = /(?:\/\/(.+)$|\/\*(.+)\*\/)/;

function fnPragma(fn) {
	var anns = [];
	var m = fn.toString().match(comment);
	if(!m) return [];

	var content = m[1] || m[2];
	content.replace(pragma, function(_, name, val) {
		var args = (val || '')
		.split(',')
		.map(function(s) { return s.trim(); })
		.filter(Boolean)
		.map(function(v) {
			return vm.runInThisContext(v);
		});

		anns.push({name: name, args: args});
	});

	return anns;
}

module.exports = fnPragma;