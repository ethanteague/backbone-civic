
(function($){

  var person = {};

  person = Backbone.Model.extend({});

  _.extend(person, Backbone.Events);

  person.on("alert", function(msg) {
    var name;
    name =  prompt("What is your name?");
    alert("Hi " + name);

  });

  person.trigger("alert", "an event");


})(jQuery);
