$(document).ready(function(){

  $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });
  $("#btn").hide();
  $("#mapBtn").hide();
  $("#btn").click(function () {
    ShowPopup($("#btn").attr('dir'));
    //$("$list1").show();

  });
  $("#mapBtn").click(function () {
    ShowPopup($("#mapBtn").attr('dir'));
    //$("$list1").show();

  });

  $('#c3').text("قهوة كاريبو.");
  $('#c4').text("كوستا");
  $('#c5').text("دي كيو جريل اند تشيل");
  $('#c6').text("منطقة الغذاء");
  $('#c63').text("آلي / أوتوماتيك");
  $('#c7').text("البيت الإيرلندي/ ذا ايريش هاوس");
  $('#c8').text("موكا والمزيد / موكا & مور");
  $('#c9').text("صدف");
  $('#c10').text("صبواي");
                
  $('#c3').click(function(){
    $('.part2 #icon').attr("src","photo/Caribou-Coffee.jpg");
    $('.bdy #title').text("قهوة كاريبو.");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("المكان المثالي للقهوة المميزة والراحة الكافية قبل رحلتلك القادمة");
    $("#btn").show();
    $("#btn").attr('dir','photo/Caribou-Coffee-Prices.png');
    $("#mapBtn").attr('dir','photo/maps/aribou-Coffee.jpg');
    $("#mapBtn").show();
  });
              $('#c4').click(function(){
                $('.part2 #icon').attr("src","photo/Costa Coffee.jpg");
                $('.bdy #title').text("كوستا");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("هل انت من محبي القهوة؟ لا تضيع فرصتك لتجربة الفهوة الطازجة واللاتيه. ماكياتو وكورتو لمحبي النكهات.");
                $("#btn").show();
                $("#btn").attr('dir','photo/costa-drinks.png');
                $("#mapBtn").show();
                
              });
              $('#c5').click(function(){
                $('.part2 #icon').attr("src","photo/DQ Grill & Chill.jpg");
                $('.bdy #title').text("دي كيو جريل اند تشيل");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("لمحبي الماكولات السريعة والبرجر. استمتع بالذ ايسكريم مع تحد بعودتك للتجربة من جديد.");
                $("#btn").show();
                $("#btn").attr('dir','photo/dq-menu-prices.png');
                $("#mapBtn").show();
              });
              $('#c6').click(function(){
                $('.part2 #icon').attr("src","photo/Food Court.jpg");
                $('.bdy #title').text("منطقة الغذاء");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("مطعم للماكولات النباتية من جنوب الهند.");
                $('.list2').toggle();
              });
              $('#c61').click(function(){
                $('.part2 #icon').attr("src","photo/Food Court.jpg");
                $('.bdy #title').text("Idli.com");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("مطعم للماكولات النباتية من جنوب الهند.");
              });
              $('#c62').click(function(){
                $('.part2 #icon').attr("src","photo/Food Court.jpg");
                $('.bdy #title').text("Curry Kitchen");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("مطعم للماكولات الهندية من شمال الهند لمحبي الماكولات الحارة.");
              });
              $('#c63').click(function(){
                $('.part2 #icon').attr("src","photo/Food Court.jpg");
                $('.bdy #title').text("آلي / أوتوماتيك");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("مطعم للماكولات اللبنانية لجميع محبي الماكولات العربية بطريقة الوجبات السريعة.");
              });
              $('#c7').click(function(){
                $('.part2 #icon').attr("src","photo/The Irish House.jpg");
                $('.bdy #title').text("البيت الإيرلندي/ ذا ايريش هاوس");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("استرخي مع الماكولات حسب طلبك والمشروبات لتكون رحلة جميلة لمعدتك.");
                $("#btn").show();
                $("#btn").attr('dir','photo/irish-menu.png');
                $("#mapBtn").show();
                
              });
              $('#c8').click(function(){
                $('.part2 #icon').attr("src","photo/Moka & More.jpg");
                $('.bdy #title').text("موكا والمزيد / موكا & مور");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("استمتع بالمذاق الشهي للقهوة والمعجنات الطازجة مع الكثير من الحلويات المميزة.");
              });
              $('#c9').click(function(){
                $('.part2 #icon').attr("src","photo/Sadaf.jpg");
                $('.bdy #title').text("صدف");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("بوفيه باشهى الماكولات الايرانية والحلويات اللذيذة.");
                $("#btn").show();
                $("#btn").attr('dir','photo/sadaf-menu.png');
                $("#mapBtn").show();
              });
              $('#c10').click(function(){
                $('.part2 #icon').attr("src","photo/Subway.jpg");
                $('.bdy #title').text("صبواي");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("تبحث عن خيار صحي؟ سبواي يعطيك أفضل السندويشات والخضروات الطازجة من اختيارك");
                $("#btn").show();
                $("#btn").attr('dir','photo/menu/subway-ar.png');
              
              });
              



              //Change to English
              $('#change-us').click(function(){
                location.href = "index-us.htm";
                writeCookie("lang","english");
                /*$('.titl1').text("Oman Airport Eat page");
                $('#txt1').text("Here you can discover all of our food and beverage options, where they are located, and what's on the menu.");
                $('#txt2').text("Select a button on the down left to get started.");

                //$('#cafe').text("Cafe");
                //$('#restau').text("Restaurants");
                //$('#arloung').text("Airport Lounges");
                //$('#inside').text("Inside Airport");
                //$('#outside').text("Outside Airport");

                $('#c3').text("Caribou Coffee");
                $('#c4').text("Costa Coffee");
                $('#c5').text("DQ Grill & Chill");
                $('#c6').text("Food Court");
                $('#c7').text("The Irish House");
                $('#c8').text("Moka & More");
                $('#c9').text("Sadaf");
                $('#c10').text("Subway");

                //$('#r11').text("Burger King");
                ///$('#r12').text("Chicken Restaurant");
                //$('#r13').text("Pinkberry");
                //$('#r14').text("Domino's Pizza");
                //$('#r15').text("The Globe Restaurant");
                //$('#r16').text("Piatto");
                //$('#r17').text("Najd Village");
                //$('#r18').text("Outback");

                $('#10').text("Alfursan Lounges");
                $('#11').text("Lounge 1");
                $('#12').text("Lounge 2");
                $('#btn').text("القائمة");*/
                
            });

              //Change to Arabic
              $('#change-ar').click(function(){
                
                /*$('.titl1').text("مطار الرياض صفحة العرض");
                $('#txt1').text("هنا يمكنك اكتشاف كل من خيارات الطعام والشراب، حيث أنها تقع، وما هو على القائمة.");
                $('#txt2').text("حدد زر في أسفل اليسار للبدء.");

                $('#cafe').text("كافيه");
                $('#restau').text("مطاعم");
                $('#arloung').text("صالات المطار");
                $('#inside').text("داخل المطار");
                $('#outside').text("خارج المطار");

                $('#c3').text("ستاربكس 1");
                $('#c4').text("المقاتل");
                $('#c5').text("ماما روتي كافيه");
                $('#c6').text("كاريبو، بني اللون");
                $('#c7').text("قهوة واين");
                $('#c8').text("دنكن \"للكعك المقلي");
                $('#c9').text("قهوة جافا");
                $('#c10').text("ستاربكس 2");

                $('#r11').text("برغر كينغ");
                $('#r12').text("مطعم دجاج");
                $('#r13').text("بينك بيري");
                $('#r14').text("بيتزا دومينوز");
                $('#r15').text("مطعم غلوب");
                $('#r16').text("بيتو");
                $('#r17').text("قرية نجد");
                $('#r18').text("المناطق النائية");

                $('#10').text("صالات الفرسان");
                $('#11').text("صالة 1");
                $('#12').text("صالة 2");
                $('#btn').text("عرض القائمة");
*/
                
              });


                    //$('#btn').hide();
                    //$('#leftmenu ul').hide();        
                    $('#leftmenu h3,h5').click( 
                        function() {
                            var $this = $(this);
                            /*$this.next('ul').siblings('ul').slideUp();
                            $this.next('ul').find('ul').slideUp();
                            $this.next().slideToggle(300); */
                    });
                $('.part2 #icon').attr("src","photo/Caribou-Coffee.jpg");
                $('.bdy #title').text("Caribou Coffee");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("المكان المثالي للقهوة المميزة والراحة الكافية قبل رحلتلك القادمة");
                $("#btn").show();
                $("#btn").attr('dir','photo/Caribou-Coffee-Prices.png');
                $("#mapBtn").show();

         /* function display(data)
          { 
            console.log(data);

                  for(var i=3; i<=10; i++){
                      function clickHandler_eat(num){
                        //For Eat 
                          /* $('#c'+i).click(function()
                           {      
                               $('#icon').hide();                          
                                var url = data.Sheet1[num].IMG_SRC;
                               //photo/submenu/buyuk/cafe.png
                               // var url = "photo/submenu/buyuk/dunkin.jpg";
                                $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 80%"});
                               
                                    $('#title').text(data.Sheet1[num].NAME_BASE);
                                    $('#location').text("Location : "+data.Sheet1[num].ADDRESS_BASE);
                                    $('#desc').text(data.Sheet1[num].DETAIL_BASE);
                                    $("#btn").show();
                              });
                         }///clickhandler ends here
                         //clickHandler_eat(i);
                  } //for loop ends here

                  
                  


        

          }*/


            /*$.ajax({
              type: "GET",

              url: "https://api.myjson.com/bins/91xm1",
            
              dataType: "JSON",
              success: function(data) {
                //display(data);
                $('#change-us').click(function(event){
                    display(data);
                  });
                
                $('#change-ar').click(function(event){
                  //display_ar(data);
                });
                // console.log(data);
                // console.log(data.Sheet1[1]);
             }                
        });*/

     });

function ShowPopup(src){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
  
  document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="700" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
        

}