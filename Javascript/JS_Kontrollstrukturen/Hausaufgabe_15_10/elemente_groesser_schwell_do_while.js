function countElementsWhile(arr, threshold) {
    let count = 0;
    let i = 0;

    while (i < arr.length) {
        if (arr[i] > threshold) {
            count++;
        }
        i++;
    }

    return count;
}

console.log("Anzahl der Elemente (while-Schleife): " + countElementsWhile(array, 50));
