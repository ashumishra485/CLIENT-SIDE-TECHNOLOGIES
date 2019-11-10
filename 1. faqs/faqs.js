"use strict";
    var $ = function(id) { return document.getElementById(id); };


    window.onload = function() {
      
        var faqs = $("faqs");
        var h2Elements = faqs.getElementsByTagName("h2");
      
        function accordionClick(){
           var h2;
           for(var i=0; i < h2Elements.length; i++){
             h2 = h2Elements[i]; 
             if(h2 == this){ 
               if(!h2.hasAttribute("class")){ 
                 closeItem(h2);
               } else{ 
                 openItem(h2); 
               }
             } else{ 
               closeItem(h2);
             }
           }
        }
      
        function openItem(h2){
            var div = h2.nextElementSibling;
            h2.removeAttribute("class")
            div.setAttribute("class", "open");
        }
      
        function closeItem(h2){
            var div = h2.nextElementSibling;
            h2.setAttribute("class", "minus")
            div.removeAttribute("class");
        }
      
        for (var i = 0; i < h2Elements.length; i++ ) {
            h2Elements[i].onclick = accordionClick;
            closeItem(h2Elements[i]);
        }

        h2Elements[0].firstChild.focus();       
    };