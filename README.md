#LESS is more

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
