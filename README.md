solfege
=======

Library for manipulating musical tones using [solfège](http://en.wikipedia.org/wiki/Solf%C3%A8ge)

[![build status](https://secure.travis-ci.org/carlos8f/node-solfege.png)](http://travis-ci.org/carlos8f/node-solfege)

Install
-------

```bash
$ npm install --save solfege
```

API
---

`solfege` exports the following:

### Property: `syllables`

A hash map of solfège syllables to meta-data, which includes:

- `degree` (number): the associated scale degree (movable do)
- `alter` (number): the associated pitch alteration (movable do)
- `abs` (number): the absolute pitch of the syllable (fixed do)

### Method: `syllable(input)`

Idempotent conversion of a string syllable into an object.

- `input`: string syllable, such as "sol", or an object representing a syllable.

Returns: an object representing the syllable.

#### Example

```javascript
> solfege.syllable('sol')
{ alter: 0, degree: 5, abs: 7 }
```

### Method: `moveUp(current, target)`

Go up to the target syllable, and return the pitch difference.

- `current` (syllable): the current syllable
- `target` (syllable): the target syllable

Returns: the pitch difference (number) to add to the current pitch.

#### Example

```javascript
> solfege.moveUp('sol', 'do');
5
```

### Method: `moveDown(current, target)`

Go down to the target syllable, and return the pitch difference.

- `current` (syllable): the current syllable
- `target` (syllable): the target syllable

Returns: the pitch difference (number) to add to the current pitch.

### Example

```javascript
> solfege.moveDown('sol', 'do');
-7
```

### Method: `moveTo(current, target)`

Find the nearest target syllable (by interval comparison), and return the
pitch difference.

- `current` (syllable): the current syllable
- `target` (syllable): the target syllable

Returns: the pitch difference (number) to add to the current pitch.

### Example

```javascript
> solfege.moveTo('ti', 'do');
1
```

### Method: `getInterval(current, target)`

Get the interval between current and target syllables.

- `current` (syllable): the current syllable
- `target` (syllable): the target syllable

Returns: the interval (number)

#### Example

```javascript
> solfege.getInterval('do', 'ti');
7
```

### Method: `invertInterval(interval)`

Inverts the interval.

- `interval` (number): the interval to invert

Returns: the inverted interval (number)

#### Example

```javascript
> solfege.invertInterval(6);
3
```

- - -

### Developed by [Terra Eclipse](http://www.terraeclipse.com)
Terra Eclipse, Inc. is a nationally recognized political technology and
strategy firm located in Aptos, CA and Washington, D.C.

- - -

### License: MIT

- Copyright (C) 2012 Carlos Rodriguez (http://s8f.org/)
- Copyright (C) 2012 Terra Eclipse, Inc. (http://www.terraeclipse.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.