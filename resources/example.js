txt=/*<sl:translate_json>*/'{"sl_translate": "sl_all","response":{"heading": "Heading text rendered by a Javascript function.","introductionText": "This text is also rednered by Javascript but the client doesn\'t want this translated so thay must add markup to their HTML to do it. No rules/rewrites work here.","mainBody": "This is some more text, again added by Javascript."}}'/*</sl:translate_json>*/
    console.log(txt)
    var myObj = JSON.parse(txt);
    function heading(){
      document.getElementById('heading').innerHTML = myObj.response.heading;
    }
    function introText(){
      document.getElementById('intro').innerHTML = myObj.response.introductionText
    }
    function mBody(){
      document.getElementById('main').innerHTML = myObj.response.mainBody
    }
    document.addEventListener("DOMContentLoaded", function() {
      const myTimeout = setTimeout(heading, 1000);
      const myTimeout1 = setTimeout(introText, 2000);
      const myTimeout2 = setTimeout(mBody, 3000);
  });
