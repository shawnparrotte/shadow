
var boxOffset = $("#box").offset(),
    boxOffsetLeft = boxOffset.left + 49,
    boxOffsetTop = boxOffset.top + 49;


$(window).mousemove(function(event){

  var xFromCenter = boxOffsetLeft - event.pageX,
      yFromCenter = boxOffsetTop - event.pageY,
      radians = Math.atan2(yFromCenter, xFromCenter),
      angle = (radians * 180) / Math.PI;

      if(angle > 0 && angle < 180){

        $("#shadow-bottom").css({
          "visibility": "initial",
          "transform": "skewX("+(-angle-90)+"deg)"
        });

      } else {
        $("#shadow-bottom").css("visibility", "hidden");
      }

      if (angle > -90 && angle < 90){
        $("#shadow-right").css({
          "visibility": "initial",
          "transform": "skewY("+angle+"deg)"
        });
      } else {
        $("#shadow-right").css("visibility", "hidden");
      }

      if (angle > -180 && angle < 0){

      $("#shadow-top").css({
        "visibility": "initial",
        "transform": "skewX("+(-angle-90)+"deg)"
      });

      } else {
        $("#shadow-top").css("visibility", "hidden");
      }

      if ((angle > 90 && angle < 180) || (angle > -180 && angle < -90)){

      $("#shadow-left").css({
        "visibility": "initial",
        "transform": "skewY("+angle+"deg)"
      });

    } else {
      $("#shadow-left").css("visibility", "hidden");
    }


})
