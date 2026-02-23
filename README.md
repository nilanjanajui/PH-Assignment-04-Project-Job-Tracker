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

   
### 3. What is Event Bubbling? And how does it work?
   Answer:

   Event bubbling is a mechanism in the DOM event model where an event starts at the element that triggered it and then propagates upward through its parent elements, continuing until it reaches the document root.

   For example, if a button inside a `<div>` is clicked, the click event is first handled by the button, then by the surrounding `<div>`, then by the `<body>`, and finally by the `<document>`, provided listeners are attached at those levels.

   Most commonly used events such as click, keydown and input bubble by default. Evenet bubbling allows parent elements to respont to events that occur on their child elements.
  
### 4. What is Event Delegation in JavaScript? Why is it useful?
  Answer:

  Event delegation is a technique that takes advantage of event bubbling. Instead of attaching individual event listeners to multiple child elements, a single listener is attached to a common parent element.

  When an event occurs, the parent listener inspects the event.target property to determine which child element triggered the event. This approach improves performance by reducing the number of event listeneres, simplifies code, and allows handling of tge dynamically added elements without additiona; setup.

  Event delegation is widely used in modern web applications, specially when working with lists, tables, or dynamically generated content.


### 5. What is the difference between preventDefault() and stopPropagation() methods?
  Answer:

  The differences between preventDefault() and stopPropagation():

  The preventDefault() method prevents the browser's default action associated with an event. For example, it cap stop a form from submitting or prevent a link from navigating to another page.

  The stopPropagation() method prevents the event from continuing to propagate through the DOM hierarchy. When called, parent elements wil not receive the event.





























  
