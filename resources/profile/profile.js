/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var myCodeDiv = $('#myCodeSession');
var shareCodeDiv = $('#sharedCodeSession');
var settingDiv = $('#settingSession');
var helpDiv = $('#helpSession');

$(document).ready(function(){
    shareCodeDiv.detach();
    helpDiv.detach();
    settingDiv.detach();
    
//   document.getElementById("myCodeSession").style.visibility ="hidden";
//   document.getElementById("sharedCodeSession").style.visibility ="visibility";
//   document.getElementById("settingSession").style.visibility ="hidden";
//   document.getElementById("helpSession").style.visibility ="hidden";
});

$('#myCode').on("click",function(){
   
   shareCodeDiv.detach();
   helpDiv.detach();
   settingDiv.detach();
   $('.tools').after(myCodeDiv);
});

$('#sharedCode').on("click",function(){
    
   myCodeDiv.detach();
   helpDiv.detach();
   settingDiv.detach();
   $('.tools').after(shareCodeDiv);
});

$('#settings').on("click",function(){
   myCodeDiv.detach();
   helpDiv.detach();
   shareCodeDiv.detach();
   $('.tools').after(settingDiv);
});

$('#help').on("click",function(){
   myCodeDiv.detach();
   shareCodeDiv.detach();
   settingDiv.detach();
   $('.tools').after(helpDiv);
});

