/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   Symbol.bindElementAction(compId, symbolName, "${_give}", "mouseover", function(sym, e) {
         $(sym.lookupSelector("give")).css('background-image','url(images/q.png)');

      });
         //Edge binding end



  Symbol.bindElementAction(compId, symbolName, "${_give}", "click", function (sym, e) {
                
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
        // sym.play('MoveUp_Stage_bomb');
      if (howMove(sym, 'Stage_bomb', false)) {
          $(sym.lookupSelector("give")).css('background-image', 'url(images/qe.png)');
          $("#Stage_boom_bg").show();
      }
      else {
          $(sym.lookupSelector("give")).css('background-image', 'url(images/qe.png)')
          /*$("#Stage_boom_bg").hide();*/
      }
      });
         //Edge binding end


      

   Symbol.bindElementAction(compId, symbolName, "${_give}", "mouseout", function(sym, e) {
         $(sym.lookupSelector("give")).css('background-image','url(images/give-up.png)');
         /*howMove(sym, 'Stage_bomb', true);*/
      });
         //Edge binding end

    Symbol.bindElementAction(compId, symbolName, "${_challenge}", "click", function(sym, e) {
             // Play the timeline at a label or specific time. For example:
        // sym.play(500); or sym.play("myLabel");
        if (howMove(sym, 'Stage_container', false)){
            $(sym.lookupSelector("challenge")).css('background-image', 'url(images/ae.png)');
            $("#Stage_contents2").addClass('displayNon');
        }
        else {
            $(sym.lookupSelector("challenge")).css('background-image', 'url(images/challenge.png)');
            $("#Stage_contents2").removeClass('displayNon');
        }

        $.ajaxSetup({cache:false});
        sym.$("info").load('sendIdea.html');

    });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         //set the originals
           var originalWinWidth = $(window).width();
         
           //set the original font size
         var originalFontSize = 22;
         var headingFontSize = 22;
         var inputFontSize = 22;
         var queoneFontSize = 20;
         var btnFontSize = 20;
         var infoFontSize = 11;
         
         
           //set the ratio of change for each size change
           var ratioOfChange = 100;
         
           //set the font size using jquery
         sym.$("whatdo").css("font-size", originalFontSize);
         sym.$("whatis").css("font-size", headingFontSize);
         sym.$("info").css("font-size", inputFontSize);
         sym.$("question").css("font-size", queoneFontSize);
         sym.$("sumi").css("font-size", btnFontSize);
         sym.$("mc").css("font-size", infoFontSize);
         
         
           $(window).resize(function()
           {
               //get the width and height as the window resizes
               var winWidth = $(window).width();
         
               //get the difference in width
               var widthDiff = winWidth - originalWinWidth;
         
               //check if the window is larger or smaller than the original
               if(widthDiff > 0)
               {
                   //our window is larger than the original so increase font size
                   var pixelsToIncrease = Math.round(widthDiff / ratioOfChange);
         
                   //calculate the new font size
                   var newFontSize = originalFontSize + pixelsToIncrease;
                   var newHeadingFontSize = headingFontSize + pixelsToIncrease;
                   var newInputFontSize = inputFontSize + pixelsToIncrease;
                   var newQueoneFontSize = queoneFontSize + pixelsToIncrease;
                   var newBtnFontSize = btnFontSize + pixelsToIncrease;
                   var newInfoFontSize = infoFontSize + pixelsToIncrease;
         
                   //set new font size
                   sym.$("whatdo").css("font-size", newFontSize);
                   sym.$("whatis").css("font-size", newHeadingFontSize);
                   sym.$("info").css("font-size", newInputFontSize);
                   sym.$("question").css("font-size", newQueoneFontSize);
                   sym.$("sumi").css("font-size", newBtnFontSize);
                   sym.$("mc").css("font-size", newInfoFontSize);
         
               }
               else
               {
                   //our window is smaller than the original so decrease font size
                   var pixelsToDecrease = Math.round(Math.abs(widthDiff) / ratioOfChange);
         
                   //calculate the new font size
         var newFontSize = originalFontSize - pixelsToDecrease;
         var newHeadingFontSize = headingFontSize - pixelsToDecrease;
         var newInputFontSize = inputFontSize - pixelsToDecrease;
         var newQueoneFontSize = queoneFontSize - pixelsToDecrease;
         var newBtnFontSize = btnFontSize - pixelsToDecrease;
         var newInfoFontSize = infoFontSize - pixelsToDecrease;
         
                   //set the new font size
                    sym.$("whatdo").css("font-size", newFontSize);
                    sym.$("whatis").css("font-size", newHeadingFontSize);
                    sym.$("info").css("font-size", newInputFontSize);
                    sym.$("question").css("font-size", newQueoneFontSize);
                    sym.$("sumi").css("font-size", newBtnFontSize);
                    sym.$("mc").css("font-size", newInfoFontSize);
         
               }
           })
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9165, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10858, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_home}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('start');
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12998, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14426, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_challenge}", "mouseover", function (sym, e) {
          submitImg($(sym.lookupSelector("challenge")), 'images/a.png');
         /*if($("#Stage_container").attr('style').indexOf('-74') > -1){
         	$(sym.lookupSelector("challenge")).css('background-image','url(images/a.png)');
         }else{
         	$(sym.lookupSelector("challenge")).css('background-image','url(images/ae.png)');
         }*/
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_challenge}", "mouseout", function(sym, e) {
          // insert code to be run when the mouse is moved off the object
          submitImg($(sym.lookupSelector("challenge")), 'images/challenge.png');
         /*if($("#Stage_container").attr('style').indexOf('-74') > -1){
         	$(sym.lookupSelector("challenge")).css('background-image','url(images/challenge.png)');
         }else{
         	$(sym.lookupSelector("challenge")).css('background-image','url(images/ae.png)');
         }*/

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_one1}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
          // sym.play(500); or sym.play("myLabel");
          howMove(sym, "Stage_contentsCopy", false);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_one1}", "mouseout", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         /*if($("#Stage_contentsCopy").attr("style").indexOf("top: 55%")>-1)
         sym.play('MoveDown1');*/

         howMove(sym, "Stage_contentsCopy", true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_on2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
          // sym.play(500); or sym.play("myLabel");
          howMove(sym, "Stage_contents2", false);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_on2}", "mouseout", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
          howMove(sym, "Stage_contents2", true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_fla}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
          howMove(sym, "Stage_success", false);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_fla}", "mouseout", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         /*if($("#Stage_success").attr('style').indexOf('top: 41') > -1 && $("#Stage_success").attr('style').indexOf('left: 40') > -1){
         sym.play('PopDown');
         }*/
         
          howMove(sym, "Stage_success", true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15406, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17191, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closed}", "click", function(sym, e) {
         // insert code for mouse click here
         if (howMove(sym, 'Stage_bomb', false)) {
                       $(sym.lookupSelector("give")).css('background-image', 'url(images/qe.png)');
                       $("#Stage_boom_bg").hide();
                   }
                   else {
                       $("#Stage_closed").hide();
                       $("#Stage_boom_bg").hide();
                       /*$("#Stage_boom_bg").hide();*/
                   }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'light'
   (function(symbolName) {   
   
   })("light");
   //Edge symbol end:'light'

   //=========================================================
   
   //Edge symbol: 'btn1'
   (function(symbolName) {   
   
   })("btn1");
   //Edge symbol end:'btn1'

   //=========================================================
   
   //Edge symbol: 'one1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5895, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7930, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('roof');

      });
      //Edge binding end

   })("one1");
   //Edge symbol end:'one1'

   //=========================================================
   
   //Edge symbol: 'on2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6625, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9097, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('roof2');

      });
      //Edge binding end

   })("on2");
   //Edge symbol end:'on2'

   //=========================================================
   
   //Edge symbol: 'fla'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_flag}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('PopUp');
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_flag}", "mouseout", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         if($("#Stage_success").attr('style').indexOf('top: 41') > -1 && $("#Stage_success").attr('style').indexOf('left: 40') > -1){
         sym.play('PopDown');
         }
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10093, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('roof3');

      });
      //Edge binding end

   })("fla");
   //Edge symbol end:'fla'

   //=========================================================
   
   //Edge symbol: 'pcnemo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8612, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('roof3');

      });
      //Edge binding end

   })("pcnemo");
   //Edge symbol end:'pcnemo'

   //=========================================================
   
   //Edge symbol: 'tet'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9415, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10937, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('roof4');

      });
      //Edge binding end

   })("tet");
   //Edge symbol end:'tet'

   //=========================================================
   
   //Edge symbol: 'logolo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('start5');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8325, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("logolo");
   //Edge symbol end:'logolo'

})(jQuery, AdobeEdge, "EDGE-11445201");