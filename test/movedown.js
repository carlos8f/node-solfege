var move = solfege.moveDown;

describe('move down', function() {
  it('from do', function () {
    assert.equal(move('do', 'di'), 1);
    assert.equal(move('do', 'do'), 0);
    assert.equal(move('do', 'ti'), -1);
    assert.equal(move('do', 'te'), -2);
    assert.equal(move('do', 'li'), -2);
    assert.equal(move('do', 'la'), -3);
    assert.equal(move('do', 'le'), -4);
    assert.equal(move('do', 'si'), -4);
    assert.equal(move('do', 'sol'), -5);
    assert.equal(move('do', 'se'), -6);
    assert.equal(move('do', 'fi'), -6);
    assert.equal(move('do', 'fa'), -7);
    assert.equal(move('do', 'mi'), -8);
    assert.equal(move('do', 'me'), -9);
    assert.equal(move('do', 'ri'), -9);
    assert.equal(move('do', 're'), -10);
    assert.equal(move('do', 'ra'), -11);
  });

  it('from sol', function () {
    assert.equal(move('sol', 'si'), 1);
    assert.equal(move('sol', 'sol'), 0);
    assert.equal(move('sol', 'se'), -1);
    assert.equal(move('sol', 'fi'), -1);
    assert.equal(move('sol', 'fa'), -2);
    assert.equal(move('sol', 'mi'), -3);
    assert.equal(move('sol', 'me'), -4);
    assert.equal(move('sol', 'ri'), -4);
    assert.equal(move('sol', 're'), -5);
    assert.equal(move('sol', 'ra'), -6);
    assert.equal(move('sol', 'di'), -6);
    assert.equal(move('sol', 'do'), -7);
    assert.equal(move('sol', 'ti'), -8);
    assert.equal(move('sol', 'te'), -9);
    assert.equal(move('sol', 'li'), -9);
    assert.equal(move('sol', 'la'), -10);
    assert.equal(move('sol', 'le'), -11);
  });
});