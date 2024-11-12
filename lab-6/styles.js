// Quicksort Function
function quickSort(arr) {
    if (arr.length <= 1) return arr; // Base case: arrays with 1 or 0 elements are already sorted

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; // Concatenate left, pivot, and right arrays
}

// Event Listener for the Sort Button
document.getElementById('sortButton').addEventListener('click', () => {
    const input = document.getElementById('numberInput').value;
    if (input.trim() === "") {
        alert("Please enter some numbers to sort.");
        return;
    }

    // Convert input string to an array of numbers
    const numArray = input.split(',').map(num => parseInt(num.trim()));

    // Check if the input contains only numbers
    if (numArray.some(isNaN)) {
        alert("Please enter valid numbers separated by commas.");
        return;
    }

    // Sort the numbers and display the result using quickSort
    const sortedArray = quickSort(numArray);
    document.getElementById('result').textContent = `Sorted Array: ${sortedArray.join(', ')}`;
});

// Display the Last Modified Date
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
