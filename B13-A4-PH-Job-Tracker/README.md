## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById returns a single element by its ID — since IDs are unique, you always get one element or null. 
getElementsByClassName returns a live HTMLCollection of all elements with that class — meaning if the DOM changes, the collection updates automatically. 
querySelector gives you the first element matching any CSS selector, and querySelectorAll gives you all of them as a static NodeList — it doesn't update if the DOM changes later.

### 2. How do you create and insert a new element into the DOM?
Answer: You use document.createElement('tagName') to create it, 
then set whatever content or attributes you need, and finally insert it using something like appendChild() or insertBefore().

### 3. What is Event Bubbling? And how does it work?
Answer: When you click on an element, the event doesn't just fire on that element,
it "bubbles up" through all its parent elements all the way to the document root. 
So if you have a button inside a div inside a section, clicking the button fires the click event on the button first,
 then the div, then the section, then body, then document. That's bubbling. It happens by default for most events. 
 The opposite is capturing, which goes top-down, but you almost never use that in practice.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Instead of attaching event listeners to each individual element, 
you attach one listener to a parent element and let bubbling do the work. 
Inside the handler, you check event.target to see which child was actually clicked.
It's useful because — if you have 100 list items, you don't want 100 event listeners. 
One listener on the <ul> handles all of them. It also works automatically for elements added to the DOM later,
 which individual listeners wouldn't handle.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stops the browser's default behavior for that event — like preventing a form from submitting, or stopping a link from navigating to a URL. 
The event still bubbles up normally though.
stopPropagation() stops the event from bubbling up to parent elements — but the default browser behavior still happens.
They do completely different things and you can use both together if you need to. A common mistake is thinking one does the job of the other.