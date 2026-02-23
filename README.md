# PH-Assignment-04-Project-Job-Tracker
---
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  Answer:
  The difference between getElementById, getElementsClassName, and querySelector, querySelectorAll:

  getElementById() selects a single element by its ID and returns either that element or null if no match is found.

  getElementsByClassName() selects all elements that share a given class name and returns a live HTMLCOllection. This means the collection automatically updates when elements are added to or removed from the DOM, which can be useful but may also lead to unexpected behavior if not handled carefullty.

  querySelector() and querySelectorAll() use CSS selectors, making them the most flexible options. querySelector() returns the first matching element, while querySelectorALl() returns a static NodeList containg all matches. Unlike getElementsByClassName(), the returned list does not updated automatically the DOM changes.
  
### 2. How do you create and insert a new element into the DOM?
   Answer:
   To add a new element to the DOM, JavaScript follows a clear three step process. First, a new element is created using document.createElement(). Next, its content, attributes, or classes and defined. Finally, the element is inserted into the document using methods such as appendChild(), append() or prepend().

   Once the element is appended to an existing DOM node, it becomes part the page structure and is rendered by the browser. This approach allows developers to dynamically modify the page without reloading it.

   
4. What is Event Bubbling? And how does it work?
   Answer:
  
6. What is Event Delegation in JavaScript? Why is it useful?
7. What is the difference between preventDefault() and stopPropagation() methods?
