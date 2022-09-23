/*!
  * Scopy > Owner is https://github.com/khoshghalb2c;
  * Copyright 2020-2021;
  */
  function Scopy(text){
    copyTextToClipboard(text);
  }
  function copyTextToClipboard(text){
    if(!navigator.clipboard){
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function(){}, function(err){});
  }
  function fallbackCopyTextToClipboard(text){
    var textArea = document.createElement("textarea");
    textArea.value = text; 
    textArea.style.top = "0";
    textArea.style.left = "0"; 
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus(); 
    textArea.select();
    try{
      var successful = document.execCommand('copy'); 
      var msg = successful ? 'successful' : 'unsuccessful';
    }catch(err){} 
    document.body.removeChild(textArea);
  }
/*!* POWERED BY khoshghalb2c.ir *!*/
