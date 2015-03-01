<h1 align="center">
	fn-pragma

	<a href="http://badge.fury.io/js/fn-pragma">
		<img src="https://badge.fury.io/js/fn-pragma.svg" alt="npm version">
	</a>

	<a href="https://travis-ci.org/quarterto/fn-pragma">
		<img src="https://travis-ci.org/quarterto/fn-pragma.svg" alt="Build status">
	</a>
</h1>

Add pragmas to functions.

![](http://i.imgur.com/PLTZJRh.gif)

```js

function foo() {
	/* @bar @baz('quux') *//
}

var pragma = require('fn-pragma');
pragma(foo); //⇒ [{name: 'bar'}, {name: 'baz', args: ['quux']}]
```

Licence
---

MIT.