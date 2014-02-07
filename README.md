angular-skrollr-directive
===

This is a [AngularJS](http://angularjs.org/) directive for [skrollr](http://prinzhorn.github.io/skrollr/) (parallax scrolling library).

Requirement
---

- [angular.js](https://github.com/angular/angular.js) 1.2.6
- [skrollr](https://github.com/Prinzhorn/skrollr) 0.6.21

Usage
---

Import `skrollr.dir.js` on your angular app page.

index.html:

```html
<script src="js/directives/skrollr.dir.js"></script>
```

app.js:

```javascript
var app = angular.module('app', [
  'directives.skrollr'
]);
```

Now you can use `<div skrollr>` on your element, for this [example](https://github.com/Prinzhorn/skrollr#lets-change-the-background-color-of-a-div-starting-at-00f-when-the-scrollbar-is-at-the-top-and-ending-with-f00-when-the-user-scrolled-500-pixels-down), it will be look like:

```html
<div skrollr data-0="background-color:rgb(0,0,255);" data-500="background-color:rgb(255,0,0);">WOOOT</div>
```
	
[View skrolle demo in browser](http://prinzhorn.github.io/skrollr/examples/docu/1.html)