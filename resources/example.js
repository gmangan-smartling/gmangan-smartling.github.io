// <sl:translate>    
var heading = "New Heading text rendered by a Javascript function."
// </sl:translate>  
    function heading(){
      document.getElementById('heading').innerHTML = heading;
    }
    document.addEventListener("DOMContentLoaded", function() {
      const myTimeout = setTimeout(heading, 1000);
  });
