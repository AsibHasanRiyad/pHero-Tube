
// Example data received from an API
const apiData = [
  { id: 1, name: 'Item 1', value: 50 },
  { id: 2, name: 'Item 2', value: 30 },
  { id: 3, name: 'Item 3', value: 70 },
  { id: 4, name: 'Item 4', value: 10 },
];

// Define a sorting function to sort by value in descending order
const sortByValueDescending = (a, b) => b.value - a.value;

// Use the sort() method with the custom sorting function
apiData.sort(sortByValueDescending);

console.log(apiData);