$( "#o1" ).on('mouseenter', function() {
  $('#root').css({"background": 'url(/public/2.jpg', "background-size": "cover", 'background-repeat': 'no-repeat', 'transition': 'all 0.25s ease', });
  $('#img').attr("src", "/public/Perkins.png");
}).on('mouseleave', function() {
  $('#root').css("background", 'rgb(29, 29, 29)', 'slow').dequeue();
  $('#img').attr("src", "/public/3.svg");
});


$( "#o2" ).on('mouseenter', function() {
  $('#root').css({"background": 'url(/public/3.jpg', "background-size": "cover", 'background-repeat': 'no-repeat', 'transition': 'all 0.25s ease',});
  $('#img').attr("src", "/public/Shae.png");
}).on('mouseleave', function() {
  $('#root').css("background", 'rgb(29, 29, 29)', 'slow').dequeue();
  $('#img').attr("src", "/public/3.svg");
});
$( "#o3" ).on('mouseenter', function() {
  $('#root').css({"background": 'url(/public/4.jpg', "background-size": "cover", 'background-repeat': 'no-repeat', 'transition': 'all 0.25s ease',});
  $('#img').attr("src", "/public/Rohn.png");
}).on('mouseleave', function() {
  $('#root').css("background", 'rgb(29, 29, 29)', 'slow').dequeue();
  $('#img').attr("src", "/public/3.svg");
});
$( "#o4" ).on('mouseenter', function() {
  $('#root').css({"background": 'url(/public/5.jpg', "background-size": "cover", 'background-repeat': 'no-repeat', 'transition': 'all 0.25s ease',});
  $('#img').attr("src", "/public/Vic.png");
}).on('mouseleave', function() {
  $('#root').css("background", 'rgb(29, 29, 29)', 'slow').dequeue();
  $('#img').attr("src", "/public/3.svg");
});
$( "#o5" ).on('mouseenter', function() {
  $('#root').css({"background": 'url(/public/6.jpg', "background-size": "cover", 'background-repeat': 'no-repeat', 'transition': 'all 0.25s ease',});
  $('#img').attr("src", "/public/Anvil.png");
}).on('mouseleave', function() {
  $('#root').css("background", 'rgb(29, 29, 29)', 'slow').dequeue();
  $('#img').attr("src", "/public/3.svg");
});

