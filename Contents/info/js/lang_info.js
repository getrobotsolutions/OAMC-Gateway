$(document).ready(function() {
          $('#list1').hide(); 

          //Change to English
              //$('#change-us').click(function(){
               
                $('.titl1').text("Oman Airport Information page");
                $('#txt1').text("Here you can discover all of the important services, and where they are located.");
                $('#txt2').text("Select a button on the down left to get started.");

                $('#cafe').text("Cafe");
                $('#restau').text("Restaurants");
                $('#arloung').text("Airport Lounges");
                $('#inside').text("Inside Airport");
                $('#outside').text("Outside Airport");

                $('#c3').text("Starbucks 1");
                $('#c4').text("Battler");
                $('#c5').text("Mamma Roti Cafe");
                $('#c6').text("Caribou Coffee");
                $('#c7').text("Wayne's Coffee");
                $('#c8').text("Dunkin' Donuts");
                $('#c9').text("Java Coffee");
                $('#c10').text("Starbucks 2");

               
                $('#r18').text("Outback");

                $('#10').text("Alfursan Lounges");
                $('#11').text("Lounge 1");
                $('#12').text("Lounge 2");
                $('#btn').text("View Menu");
                
           // });

              //Change to Arabic
              $('#change-ar').click(function(){
                
                $('.titl1').text("صفحة معلومات مطار الرياض");
                $('#txt1').text("هنا يمكنك اكتشاف جميع الخدمات الهامة، وحيث أنها تقع.");
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

                
              });

                    $(".hr-ver-menu ul").siblings().before("<span class='hr_tog'></span>");
                    var subM = $(".hr-ver-menu ul");
                    $(".hr_tog ~ a").click(function(){
                      //Disable URL from Toggle Click 
                      $(this).attr('href','#');
                      //Formatting active tabs
                      $(this).siblings().toggleClass("pl-active");
                      $(this).toggleClass("hr-active");
                      //Close Other tabs
                      var mp = $(this).next("ul").parents(".hr-ver-menu").find('ul').slideUp();
                      //Open current tabs only
                      $(this).next("ul").slideToggle();
                    })
        

          function display(data)
          { 
              console.log(data);
                function createCallback(num){

                      return function(){  
                        // alert('you clicked' + num);
                        $("#bdyt"+num).html(data.Book1[num].DETAIL_BASE);
                        $("#add"+num).text("Location : "+data.Book1[num].ADDRESS_BASE);
                        $("#ph"+num).text("Phone : "+data.Book1[num].PHONE_BASE);
                  }
                }

                //Prayer Room
                $('#btn2').click(function(){
                     $("#rcar,#ainfo,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#tsale").show();
                     $('.v-menu-title').text("Prayer Room");
                     var url = data.Book1[0].IMG_SRC;
                     //var url = "photo/submenu/buyuk/ticket.jpg";
                     
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 34%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 0; i <= 6; i++) {
                        $('#t'+i).text(data.Book1[i].NAME_BASE);
                        $('#t' + i).click( createCallback( i ) );
                      }
                 });
                 
                //Rent a car
                $('#btn1').click(function(){
                 
                   

                     $("#tsale,#ainfo,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#rcar").show();
                     $('.v-menu-title').text("Transportation");
                     var url = data.Book1[7].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"99% 42%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 7; i <= 10; i++) {
                        
                        $('#r'+i).html(data.Book1[i].NAME_BASE);
                       // var html1 = data.Book1[i].NAME_BASE; 
                        //$('#r'+i).html(html1);
                        $('#r'+ i).click( createCallback( i ) );
                      }
                 });

                //Airport Lounges
                $('#btn3').click(function(){
                     $("#tsale,#rcar,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#ainfo").show();
                     $('.v-menu-title').text("Airport Lounges");
                     // var url = "photo/submenu/buyuk/information.jpg";
                     var url = data.Book1[11].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 48%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 11; i <= 13; i++) {
                        $('#a'+i).text(data.Book1[i].NAME_BASE);
                        $('#a' + i).click( createCallback( i ) );
                      }
                 });

                //Baggage
                $('#btn4').click(function(){
                     $("#tsale,#rcar,#ainfo,#smoke,#taxi,#aryd,#htl").hide(); $("#bag").show();
                     $('.v-menu-title').text("Baggage");
                     var url = data.Book1[14].IMG_SRC;
                     // var url = "photo/submenu/buyuk/baggage.jpg";
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 30%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 14; i <= 18; i++) {
                        $('#b'+i).text(data.Book1[i].NAME_BASE);
                        $('#b' + i).click( createCallback( i ) );
                      }
                 });

                //Smoking Area
                $('#btn5').click(function(){
                     $("#tsale,#rcar,#ainfo,#bag,#taxi,#aryd,#htl").hide(); $("#smoke").show();
                     $('.v-menu-title').text("Smoking Area");
                     var url = data.Book1[19].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 30%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 19; i <= 22; i++) {
                        $('#s'+i).text(data.Book1[i].NAME_BASE);
                        $('#s' + i).click( createCallback( i ) );
                      }
                 });

                //Taxi
                $('#btn6').click(function(){
                     $("#tsale,#rcar,#ainfo,#bag,#smoke,#aryd,#htl").hide(); $("#taxi").show();
                     $('.v-menu-title').text("Bathrooms");
                     var url = data.Book1[23].IMG_SRC;
                     //var url = "photo/submenu/buyuk/taxi.jpg";
                    $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 30%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 23; i <= 23; i++) {
                        $('#t'+i).text(data.Book1[i].NAME_BASE);
                        $('#t' + i).click( createCallback( i ) );
                      }
                 });

                //About Riyadh
                $('#btn7').click(function(){
                     $("#tsale,#rcar,#ainfo,#bag,#smoke,#taxi,#htl").hide(); $("#aryd").show();
                     $('.v-menu-title').text("About Muscat International Airport");
                     //var url = "photo/submenu/buyuk/about.jpg";
                     var url = data.Book1[24].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 45%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 24; i <= 26; i++) {
                        $('#ar'+i).text(data.Book1[i].NAME_BASE);
                        $('#ar' + i).click( createCallback( i ) );
                      }
                 });

                
                      
          }
          function display_ar(data)
          { 
              console.log(data);
                function createCallback(num){

                      return function(){  
                        // alert('you clicked' + num);
                        $("#bdyt"+num).html(data.Book1[num].DETAIL_LOCAL);
                        $("#add"+num).text("Location : "+data.Book1[num].ADDRESS_LOCAL);
                        $("#ph"+num).text("Phone : "+data.Book1[num].PHONE_LOCAL);
                  }
                }
                //Rent a car
                $('#btn1').click(function(){
                     $("#tsale,#ainfo,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#rcar").show();
                     $('.v-menu-title').text("وسائل النقل");
                     var url = data.Book1[7].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"99% 42%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 7; i <= 10; i++) {
                        
                        $('#r'+i).html(data.Book1[i].NAME_LOCAL);
                       // var html1 = data.Book1[i].NAME_BASE; 
                        //$('#r'+i).html(html1);
                        $('#r'+ i).click( createCallback( i ) );
                      }
                 });

                //Prayer Room
                $('#btn2').click(function(){
                     $("#rcar,#ainfo,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#tsale").show();
                     $('.v-menu-title').text("غرفة الصلاة");
                     var url = data.Book1[0].IMG_SRC;
                     //var url = "photo/submenu/buyuk/ticket.jpg";
                     
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 34%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 0; i <= 6; i++) {
                        $('#t'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#t' + i).click( createCallback( i ) );
                      }
                 });

                //Airport Lounges
                $('#btn3').click(function(){
                     $("#tsale,#rcar,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#ainfo").show();
                     $('.v-menu-title').text("صالات المطار");
                     // var url = "photo/submenu/buyuk/information.jpg";
                     var url = data.Book1[11].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 48%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 11; i <= 13; i++) {
                        $('#a'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#a' + i).click( createCallback( i ) );
                      }
                 });

                //Ticket Sale
                /*$('#btn2').click(function(){
                     $("#rcar,#ainfo,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#tsale").show();
                     $('.v-menu-title').text("بيع التذاكر");
                     var url = data.Book1[0].IMG_SRC;
                     //var url = "photo/submenu/buyuk/ticket.jpg";
                     
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 34%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 0; i <= 6; i++) {
                        $('#t'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#t' + i).click( createCallback( i ) );
                      }
                 });

                //Rent a car
                $('#btn1').click(function(){
                     $("#tsale,#ainfo,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#rcar").show();
                     $('.v-menu-title').text("استئجار سيارة");
                     var url = data.Book1[7].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"99% 42%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 7; i <= 13; i++) {
                        $('#r'+i).html(data.Book1[i].NAME_LOCAL);
                        $('#r'+ i).click( createCallback( i ) );
                      }
                 });

                //Airport Info
                $('#btn3').click(function(){
                     $("#tsale,#rcar,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#ainfo").show();
                     $('.v-menu-title').text("معلومات المطار");
                     // var url = "photo/submenu/buyuk/information.jpg";
                     var url = data.Book1[19].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 48%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 18; i <= 24; i++) {
                        $('#a'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#a' + i).click( createCallback( i ) );
                      }
                 });

                //Baggage
                $('#btn4').click(function(){
                     $("#tsale,#rcar,#ainfo,#smoke,#taxi,#aryd,#htl").hide(); $("#bag").show();
                     $('.v-menu-title').text("أمتعة");
                     var url = data.Book1[20].IMG_SRC;
                     // var url = "photo/submenu/buyuk/baggage.jpg";
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 30%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 20; i <= 20; i++) {
                        $('#b'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#b' + i).click( createCallback( i ) );
                      }
                 });

                //Smoking Area
                $('#btn5').click(function(){
                     $("#tsale,#rcar,#ainfo,#bag,#taxi,#aryd,#htl").hide(); $("#smoke").show();
                     $('.v-menu-title').text("منطقة مخصصة للتدخين");
                     var url = data.Book1[21].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 70%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 21; i <= 24; i++) {
                        $('#s'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#s' + i).click( createCallback( i ) );
                      }
                 });

                //Taxi
                $('#btn6').click(function(){
                     $("#tsale,#rcar,#ainfo,#bag,#smoke,#aryd,#htl").hide(); $("#taxi").show();
                     $('.v-menu-title').text("سيارة اجره");
                     var url = data.Book1[25].IMG_SRC;
                     //var url = "photo/submenu/buyuk/taxi.jpg";
                    $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 30%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 25; i <= 25; i++) {
                        $('#t'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#t' + i).click( createCallback( i ) );
                      }
                 });

                //About Riyadh
                $('#btn7').click(function(){
                     $("#tsale,#rcar,#ainfo,#bag,#smoke,#taxi,#htl").hide(); $("#aryd").show();
                     $('.v-menu-title').text("عن الرياض");
                     //var url = "photo/submenu/buyuk/about.jpg";
                     var url = data.Book1[27].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 45%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 26; i <= 27; i++) {
                        $('#ar'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#ar' + i).click( createCallback( i ) );
                      }
                 });

                 //Hotels
                $('#btn8').click(function(){
                     $("#tsale,#rcar,#ainfo,#bag,#smoke,#taxi,#aryd").hide(); $("#htl").show();
                     $('.v-menu-title').text("الفنادق");
                     var url = data.Book1[28].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 43%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 28; i <= 33; i++) {
                        $('#h'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#h' + i).click( createCallback( i ) );
                      }
                 });*/
                      
          }


            $.ajax({
              type: "GET",

              url: "http://localhost/json/json.json",
            
              dataType: "JSON",
              success: function(data) {
                display(data);
                $('#change-us').click(function(event){
                    display(data);
                  });
                
                $('#change-ar').click(function(event){
                 display_ar(data);
                });
             }                
        });

     });