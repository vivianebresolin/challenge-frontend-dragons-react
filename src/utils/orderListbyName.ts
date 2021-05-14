export const orderListByName = <T extends { name: string }>(array: T[]): T[] => {
  array.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  return array;
}

