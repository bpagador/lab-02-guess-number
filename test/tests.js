import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
   
    const expectNum = 10;
    const guess1 = 10;
    const guess2 = 6;
    const guess3 = 15;
    
    const result1 = compareNumbers(guess1, expectNum); 
    const result2 = compareNumbers(guess2, expectNum);
    const result3 = compareNumbers(guess3, expectNum);

    assert.equal(result1, 0);
    assert.equal(result2, -1);
    assert.equal(result3, 1);

});