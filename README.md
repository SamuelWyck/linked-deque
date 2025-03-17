
# Linked-Deque


A deque (double-ended queue) provides fast pushing and popping from both sides of the data structure.  
This implementation is a simple deque built off of a doubly linked list.

The Symbol.iterator method is defined to allow for the use of a for ... of loop on the deque.

All methods will have the time complexity listed in their documentation.

## Install
    npm install --save linked-deque


### *Deque( iterable )*
- Constructor for the deque with an optional param of any object that implements Symbol.iterator.  
The deque will be initialized with all the elements of the iterable. (if one is given) **O(n)**


## Methods


### *push( value )* 
- Add an element to the back (right side) of the deque. **O(1)**


### *pushLeft( value )*
- Add an element to the front (left side) of the deque. **O(1)**


### *getHead( )*
- Get the first element in the deque (the front element) without removing it. **O(1)**


### *getTail( )*
- Get the last element in the deque (the back element) without removing it. **O(1)**


### *at( index )*
- Get an element from the deque using an order-based index.  
Throws a RangeError with an invalid index. **O(n)**


### *pop( )*
- Remove and return the last element in the deque.  
If the deque is empty, it returns null. **O(1)**


### *popLeft( )*
- Remove and return the first element in the deque.  
If the deque is empty, it returns null. **O(1)**


### *insertAt( value, index )*
- Add an element to the deque at the specified index.  
Throws a RangeError with an invalid index.  
Returns a bool indicating success or failure. **O(n/2)**


### *removeAt( index )*
- Remove and return the element at the specified index in the deque.  
Throws a RangeError if the index is invalid. **O(n/2)**


### *reverse( )*
- Reverse the order of elements in the deque in-place. **O(n)**


### *rotate( steps=1 )*
- Rotate the deque to the right by the given number of steps. (One by default.)   
If the number is negative rotate to the left.  
Based on the input, the method will always calculate the optimal direction  
and number of steps to rotate the deque.  
For example: if the given number of steps equals the length of the deque,  
nothing will happen. **O(n/2)**


### *copy( )*
- Create and return a shallow copy of the deque. **O(n)** 


### *clear( )*
- Remove all elements from the deque resulting in a length of 0. **O(1)**


### *toArray( )*
- Get an Array of all the elements in the deque. **O(n)**


### *toString( )*
- Get a String of all the elements in the deque for the purpose of printing. **O(n)**


## Usage

```javascript
import deque from "linked-deque"; 

const deque = new Deque([1, 2, 3]); // ( 1 ) -> ( 2 ) -> ( 3 ) -> null

deque.popLeft(); // ( 2 ) -> ( 3 ) -> null

deque.pushLeft(5); // ( 5 ) -> ( 2 ) -> ( 3 ) -> null

deque.rotate(); // ( 3 ) -> ( 5 ) -> ( 2 ) -> null

deque.insertAt("foo", 1); // ( 3 ) -> ( "foo" ) -> ( 5 ) -> ( 2 ) -> null

deque.removeAt(2); // ( 3 ) -> ( "foo" ) -> ( 2 ) -> null

deque.reverse(); // ( 2 ) -> ( "foo" ) -> ( 3 ) -> null

deque.push(7); // ( 2 ) -> ( "foo" ) -> ( 3 ) -> ( 7 ) -> null


// you can use for ... of loops 
for (let element of deque) {
    // do something
}


deque.clear(); // null
```
