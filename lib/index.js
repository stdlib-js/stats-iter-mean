/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Compute the arithmetic mean over all iterated values.
*
* @module @stdlib/stats-iter-mean
*
* @example
* var runif = require( '@stdlib/random-iter-uniform' );
* var itermean = require( '@stdlib/stats-iter-mean' );
*
* var rand = runif( -10.0, 10.0, {
*     'iter': 100
* });
*
* var m = itermean( rand );
* // returns <number>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;