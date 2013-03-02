#SimpleDropDown
This is my attempt at simplifying a dropdown menu.
The concept is supposedly simple, but it requires some odd CSS and a vague knowledge of jQuery so I made a very simple reusable block.

A demo can be seen at http://demo.lukewoollett.com/simpledropdown
##Use
1. You need to be using jQuery. Just place the following in the heading:

`<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>`

Or the HTML5 version if you're cool (notice you no longer need the type attribute):

`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>`

2. Either copy the jQuery from test.js or include that file itself.
3. Call the function dropDown() on whatever element contains the ul lists. For me this was a `<nav>` element. For example:

    <script type="text/javascript">
        $(document).ready().dropDown('nav');
    </script>

I have styled all the awkwardness away from the dropdown, if you wish to use this (or look at it once or something) just copy or link the sasstest.css file.
This was originally written in SASS and I have included the un-compiled version for those who know what they're doing.
If you don't use SASS I really recommend you do it makes the calculations that a tricky bit like dropdown menus a cinch.
I'll link to a blog post about getting SASS set up etc.
But the calculations are all there, you just need to change the variables according to how you want it and recompile it.
