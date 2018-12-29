## Containers

The fundamental element of the bootstrap grid system is the fixed width container:

```html
<div class="container">
    <-- stuff goes here-->
</div>
```

By adding `-fluid` you can make the container fill the entire width of the screen

```html
<div class="container-fluid">                                                                                                       <-- stuff goes here-->
</div>
```

## Rows and columns

The system is built on a 12 column grid. If you set 3 columns just with the `col` class, the will automatically default to a width of 4.

```html
<div class="container">
  <div class="row">
    <div class="col">
     <h2>Row 1, Column 1</h2>
    </div>
    <div class="col">
      <h2>Row 1, Column 2</h2>
    </div>
    <div class="col">
      <h2>Row 1, Column 3</h2>
    </div>
  </div>
</div>
```

This works automagically with any amount of columns that divides into 12. You can manually set the width of the columns by adding a number to the `col` class name.

```html
<div class="container">
  <div class="row">
    <div class="col-3">
     <h2>Row 1, Column 1</h2>
    </div>
    <div class="col-5">
      <h2>Row 1, Column 2</h2>
    </div>
    <div class="col-4">
      <h2>Row 1, Column 3</h2>
    </div>
  </div>
</div>
```

You can have as many rows as you want inside a container, with any configuration cofiguration of columns.

```html
<div class="container">
  <div class="row">
    <div class="col-3">
     <h2>Row 1, Column 1</h2>
    </div>
    <div class="col-5">
      <h2>Row 1, Column 2</h2>
    </div>
    <div class="col-4">
      <h2>Row 1, Column 3</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-8">
     <h2>Row 2, Column 1</h2>
    </div>
    <div class="col-4">
      <h2>Row 2, Column 2</h2>
    </div>
  </div>
</div>
```

## Responsiveness And Breakpoints

There is miles of information on the internet about *Responsive Design*. In terms of The Twitter Bootstrap Grid, it means two things.

* At what point do the columns collapse into a single row.
* How is the content within the row treated when this happens.

This is controlled through the use of **Breakpoints**, of which there are 5.

```txt
Extra small   <576px  	.col-
Small         ≥576px    .col-sm-
Medium        ≥768px    .col-md-
Large         ≥992px    .col-lg-
Extra large   ≥1200px   .col-xl-
```

By specifying breakpoints you are instructing when to break into a single row.

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">
     <h2>Row 1, Column 1</h2>
    </div>
    <div class="col-md-4">
      <h2>Row 1, Column 2</h2>
    </div>
    <div class="col-md-4">
      <h2>Row 1, Column 3</h2>
    </div>
  </div>
</div>
```

CSS rules acan be configured to kick in at particular dimensions using the `@media` Rule

```css
@media (min-width: 768px) {
  div[class^="col"]{
    border-style: solid;
    border-color:blue;
  }
}
```
This rule will set the `border-style` and `border-color` when the screen has a minimum width of 786 pixels, The same as the Medium breakpoint `col-md`

# Going Further

There are hundreds of example on the [Bootstrap Website](https://getbootstrap.com/docs/4.1/layout/grid/), please look through them.