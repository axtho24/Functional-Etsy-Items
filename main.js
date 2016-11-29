//Average price
  var avePrice = items.map(cost => cost.price).reduce((a, b) => a + b)/items.length
  var average = "The average price is $" + Math.round(avePrice*100)/100 ;

  var node = document.createElement("li");
  var textnode = document.createTextNode (average);
  node.appendChild(textnode);
  document.getElementById("answer_1").appendChild(node);

//Cost between
  var things = items.filter( compare => compare.price>14 && compare.price<18).map( name => name.title)
  things.forEach(function(n) {
    var item = [n]
    var node = document.createElement("li");
    var textnode = document.createTextNode (item);
    node.appendChild(textnode);
    document.getElementById("answer_2").appendChild(node);
  })

//currency_code
  var currency = items.filter(item => item.currency_code.includes("GBP")).map(name => name.title + " costs £" + name.price)

  var node = document.createElement("li");
  var textnode = document.createTextNode (currency);
  node.appendChild(textnode);
  document.getElementById("answer_3").appendChild(node);

//made of wood
  var material = items.filter(uses => uses.materials.includes("wood")).map(name => name.title)
  material.forEach(function(n) {
    var item = [n]
    var node = document.createElement("li");
    var textnode = document.createTextNode (item);
    node.appendChild(textnode);
    document.getElementById("answer_4").appendChild(node);
  })

//problem 5
  var uses = items.filter(ingredients => ingredients.materials.length >8).map(name => name.title + " has " + name.materials.length + " materials: " + name.materials)
  uses.forEach(function(n) {
  var item = [n]
  var node = document.createElement("ul");
  var textnode = document.createTextNode (item);
  node.appendChild(textnode);
  document.getElementById("answer_5").appendChild(node);
      //  for(var i = 0; i < materials.length; i++) {
      //      var item = document.createElement('li');
      //      item.appendChild(document.createTextNode(materials[i]));
      //      node.appendChild(item);}
})

//I made it
  var creator = items.filter(made => made.who_made.includes("i_did"))
  var doneBy = creator.length + " were made by their sellers"

  var node = document.createElement("li");
  var textnode = document.createTextNode (doneBy);
  node.appendChild(textnode);
  document.getElementById("answer_6").appendChild(node);
