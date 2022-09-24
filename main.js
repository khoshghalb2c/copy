/*!
 * Scopy > Owner is https://github.com/khoshghalb2c;
 * Copyright 2020-2021;
 */
 function Scopy(text){
  /*if(!navigator.clipboard)*/
    fallbackCopyTextToClipboard(text);
  /*
  else
   navigator.clipboard.writeText(text).then(function(){}, function(err){});
   */
 }
 function fallbackCopyTextToClipboard(text){
  var textArea = document.createElement("textarea");
  textArea.value = text; 
  textArea.style.position = "fixed";
  textArea.style.maxWidth = "1px";
  textArea.style.maxHeight = "1px";
  textArea.style.top = "0";
  textArea.style.left = "0";
  document.body.appendChild(textArea);
  textArea.focus(); 
  textArea.select();
  textArea.setSelectionRange(0, 99999);
  textArea.clipboard.writeText(textArea.value);
  document.body.removeChild(textArea);
 }
/*!* POWERED BY khoshghalb2c.ir *!*/
