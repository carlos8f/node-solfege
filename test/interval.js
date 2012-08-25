var getInterval = solfege.getInterval
  , invertInterval = solfege.invertInterval

describe('interval', function () {
  it('computes', function () {
    assert.equal(getInterval('do', 'do'), 1);
    assert.equal(getInterval('do', 'de'), 1);
    assert.equal(getInterval('do', 'ra'), 2);
    assert.equal(getInterval('do', 're'), 2);
    assert.equal(getInterval('do', 'mi'), 3);
    assert.equal(getInterval('do', 'fi'), 4);
    assert.equal(getInterval('do', 'sol'), 5);
    assert.equal(getInterval('do', 'si'), 5);
    assert.equal(getInterval('do', 'la'), 6);
    assert.equal(getInterval('do', 'le'), 6);
    assert.equal(getInterval('do', 'ti'), 7);
    assert.equal(getInterval('do', 'te'), 7);
    assert.equal(getInterval('re', 'fa'), 3);
    assert.equal(getInterval('fa', 're'), 6);
    assert.equal(getInterval('la', 'te'), 2);
    assert.equal(getInterval('la', 'do'), 3);
    assert.equal(getInterval('sol', 'mi'), 6);
    assert.equal(getInterval('sol', 'do'), 4);
    assert.equal(getInterval('re', 'fi'), 3);
    assert.equal(getInterval('se', 'te'), 3);
  });

  it('inverts', function () {
    assert.equal(invertInterval(1), 8);
    assert.equal(invertInterval(2), 7);
    assert.equal(invertInterval(3), 6);
    assert.equal(invertInterval(4), 5);
    assert.equal(invertInterval(5), 4);
    assert.equal(invertInterval(6), 3);
    assert.equal(invertInterval(7), 2);
    assert.equal(invertInterval(8), 1);
  });
});