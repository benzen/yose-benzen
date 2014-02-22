var htmlIndex =
      "<html>\
        <body>\
          <center>\
            <h1>Hello Yose</h1>\
            <a id='contact-me-link' href='http://www.linkedin.com/pub/benjamin-dreux/18/7a/aa6'>Contact info</a>\
          </center>\
\
          <br>\
\
          <center>\
          <a id='ping-challenge-link' href='/ping'>Ping me I'm famous</a>\
          </center>\
\
\
          <a id='repository-link' href='https://github.com/benzen/yose-benzen'>\
            <img style='position: absolute; top: 0; left: 0; border: 0;' src='https://github-camo.global.ssl.fastly.net/8b6b8ccc6da3aa5722903da7b58eb5ab1081adee/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6f72616e67655f6666373630302e706e67' alt='Fork me on GitHub' data-canonical-src='https://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png'>\
          </a>\
\
        </body>\
      </html>";
exports.homepage = htmlIndex;
var primeHtml= "\
<html>\n\
\n\
  <head>\n\
    <script src='http://code.jquery.com/jquery-1.11.0.min.js'></script>\n\
    <script>\n\
      var getResults = function(){\n\
        $.ajax({\n\
          url:'/primeFactors',\n\
          data: {number:$('#number').val()}\n\
        }).done(function(data){\n\
          var str = '';\n\
          if(data.decomposition){\n\
            str = data.number+' = '+ data.decomposition.join(' x ');\n\
          }else if(data.error) {\n\
            str = data.error;\n\
          }\n\
          $(document.body).append('<div id=\"result\">'+str+'<\\div>');\n\
        });\n\
      };\n\
    </script>\n\
  </head>\n\
  <h1 id='title'>Welcome in prime factor form</h1>\n\
  <h3 id='invitation'>Choose a number an press go to get the primes for this number</h3>\n\
\n\
\n\
    <input id='number' name='number'>\n\
\n\
    <button id='go' onClick='getResults()'>Go</button>\n\
\n\
\n\
</html>\n\
";
exports.prime = primeHtml;