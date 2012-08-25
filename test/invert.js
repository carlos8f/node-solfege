var invertInterval = solfege.invertInterval
  , invertPitch = solfege.invertPitch

describe('invert', function () {
  it('intervals', function () {
    assert.equal(invertInterval(1), 8);
    assert.equal(invertInterval(2), 7);
    assert.equal(invertInterval(3), 6);
    assert.equal(invertInterval(4), 5);
    assert.equal(invertInterval(5), 4);
    assert.equal(invertInterval(6), 3);
    assert.equal(invertInterval(7), 2);
    assert.equal(invertInterval(8), 1);
  });

  it('pitches', function () {
    assert.equal(invertPitch(0), 12);
    assert.equal(invertPitch(1), 11);
    assert.equal(invertPitch(2), 10);
    assert.equal(invertPitch(3), 9);
    assert.equal(invertPitch(4), 8);
    assert.equal(invertPitch(5), 7);
    assert.equal(invertPitch(6), 6);
    assert.equal(invertPitch(7), 5);
    assert.equal(invertPitch(8), 4);
    assert.equal(invertPitch(9), 3);
    assert.equal(invertPitch(10), 2);
    assert.equal(invertPitch(11), 1);
    assert.equal(invertPitch(12), 0);
  });
});