<<<<<<< HEAD
#LESS is more
=======
#SimpleDropDown
This is my attempt at simplifying a dropdown menu.
The concept is supposedly simple, but it requires some odd CSS and a vague knowledge of jQuery so I made a very simple reusable block.

A demo can be seen at http://demo.lukewoollett.com/simpledropdown
##Use
1. You need to be using jQuery. Just place the following in the heading:
>>>>>>> 713ee2491b8a793985fd8fc7f6ae37303d619e2d

1. Nested Selectors
1. Mixins
1. Functions
1. Colours

##LESS nests selectors

```css
nav > ul > li{
    clear: none;
    &:first-child {
        margin: 0;
    }
    > a {
        width: auto;
        padding-left: 0;
        text-align: center;
    }
    > ul {
        position: relative;
    }
}
```
