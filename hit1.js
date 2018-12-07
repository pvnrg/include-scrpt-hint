// add this code in html file wherer yu want to add (include the CSS or JS files)

loadcss('css/editor.css?t=' + (+new Date));
      loadcss('css/style.css?t=' + (+new Date));
      loadjs('js/htmleditor.js?t=' + (+new Date));
      loadjs('js/htmlselector.js?t=' + (+new Date));
      loadjs('js/app.js?t=' + (+new Date));

      function loadjs(file) {
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.src = file;
          script.onload = function(){
          };
          document.body.appendChild(script);
      }

      function loadcss(file) {
          var stylesheet = document.createElement("link");
          stylesheet.type = "text/css";
          stylesheet.rel = 'stylesheet';
          stylesheet.href = file;
          stylesheet.media = 'screen,print';
          stylesheet.onload = function(){
          };
          document.head.appendChild(stylesheet);
      }