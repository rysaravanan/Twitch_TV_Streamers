$(document).ready(function(){
 var channel=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
 $.each(channel ,function(i,value){
   $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' +value,function(data){
     if (data.stream==null){
      $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/'+ value, function(data1){
         if(data1.status == 404) {
            $("#unavailable").append("<div class='unavail'><img src='https://pbs.twimg.com/profile_images/509073338191183872/fYdty6yd.png' class='logo'><h5>"+ value +"</h5><p>"+ data1.message + "</p></div>");
          }
            else {
            $("#off").append("<div class='off-cont'><a href='https://www.twitch.tv/"+ data1.name+"' target='_blank'><img src="+ data1.logo +" class='logo' ><h5>"+ data1.display_name +"</h5></a><p>"+data1.status+"</p></div>");
          }
        });
        } else {
      $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/'+ value,function(data2){
        $("#available").append("<div class='avail'><a href='https://www.twitch.tv/"+ data2.name+"' target='_blank'><img src="+ data2.logo +" class='logo' ><h5>"+ data2.display_name+"</h5></a><p>"+ data2.status +"</p></div>")
   });
        }
 });
 });
  $('#online').click(function() {
    $('#unavailable, #off').hide();
    $('#available').show();
  });
  
  $('#offline').click(function() {
    $('#unavailable, #available').hide();
    $('#off').show()
  });
  
  $('#all').click(function(){
    $('#unavailable, #available, #off').show();
  });
  
});