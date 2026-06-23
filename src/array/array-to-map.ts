export function arrayToMap (data: string[], key = "id"){
	const itemsMap = new Map()
    for (const item of data) {
        if (item[key]) {
          itemsMap.set(item[key], item);
        }
      }
     return itemsMap
}
