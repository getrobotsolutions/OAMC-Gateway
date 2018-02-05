      $(document).ready(function(){
                var welcomeMessage="مرحبا. مرحبا بكم في مطارنا. للبدء، يرجى الضغط على أحد الأزرار أدناه.";
                var lan="Arabic Male";
                
                $('#content_term').text("محطة A");
                //$('#content_air').text("");
                $('#content_fly').text("اضغط هنا للبدء");
                $('#content_eat').html("تناول");
                $('#content_shop').text("محل");
                $('#content_info').html("المعلومات");
                $('#content_map').html("خريطة المبنى");
                $('#content_flights').html("معلومات الرّحلة");
                $('#content_scan').html(" امسح بطاقة الصعود للطائرة ");
                $('#content_avatar').html("الصّورة الرّمزية");
                $('#content_selfie').text("التقاط صورة");
              if(readCookie("lang")=="arabic"){
                var welcomeMessage="مرحبا. مرحبا بكم في مطارنا. للبدء، يرجى الضغط على أحد الأزرار أدناه.";
                var lan="Arabic Male";
                

                $('#content_term').text("محطة A");
                //$('#content_air').text("");
                $('#content_fly').text("اضغط هنا للبدء");
                $('#content_eat').html("تناول");
                $('#content_shop').text("محل");
                $('#content_info').html("المعلومات");
                $('#content_map').html("خريطة المبنى");
                $('#content_flights').html("معلومات الرّحلة");
                $('#content_scan').html(" امسح بطاقة الصعود للطائرة ");
                $('#content_avatar').html("الصّورة الرّمزية");
                $('#content_selfie').text("التقاط صورة");
                //$('#content_dance').html("صورتك في <br>الوجه الآلي");
              }
              else if(readCookie("lang")=="english"){
                writeCookie("lang","english");
                welcomeMessage="Hi. Welcome to our airport. To begin, please press one of the buttons below.";
                   lan="UK English Female"; 
                $('#change-ar').css({"background":"white", "color":"#4a32a4"});
                $(this).css({"background":"#4a32a4", "color":"white"});
                

                $('#content_term').text("Terminal A");
                //$('#content_air').text("Riyadh Airport");
                $('#content_fly').html("PRESS HERE TO <b>START</b>");
                $('#content_eat').text("EAT");
                $('#content_shop').text("SHOP");
                $('#content_info').text("Information");
                $('#content_map').html("Terminal Map");
                $('#content_flights').html("FLIGHTS");
                $('#content_scan').html("SCAN YOUR<br> BOARDING PASS");
                $('#content_avatar').text("CHANGE AVATAR");
                $('#content_selfie').text("TAKE SELFIE");
                //$('#content_dance').text("Dance");
                
              }
                
                //$('#content_fly').click(function(){
                   // PlaySpeech("Hi. Welcome to our airport. To begin, please press one of the buttons below.", "UK English Male");  
                //});
                 

              //Change to English
              $('#change-us').click(function(){
                // PlaySpeech("hello"); #337ab7
                writeCookie("lang","english");
                welcomeMessage="Hi. Welcome to our airport. To begin, please press one of the buttons below.";
                   lan="UK English Female"; 
                $('#change-ar').css({"background":"white", "color":"#4a32a4"});
                $(this).css({"background":"#4a32a4", "color":"white"});
                

                $('#content_term').text("Terminal A");
                //$('#content_air').text("Riyadh Airport");
                $('#content_fly').html("PRESS HERE TO <b>START</b>");
                $('#content_eat').text("EAT");
                $('#content_shop').text("SHOP");
                $('#content_info').text("Information");
                $('#content_map').html("Terminal Map");
                $('#content_flights').html("FLIGHTS");
                $('#content_scan').html("SCAN YOUR<br> BOARDING PASS");
                $('#content_avatar').text("CHANGE AVATAR");
                $('#content_selfie').text("TAKE SELFIE");
                //$('#content_dance').text("Dance");

                //$('#content_fly').click(function(){
                   // responsiveVoice.speak("Hi. Welcome to our airport. To begin, please press one of the buttons below.");  
              //});
                 //responsiveVoice.cancel();
              
              });

              //Change to Arabic
              $('#change-ar').click(function(){
                welcomeMessage="مرحبا. مرحبا بكم في مطارنا. للبدء، يرجى الضغط على أحد الأزرار أدناه.";
                lan="Arabic Male";
                writeCookie("lang","arabic");
                $('#change-us').css({"background":"white", "color":"#4a32a4"});
                $(this).css({"background":"#4a32a4", "color":"white"});

                $('.fly').text("رحلات طيران");
                $('.scan').text("مسح الصعود تمريرة الخاص بك");
                $('.map').text("خريطة المحطة الطرفية");
                $('.lang').text("Change Language");

                $('#content_term').text("محطة A");
                $('#content_air').text("");
                $('#content_fly').text("اضغط هنا للبدء");
                $('#content_eat').html("تناول");
                $('#content_shop').text("محل");
                $('#content_info').html("المعلومات");
                $('#content_map').html("خريطة المبنى");
                $('#content_flights').html("معلومات الرّحلة");
                $('#content_scan').html("امسح بطاقة الصعود للطائرة");
                $('#content_avatar').html("الصّورة الرّمزية");
                $('#content_selfie').text("التقاط صورة");
                //$('#content_dance').html("صورتك في <br>الوجه الآلي");

                //$('#content_fly').click(function(){
                    //responsiveVoice.speak("مرحبا. مرحبا بكم في مطارنا. للبدء، يرجى الضغط على أحد الأزرار أدناه.", "Arabic Male");  
                //});
                 //responsiveVoice.cancel();

              });
              $('#content_fly').click(function(){
                    responsiveVoice.speak(welcomeMessage, lan);  
              });
              responsiveVoice.cancel();

              //Change to French
              // $('#change-fr').click(function(){

                
              //   $('#change-us').css("background", "#f8f8f8");
              //   $('#change-ar').css("background", "#f8f8f8");
              //   $('#change-sp').css("background", "#f8f8f8");
              //   $('#change-ch').css("background", "#f8f8f8");
              //   $('#change-ko').css("background", "#f8f8f8");

              //   $(this).css("background", "#e7e7e7");


              //   $('#content_term').text("Terminal A");
              //   $('#content_air').text("Aéroport de Riyadh");
              //   $('#content_fly').text("Appuyez ici pour commencer");
              //   $('#content_eat').text("MANGER");
              //   $('#content_shop').text("BOUTIQUE");
              //   $('#content_info').text("INFO");
              //   $('#content_dance').text("DANSE");
              //   $('#content_selfie').text("SELFIE");
              //   $('#content_share').text("PARTAGER");
              //   $('#content_explore').text("Explorez nos concessions");

              //    $('#content_fly').click(function(){
              //       responsiveVoice.speak("Salut. Bienvenue dans notre aéroport. Pour commencer, appuyez sur l'un des boutons ci-dessous.", "French Female");  
              //   });
              //     responsiveVoice.cancel();

              // });

              // //Change to Spain
              // $('#change-sp').click(function(){
                
              //   $('#change-us').css("background", "#f8f8f8");
              //   $('#change-fr').css("background", "#f8f8f8");
              //   $('#change-ar').css("background", "#f8f8f8");
              //   $('#change-ch').css("background", "#f8f8f8");
              //   $('#change-ko').css("background", "#f8f8f8");

              //   $(this).css("background", "#e7e7e7");


              //   $('#content_term').text("Terminal A");
              //   $('#content_air').html("AEROPUERTO DE<br><br> RIYADH");
              //   $('#content_fly').text("Pulse aquí para iniciar");
              //   $('#content_eat').text("COMER");
              //   $('#content_shop').text("TIENDA");
              //   $('#content_info').text("INFO");
              //   $('#content_dance').text("BAILE");
              //   $('#content_selfie').text("SELFIE");
              //   $('#content_share').text("COMPARTIR");
              //   $('#content_explore').text("EXPLORE NUESTRAS CONCESIONES");

              //   $('#content_fly').click(function(){
              //       responsiveVoice.speak("Hola. Bienvenido a nuestro aeropuerto. Para empezar, presione uno de los botones a continuación.", "Spanish Female");  
              //   });
              //    responsiveVoice.cancel();

              // });

              // //Change to Chinese
              // $('#change-ch').click(function(){
              //   // ChangeLanguage("japanese");
              //   // PlaySpeech("こんにちは.");
              //   $('#change-us').css("background", "#f8f8f8");
              //   $('#change-fr').css("background", "#f8f8f8");
              //   $('#change-sp').css("background", "#f8f8f8");
              //   $('#change-ar').css("background", "#f8f8f8");
              //   $('#change-ko').css("background", "#f8f8f8");

              //   $(this).css("background", "#e7e7e7");


              //   $('#content_term').text("终端A");
              //   $('#content_air').text("RIYADH机场");
              //   $('#content_fly').text("按这里开始");
              //   $('#content_eat').text("吃");
              //   $('#content_shop').text("店");
              //   $('#content_info').text("信息");
              //   $('#content_dance').text("舞蹈");
              //   $('#content_selfie').text("自拍");
              //   $('#content_share').text("分享");
              //   $('#content_explore').text("探索我们的想法");

              //   $('#content_fly').click(function(){
              //       responsiveVoice.speak("你好。欢迎来到我们的机场。要开始，请按下面的其中一个按钮。", "Chinese Female");  
              //   });
              //    responsiveVoice.cancel();

              // });

              // //Change to Korean
              // $('#change-ko').click(function(){

                
              //   $('#change-us').css("background", "#f8f8f8");
              //   $('#change-fr').css("background", "#f8f8f8");
              //   $('#change-sp').css("background", "#f8f8f8");
              //   $('#change-ch').css("background", "#f8f8f8");
              //   $('#change-ar').css("background", "#f8f8f8");

              //   $(this).css("background", "#e7e7e7");


              //   $('#content_term').text("터미널 A");
              //   $('#content_air').text("리야드 에어 포트");
              //   $('#content_fly').text("시작하려면 클릭하십시오");
              //   $('#content_eat').text("먹다");
              //   $('#content_shop').text("가게");
              //   $('#content_info').text("정보");
              //   $('#content_dance').text("댄스");
              //   $('#content_selfie').text("사진");
              //   $('#content_share').text("몫");
              //   $('#content_explore').text("우리의 역량을 발휘하십시오");

              //   $('#content_fly').click(function(){
              //       responsiveVoice.speak("안녕. 우리 공항에 오신 것을 환영합니다. 시작하려면 아래 버튼 중 하나를 누르십시오.", "Korean Female");  
              //   });
              //    responsiveVoice.cancel();

              // });
          });
