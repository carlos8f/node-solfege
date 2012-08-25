var moveTo = solfege.moveTo

describe('move to', function () {
  it('closest interval from do', function () {
    assert.equal(moveTo('do', 'de'), -1);
    assert.equal(moveTo('do', 'do'), 0);
    assert.equal(moveTo('do', 'di'), 1);
    assert.equal(moveTo('do', 'ra'), 1);
    assert.equal(moveTo('do', 're'), 2);
    assert.equal(moveTo('do', 'ri'), 3);
    assert.equal(moveTo('do', 'me'), 3);
    assert.equal(moveTo('do', 'mi'), 4);
    assert.equal(moveTo('do', 'fa'), 5);
    assert.equal(moveTo('do', 'fi'), 6);
    assert.equal(moveTo('do', 'se'), -6);
    assert.equal(moveTo('do', 'sol'), -5);
    assert.equal(moveTo('do', 'si'), -4);
    assert.equal(moveTo('do', 'le'), -4);
    assert.equal(moveTo('do', 'la'), -3);
    assert.equal(moveTo('do', 'li'), -2);
    assert.equal(moveTo('do', 'te'), -2);
    assert.equal(moveTo('do', 'ti'), -1);
  });

  it('closest interval from sol', function () {
    assert.equal(moveTo('sol', 'se'), -1);
    assert.equal(moveTo('sol', 'sol'), 0);
    assert.equal(moveTo('sol', 'si'), 1);
    assert.equal(moveTo('sol', 'le'), 1);
    assert.equal(moveTo('sol', 'la'), 2);
    assert.equal(moveTo('sol', 'li'), 3);
    assert.equal(moveTo('sol', 'te'), 3);
    assert.equal(moveTo('sol', 'ti'), 4);
    assert.equal(moveTo('sol', 'de'), 4);
    assert.equal(moveTo('sol', 'do'), 5);
    assert.equal(moveTo('sol', 'di'), 6);
    assert.equal(moveTo('sol', 'ra'), -6);
    assert.equal(moveTo('sol', 're'), -5);
    assert.equal(moveTo('sol', 'ri'), -4);
    assert.equal(moveTo('sol', 'me'), -4);
    assert.equal(moveTo('sol', 'mi'), -3);
    assert.equal(moveTo('sol', 'fa'), -2);
    assert.equal(moveTo('sol', 'fi'), -1);
  });
});