export const cusSorting = (property, sortOrder, objects) => {
  const sortedObjects = objects.sort(dynamicSort(property, sortOrder));

  return sortedObjects;
};

const dynamicSort = (property, sortOrder) => {
  return function(a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};
