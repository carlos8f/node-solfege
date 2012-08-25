// The set of standard chromatic solfege syllables.
var syllables = exports.syllables = {
  de: { alter: -1, degree: 1, abs: -1 },
  do: { alter: 0, degree: 1, abs: 0 },
  di: { alter: 1, degree: 1, abs: 1 },
  ra: { alter: -1, degree: 2, abs: 1 },
  re: { alter: 0, degree: 2, abs: 2 },
  ri: { alter: 1, degree: 2, abs: 3 },
  me: { alter: -1, degree: 3, abs: 3 },
  mi: { alter: 0, degree: 3, abs: 4 },
  fa: { alter: 0, degree: 4, abs: 5 },
  fi: { alter: 1, degree: 4, abs: 6 },
  se: { alter: -1, degree: 5, abs: 6 },
  sol: { alter: 0, degree: 5, abs: 7 },
  si: { alter: 1, degree: 5, abs: 8 },
  le: { alter: -1, degree: 6, abs: 8 },
  la: { alter: 0, degree: 6, abs: 9 },
  li: { alter: 1, degree: 6, abs: 10 },
  te: { alter: -1, degree: 7, abs: 10 },
  ti: { alter: 0, degree: 7, abs: 11 }
};

// Idempotent conversion of a string syllable into an object.
function syllable (input) {
  if (typeof input === 'string') {
    input = input.toLowerCase();
    if (input === 'so') input = 'sol';
    var ret = syllables[input];
    if (!ret) {
      throw new Error('invalid solfege syllable: ' + input);
    }
    return ret;
  }
  else if (typeof input === 'object') {
    return input;
  }
  else {
    throw new Error('invalid solfege syllable: ' + input);
  }
}
exports.syllable = syllable;

// Go up to the target syllable, and return the pitch difference.
function moveUp (current, target) {
  current = syllable(current);
  target = syllable(target);

  var pitch = -current.alter
    , degree = current.degree
    , scale = [1, 2, 2, 1, 2, 2, 2]

  while (degree !== target.degree) {
    degree++;
    if (degree > scale.length) {
      degree = 1;
    }
    pitch += scale[degree - 1];
  }
  return pitch + target.alter;
}
exports.moveUp = moveUp;

// Go down to the target syllable, and return the pitch difference.
function moveDown (current, target) {
  current = syllable(current);
  target = syllable(target);

  var pitch = current.alter
    , degree = current.degree
    , scale = [2, 2, 1, 2, 2, 2, 1]

  while (degree !== target.degree) {
    degree--;
    if (degree < 1) {
      degree = scale.length;
    }
    pitch += scale[degree - 1];
  }
  return (pitch - target.alter) * -1;
}
exports.moveDown = moveDown;

// Find the nearest target syllable (by interval comparison), and return the
// pitch difference.
function moveTo (current, target) {
  return getInterval(current, target) > 4
    ? moveDown(current, target)
    : moveUp(current, target);
}
exports.moveTo = moveTo;

// Get the interval between current and target syllables.
function getInterval (current, target) {
  current = syllable(current);
  target = syllable(target);

  var addon = 0;
  if (target.degree < current.degree) {
    addon = 7;
  }
  return target.degree - current.degree + 1 + addon;
}
exports.getInterval = getInterval;

// Invert the interval.
function invertInterval (interval) {
  return 9 - interval;
}
exports.invertInterval = invertInterval;