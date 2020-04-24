var Link = {
  setColor:function(color){
    var list = document.querySelectorAll('a');
    var i =0;
    while(i < list.length) {
     list[i].style.color = color;
     i=i+1;
   }
  }
}
var Body = {
  setColor:function(color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function check(mode){
  if(mode.checked == true) {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Link.setColor('powderblue');

} else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Link.setColor('blue');
  }
}
