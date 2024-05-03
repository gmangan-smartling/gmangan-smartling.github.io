txt='{"response":{"comp_div": "Div text with slCompositeString attribute", "inside_comp": " text for nested p tag in div with slCompositeString.", "div_no_comp": "This div has no attribute", "p_no_comp": " and p tag is nested in a no comp div.", "div_create_node": "This div is created differently with a nested p tag created in JS ", "p_node_creation": "p tag from javascript only."}}'
console.log(txt)
var myObj = JSON.parse(txt);
function compDiv(){
document.getElementById('comp_div').innerHTML = myObj.response.comp_div + "<p>" + myObj.response.inside_comp + "</p>"
}
function noCompDiv(){
document.getElementById('no_comp_div').innerHTML = myObj.response.div_no_comp + "<p>" + myObj.response.p_no_comp + "</p>"
}
function createNodeJS(){
document.getElementById('div_create_node').innerHTML = myObj.response.div_create_node
const para = document.createElement("p");

// Create a text node:
const node = document.createTextNode(myObj.response.p_node_creation);

// Append text node to the p element:
para.appendChild(node);

// Append the p element to the body:
document.getElementById("div_create_node").appendChild(para);
}
