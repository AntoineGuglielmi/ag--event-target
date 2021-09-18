# event-target
event-target is an event target library that offers ways to check the element which event is targeting.

## Install
```console
npm - ag--event-target
```
I advise to globaly install browserify and watchify, which both allow to test the whole thing in the browser:
```console
npm i -g browserify watchify
```

## Usage
```js
let EventTarget = require('ag--event-target');

let target = new EventTarget();
```
`target` will now offer some method to test it.

### *target.get_target()*
Returns the element targeted.

### *target.get_all_children(parent,accum = [])*
Return all children of a parent element, where `parent` is a dom element.

### *target.is(element)*
Where `element` is a dom element. Return wether the targeted element === `element`.

### *target.get(attr)*
Return the targeted element's `attr` attribute.

### *data(attr)*
Return the targeted element's data-`attr` data attribute

### *has_class(classe)*
Return wether the targeted element has the `classe` class

### *has_id(id)*
Return true if the targeted element's id is `id`

### *has(attr,value)*
Return wether the targeted element's `attr` attribute has the value `value`

### *is_one_of(...selectors)*
Return wether the targeted element is part of `selectors`, where `selectors` is one or more css selectors, comma seperated

### *is_parent_of(selector)*
Return wether the targeted element is a parent of `selector`, where `selector` is a css selector

### *is_child_of(selector)*
Return wether the targeted element is child of `selector`, where `selector` can be a string css selector, or a dom element

### *get_parent(selector)*
Return the first targeted element's parent that matches `selector`, where `selector` is a css selector

### *get_child(selector)*
Return the first targeted element's child that matches `selector`, where `selector` is a css selector