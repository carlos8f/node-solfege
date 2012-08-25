var symbols = exports.symbols = {
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

// Given starting symbol, go up to a symbol, and return
// the total pitch difference.
function moveUp (currentSymbol, targetSymbol) {
  if (typeof currentSymbol === 'string') {
    currentSymbol = symbols[currentSymbol];
  }
  if (typeof targetSymbol === 'string') {
    targetSymbol = symbols[targetSymbol];
  }
  var pitch = -currentSymbol.alter
    , degree = currentSymbol.degree
    , scale = [1, 2, 2, 1, 2, 2, 2]

  while (degree !== targetSymbol.degree) {
    degree++;
    if (degree > scale.length) {
      degree = 1;
    }
    pitch += scale[degree - 1];
  }
  return pitch + targetSymbol.alter;
}
exports.moveUp = moveUp;

// Given starting symbol, go down to a symbol, and return
// the total pitch difference.
function moveDown (currentSymbol, targetSymbol) {
  if (typeof currentSymbol === 'string') {
    currentSymbol = symbols[currentSymbol];
  }
  if (typeof targetSymbol === 'string') {
    targetSymbol = symbols[targetSymbol];
  }
  var pitch = currentSymbol.alter
    , degree = currentSymbol.degree
    , scale = [2, 2, 1, 2, 2, 2, 1]

  while (degree !== targetSymbol.degree) {
    degree--;
    if (degree < 1) {
      degree = scale.length;
    }
    pitch += scale[degree - 1];
  }
  return pitch - targetSymbol.alter;
}
exports.moveDown = moveDown;