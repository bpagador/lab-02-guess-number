function compareNumbers(guess, correct) {
    if (guess === correct) {
        return 0;
    } else if (guess < correct) {
        return -1;
    } else if (guess > correct) {
        return 1;
    }
}

export default compareNumbers;
// 