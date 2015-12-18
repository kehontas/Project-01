#Café JSON

**Overview:**
Café JSON is an API for the coffee *connoisseur* in you!

**User Stories:** 
* A user can gather information about featured coffee beans to include the name, origin, roast, acidity and flavor.
* A user can see where the coffee is being served and add/remove locations if needed.

**Technologies Used:**
* HTML/CSS
* JavaScript 
* JQuery
* Express
* NodeJS
* AJAX
* MongoDB
* Mongoose
*JSON

To run Café JSON:
* `npm init`
* `npm install`

![cafeJSON]
(http://i.imgur.com/6sogAqi.png?1)

Fun with Handlebars (a fun code snippet)
```
<ul id="cafeList" style="list-style-type:none">
    <h3>Served at the following locations:</h3>
      {{#each beanLocations}}
    <ul class="cafe" data-id="{{_id}}">
    <li>Cafe Name: {{cafeName}}</li>
    <li>Cafe City: {{cafeCity}}</li>
    <li>URL: <a href="{{cafeUrl}}">{{cafeUrl}}</a></li></ul><br> 
    <button id="deleteButton" name="deleteButton" class="btn btn-warning" data-id="{{_id}}">Remove</button>
    <hr>
    {{/each}} 
  </ul>
  ```

[Café JSON on heroku](https://arcane-lowlands-8512.herokuapp.com/)

[Café JSON on GitHub](https://github.com/kehontas/Project-01)

**Future Considerations:**
* Member Login with Profile (this will allow users to save coffees and cafés they've enjoyed or would like to try)
* edit a café
* continue to add a picks of the month (picks of the month can be user or admin generated)
* Include Google Maps for café locations
