Fun Code to Show

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