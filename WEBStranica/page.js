$(document).ready(function(){
    var lat;
    var lon;
   $.getJSON("https://ipapi.co/json/",function(data2){
     lat=data2.latitude;
     lon=data2.longitude;
     var api='https://api.apixu.com/v1/current.json?key=b2c36e0da3ee4b02961232448170605&q='+lat+','+lon;
  var city=data2.city;
     
     $(".city").html(city);
     $.getJSON(api,function(data){  
          
   
     
      var ctemp=data.current.temp_c;
       
     
      
    
    
      var wind=data.current.wind_kph;
     $(".wind").html(wind+' KPH');
      
   
      
       var day=data.current.is_day;
       if(day==1)
         {
           $(".day").html("DAN");
           
         }
       else{
         $(".day").html("NOĆ");
         
       }
    
      
        
      $(".tempc").html(ctemp + " °C");
     
  
    if(ctemp>25)
      {
        $(".desnid").css("background-image","url(http://marketingland.com/wp-content/ml-loads/2014/12/weather-temperature-thermometer-hot-heat-ss-1920.jpg)");
        
      }
      else if(ctemp<=25 && ctemp>16)
        {
         
             $(".desnid").css("background-image","url(placeholder_thumb_1152x648.jpg)");
        }
       else if(ctemp<=16 && ctemp>5)
        {
            $(".desnid").css("background-image","url(rainy-weather.jpg)");
          
        }
      else{
        $(".desnid").css("background-image","url(https://images.unsplash.com/photo-1519031465998-192aba33f8ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22457a9bf0adab5443a0232a0e5267f1&w=1000&q=80)");
           
      }
      
  
   }); 
   
    });
    
    
    
    
  });

  $(".navcres li").click(function(){
    $(".navcres2").slideToggle();
});
$(".navcres2 li").click(function(){
  $(".navcres2").slideToggle();
});

var galerija=document.querySelector("#omenires");
galerija.addEventListener("mousemove",(event)=>{
	var colors = ['#ccc','#6cf','#eba13a','white','gold'];

		
			var circle = document.createElement("div");
			circle.setAttribute("class", "circle");
			galerija.appendChild(circle);

			circle.style.left = event.clientX + 'px';
			circle.style.top = event.clientY + 'px';

			var color = colors[Math.floor(Math.random() * colors.length)];
			circle.style.borderColor = color;

			circle.style.transition = "all 0.5s linear 0s";

			circle.style.left = circle.offsetLeft - 20 + 'px';
			circle.style.top = circle.offsetTop - 20+ 'px';

			circle.style.width = "30px";
			circle.style.height = "30px";
			circle.style.borderWidth = "5px";
			circle.style.opacity = 0;
			
      setTimeout(function() {
        circle.remove();
      }, 300);
      

});



	



 