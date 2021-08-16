// const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

// function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
// }


export function flatten(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) result = result.concat(flatten(array[i]));
      else result.push(array[i]);
    }
    return result;
  }