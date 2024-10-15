function countElementsFor(arr, threshold) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            count++;
        }
    }

    return count;
}

const array = [10, 23, 35, 47, 52, 66, 71, 88, 90];
console.log("Anzahl der Elemente (for-Schleife): " + countElementsFor(array, 50));
