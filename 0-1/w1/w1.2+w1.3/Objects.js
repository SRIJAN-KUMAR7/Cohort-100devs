function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);

// ///Original Object: { key1: 'value1', key2: 'value2', key3: 'value3' }
// After Object.keys(): [ 'key1', 'key2', 'key3' ]..> returns a array of keys
// After Object.values(): [ 'value1', 'value2', 'value3' ]-->returns a array of values
// After Object.entries(): [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]--->returns a array of both key and values
// After hasOwnProperty(): false--->check if a key is present in an object or not 
// After Object.assign(): {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   newProperty: 'newValue'
// }

//learning the .assign property
// Object.assign({}, obj, { newProperty: "newValue" });
// The 3 arguments:
// {} – This is the target object (an empty object), which means you're not modifying the original object (obj), but creating a new copy.

// obj – This is the first source object. Its properties are copied into the target {}.

// { newProperty: "newValue" } – This is the second source object, whose properties are also copied into the target.