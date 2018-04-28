# Ramda practice 

This project contains two tasks solved with JavaScript and Ramda (http://ramdajs.com/):

## Task 1
There is an array with objects. Make a hashMap where index is the id property of the array items.

Example:

Given array:
```
const items = [
  { id: '1', foo: 'bar1'},
  { id: '2', foo: 'bar2'},
  { id: '3', foo: 'bar3'},
]
```
Function should return:
```
{
  1: { id: '1', foo: 'bar1'},
  2: { id: '2', foo: 'bar2'},
  3: { id: '3', foo: 'bar3'},
}
```

## Task 2
There is a function that makes an ajax request, for instance. 
Write a function that is called only if parameter is unique.

Example:
```
call('1337'); // <-- will be called
call('1338'); // <-- will be called
call('1338'); // <-- will be ignored
call('1339'); // <-- will be called
```

To get more information look at the tests.
