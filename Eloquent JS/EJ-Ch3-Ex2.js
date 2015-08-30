/* Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2. */

function isEven(num) {
	if (typeof num !== "number" || num < 0) {
      console.log("Please enter a positive integer");
    }
    else if (num === 0) {
		return true;
	}
	else if (num === 1) {
		return false;
	}
	else {
		return isEven((num - 2));
	}
}

isEven(-48);