var move = solfege.moveUp

describe('move up', function () {
  it('from do', function () {
    assert.equal(move('do', 'de'), -1);
    assert.equal(move('do', 'do'), 0);
    assert.equal(move('do', 'di'), 1);
    assert.equal(move('do', 'ra'), 1);
    assert.equal(move('do', 're'), 2);
    assert.equal(move('do', 'ri'), 3);
    assert.equal(move('do', 'me'), 3);
    assert.equal(move('do', 'mi'), 4);
    assert.equal(move('do', 'fa'), 5);
    assert.equal(move('do', 'fi'), 6);
    assert.equal(move('do', 'se'), 6);
    assert.equal(move('do', 'sol'), 7);
    assert.equal(move('do', 'si'), 8);
    assert.equal(move('do', 'le'), 8);
    assert.equal(move('do', 'la'), 9);
    assert.equal(move('do', 'li'), 10);
    assert.equal(move('do', 'te'), 10);
    assert.equal(move('do', 'ti'), 11);
  });

  it('from sol', function () {
    assert.equal(move('sol', 'sol'), 0);
    assert.equal(move('sol', 'si'), 1);
    assert.equal(move('sol', 'le'), 1);
    assert.equal(move('sol', 'la'), 2);
    assert.equal(move('sol', 'li'), 3);
    assert.equal(move('sol', 'te'), 3);
    assert.equal(move('sol', 'ti'), 4);
    assert.equal(move('sol', 'de'), 4);
    assert.equal(move('sol', 'do'), 5);
    assert.equal(move('sol', 'di'), 6);
    assert.equal(move('sol', 'ra'), 6);
    assert.equal(move('sol', 're'), 7);
    assert.equal(move('sol', 'ri'), 8);
    assert.equal(move('sol', 'me'), 8);
    assert.equal(move('sol', 'mi'), 9);
    assert.equal(move('sol', 'fa'), 10);
    assert.equal(move('sol', 'fi'), 11);
    assert.equal(move('sol', 'se'), -1);
  });
});