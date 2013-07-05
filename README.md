#LESS is more

1. Nested Selectors
1. Mixins
1. Functions
1. Colours

##LESS nests selectors

```less
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

Becomes:

```css
nav > ul > li {
    clear: none;
}
nav > ul > li:first-child {
    margin: 0;
}
nav > ul > li > a {
    width: auto;
    padding-left: 0;
    text-align: center;
}
nav > ul > li > ul {
    position: relative;
}
```

##Mixins

```less
.box-sizing () {
    -webkit-box-sizing: border-box;
    -moz-box-sizing:    border-box;
    box-sizing:         border-box;
}

.box {
    width: 20%;
    padding: 5px;
    .box-sizing.
}
```

Outputs:

```css
.box {
    width: 20%;
    padding: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing:    border-box;
    box-sizing:         border-box;
}
```
-------------
They can also take in variables

```less
.gradient(@start, @finish) {
    background-color: @start;
    background-image: -webkit-linear-gradient(top, @start, @finish);
    background-image:    -moz-linear-gradient(top, @start, @finish);
    background-image:     -ms-linear-gradient(top, @start, @finish);
    background-image:      -o-linear-gradient(top, @start, @finish);
    background-image:         linear-gradient(to bottom, @start, @finish);
}

header {
    .gradient(#333,#000);
}
body {
    .gradient(#000,#333);
}
```

Outputs:

```css
header {
    background-color: #333333;
    background-image: -webkit-linear-gradient(top, #333333, #000000);
    background-image:    -moz-linear-gradient(top, #333333, #000000);
    background-image:     -ms-linear-gradient(top, #333333, #000000);
    background-image:      -o-linear-gradient(top, #333333, #000000);
    background-image:         linear-gradient(to bottom, #333333, #000000);
}
body {
    background-color: #000000;
    background-image: -webkit-linear-gradient(top, #000000, #333333);
    background-image:    -moz-linear-gradient(top, #000000, #333333);
    background-image:     -ms-linear-gradient(top, #000000, #333333);
    background-image:      -o-linear-gradient(top, #000000, #333333);
    background-image:         linear-gradient(to bottom, #000000, #333333);
}
```
-------------
Can have defaults:

```less
.box-sizing (@type: border-box) {
    -webkit-box-sizing: @type;
    -moz-box-sizing:    @type;
    box-sizing:         @type;
}

.box {
    width: 20%;
    padding: 5px;
    .box-sizing.
}
```

Outputs:

```css
.box {
    width: 20%;
    padding: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing:    border-box;
    box-sizing:         border-box;
}
```

##Functions

Can have mixins based on criteria:
```less
.set-bg-color (@text-color) when (lightness(@text-color) >= 50%) { 
  background: black;
}
.set-bg-color (@text-color) when (lightness(@text-color) < 50%) { 
  background: #ccc;
}

body {
    color: #333;
    .set-bg-color(#333);
}
```

##Colours

LESS also has functions that work specifically with numbers.

###darken()

```less
@color: #FFF;
body {
    background-color: darken(@color, 20%);
}
```

###lighten()

```less
@color: #3F3F3F;
body {
    background-color: lighten(@color, 20%);
    color: darken(@color, 20%);
}
```

