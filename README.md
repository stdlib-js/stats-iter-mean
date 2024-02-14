<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# itermean

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [arithmetic mean][arithmetic-mean] over all [iterated][mdn-iterator-protocol] values.

<section class="intro">

The [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

```math
\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e7ac225deb396ee6d2b4d5fc1a2faa645582349f/lib/node_modules/@stdlib/stats/iter/mean/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
itermean = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-mean@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-iter-mean/tags). For example,

```javascript
itermean = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-mean@v0.2.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var itermean = require( 'path/to/vendor/umd/stats-iter-mean/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-mean@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.itermean;
})();
</script>
```

#### itermean( iterator )

Computes the [arithmetic mean][arithmetic-mean] over all [iterated][mdn-iterator-protocol] values.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 1.0, 2.0, 3.0, 4.0 ] );

var m = itermean( arr );
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [`iterator`][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-mean@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Compute the arithmetic mean:
var m = itermean( rand );
// returns <number>

console.log( 'Mean: %d.', m );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-iter/midrange`][@stdlib/stats/iter/midrange]</span><span class="delimiter">: </span><span class="description">compute the mid-range of all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats-iter/mmean`][@stdlib/stats/iter/mmean]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving arithmetic mean.</span>
-   <span class="package-name">[`@stdlib/stats-iter/stdev`][@stdlib/stats/iter/stdev]</span><span class="delimiter">: </span><span class="description">compute the corrected sample standard deviation over all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats-iter/sum`][@stdlib/stats/iter/sum]</span><span class="delimiter">: </span><span class="description">compute the sum of all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats-iter/variance`][@stdlib/stats/iter/variance]</span><span class="delimiter">: </span><span class="description">compute the unbiased sample variance over all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-mean.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-mean

[test-image]: https://github.com/stdlib-js/stats-iter-mean/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-iter-mean/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-mean/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-mean?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-mean.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-mean/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter-mean/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-iter-mean/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-iter-mean/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-iter-mean/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-iter-mean/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-iter-mean/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-iter-mean/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-mean/main/LICENSE

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/midrange]: https://github.com/stdlib-js/stats-iter-midrange/tree/umd

[@stdlib/stats/iter/mmean]: https://github.com/stdlib-js/stats-iter-mmean/tree/umd

[@stdlib/stats/iter/stdev]: https://github.com/stdlib-js/stats-iter-stdev/tree/umd

[@stdlib/stats/iter/sum]: https://github.com/stdlib-js/stats-iter-sum/tree/umd

[@stdlib/stats/iter/variance]: https://github.com/stdlib-js/stats-iter-variance/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
