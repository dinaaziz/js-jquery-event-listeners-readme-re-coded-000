//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});

function getIt(){
  $("p").on('click',function(){
  alert("Hey!");
    });
}


function frameIt(){
  $('img').on('load',function(){
    $('img').addClass("tasty");
  });
}

function pressIt(){
  $('input').on('keydown',function(){
    if(key.which==103)
			alert('g was pressed');
  });
}

function submitIt(){
  $('form').on('submit',function(){
    alert("Your form is going to be submitted now.");
  });
}
