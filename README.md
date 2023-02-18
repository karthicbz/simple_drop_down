# Simple dropdown

![gif showing menu in action](https://media.giphy.com/media/GbWqa75uKBG0g9raMq/giphy.gif)

You can easily create a dropdown menu for your html project with one line

```javascript
const menuItems = DropdownMenu.DropDownMenu.makeMenu('menu-items', null, ['p', null, null, 'Profile']);
```
while will return a ```div``` element

```html
<div class="menu-items">
    <p>Profile</p>
    <div id="up-arrow"></div>
</div>
```
you can use css to style the menu whichever style you like.

you can install it from npm ```npm i @pkarthicbz/simple-drop-down```