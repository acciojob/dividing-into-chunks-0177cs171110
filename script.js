const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
    let currentSum = 0;
    let currentChunk = [];

    for (let i = 0; i < arr.length; i++) {
        // If adding the next element exceeds the maximum sum,
        // push the current chunk to the result and start a new chunk
        if (currentSum + arr[i] > n) {
            result.push(currentChunk);
            currentChunk = [];
            currentSum = 0;
        }

        // Add the current element to the current chunk and update the sum
        currentChunk.push(arr[i]);
        currentSum += arr[i];
    }

    // Push the last chunk to the result
    result.push(currentChunk);

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
