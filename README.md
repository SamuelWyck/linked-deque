
# Linked-Deque


A deque (double-ended queue) provides fast pushing and popping from both sides of the data structure.  
This implementation is a simple deque built off of a doubly linked list.

The Symbol.iterator method is defined to allow for the use of a for ... of loop on the deque.

All methods will have the time complexity listed in their documentation.


### Constructor *Deque( iterable )*
Constructor for the deque with an optional param of any object that implements Symbol.iterator.  
The deque will be initialized with all the elements of the iterable. (if one is given) **O(n)**


### *push( value )* 
Add an element to the back (right side) of the deque. **O(1)**


### *pushLeft( value )*
Add an element to the front (left side) of the deque. **O(1)**


### *getHead( )*
Get the first element in the deque (the front element) without removing it. **O(1)**


### *getTail( )*
Get the last element in the deque (the back element) without removing it. **O(1)**


### *at( index )*
Get an element from the deque using an order-based index.  
Throws a RangeError with an invalid index. **O(n)**


### *pop( )*
Remove and return the last element in the deque.  
If the deque is empty, it returns null. **O(1)**


### *popLeft( )*
Remove and return the first element in the deque.  
If the deque is empty, it returns null. **O(1)**


### *insertAt( value, index )*
Add an element to the deque at the specified index.  
Throws a RangeError with an invalid index.  
Returns a bool indicating success or failure. **O(n/2)**


### *removeAt( index )*
Remove and return the element at the specified index in the deque.  
Throws a RangeError if the index is invalid. **O(n/2)**


### *reverse( )*
Reverse the order of elements in the deque in-place. **O(n)**


### *rotate( steps=1 )*
Rotate the deque to the right by the given number of steps. (One by default.)   
If the number is negative rotate to the left. **O(s)** (Where s == the number of steps given.)


### *copy( )*
Create and return a shallow copy of the deque. **O(n)** 


### *clear( )*
Remove all elements from the deque resulting in a length of 0. **O(1)**


### *toArray( )*
Get an Array of all the elements in the deque. **O(n)**


### *toString( )*
Get a String of all the elements in the deque for the purpose of printing. **O(n)**