  $(document).ready(function() {
    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });
  
  $("#mapBtn").hide();
  $("#mapBtn").click(function () {
    ShowPopup($("#mapBtn").attr('dir'));
  });


  $('#s1').click(function(){
    $('.part2 #icon').attr("src","photo/Amouage.jpg");
    $('.bdy #title').text("Amouage");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("تسوق الآن!! وااستمتع  بالعطور العالميه، الفاخرة، المبتكرة التي تشيد بفن صنع العطور الراقية ");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/map.jpg');
  });
  $('#s2').click(function(){
    $('.part2 #icon').attr("src","photo/La Moda.jpg");
    $('.bdy #title').text("لامود");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("لامودا للنظارات هي تجربة حصرية في عالم النظارات تتيح لك التعرف على نفسك من جديد, لامودا مستوحاة من سلالة جديدة من مستهلكي النظارات الفاخرة جدا. تعرض لامودا مجموعة حديثة من المنتجات والنظارات الشمسية الحصرية, يعمل خبراء لامودا على توفير الراحة والأداء العالي عبر استخدام أحدث التقنيات في عالم النظارات.");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/map.jpg');
  });
              $('#s3').click(function(){
                $('.part2 #icon').attr("src","photo/Le Tabac.jpg");
                $('.bdy #title').text("حصريًا للو تاباك  ");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("كن أول من يجرب مزيج التبغ عالي الجودة ,ومجموعة متميزة من السيجار والسجائر");
              $("#mapBtn").show();
                $("#mapBtn").attr('dir','photo/maps/map.jpg');
              });
              $('#s4').click(function(){
                $('.part2 #icon').attr("src","photo/Lacoste.jpg");
                $('.bdy #title').text("لاكوست");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("تفضل ماركة بولو؟ تمتع بمجموعة مختلفة من الملابس الأنيقة والرياضية والأحذية والساعات والحقائب");
              });
              $('#s5').click(function(){
                $('.part2 #icon').attr("src","photo/Amouage.jpg");
                $('.bdy #title').text("Souvenir Shop");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
              });
              $('#s6').click(function(){
                $('.part2 #icon').attr("src","photo/Travelex.jpg");
                $('.bdy #title').text("ترافيليكس");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("منفذ لاستبدال العملات");
              });
              $('#s7').click(function(){
                $('.part2 #icon').attr("src","photo/Ooredoo.jpg");
                $('.bdy #title').text("Ooredoo");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
              });
              $('#s8').click(function(){
                $('.part2 #icon').attr("src","photo/Omantel.jpg");
                $('.bdy #title').text("Omantel");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
              });
              $('#s9').click(function(){
                $('.part2 #icon').attr("src","photo/Pure Gold.jpg");
                $('.bdy #title').text("ذهب صافي/ بيور جولد");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("يمكنك شراء المجوهرات الفاخرة والهدايا لأحبائك");
              });
              $('#s10').click(function(){
                $('.part2 #icon').attr("src","photo/Muscat Pharmacy.jpg");
                $('.bdy #title').text("صيدلية مسقط");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("متجرك المتكامل للحصول على منتجات الصيدلية بالاضافة الى منتجات رعاية الطفل والمنتجات الصحية.");
              });
              $('#s11').click(function(){
                $('.part2 #icon').attr("src","photo/Muscat Duty Free – Last Minute Shop.jpg");
                $('.bdy #title').text("سوق مسقط الحرة");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("من لا يحب العروض الشيقة؟ كن أول من يتمتع بمجموعة واسعة من المنتجات والعروض الحصرية في السوق الحرة بمطار مسقط الدولي");
              });
              $('#s12').click(function(){
                $('.part2 #icon').attr("src","photo/mac.jpg");
                $('.bdy #title').text("MAC");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("الماركة المفضلة لكل خبيرة تجميل !!، استكشفي و تمتعي بأرقى واجود أنواع المكياج الاحترافي");
              });



              //Change to English
              $('#change-us').click(function(){
               location.href = "index-en.htm";
                writeCookie("lang","english");
                $('.titl1').text("Oman Airport Shop page");
                $('#txt1').text("Here you can discover all of our retail and shopping options, and where they are located.");
                $('#txt2').text("Select a button on the down left to get started.");

                $('#market').text("Market");
                $('#shop').text("Shops");
   
              });

              //Change to Arabic
              $('#change-ar').click(function(){
                
                $('.titl1').text("مطار الرياض صفحة العرض");
                $('#txt1').text("هنا يمكنك اكتشاف كل من خيارات الطعام والشراب، حيث أنها تقع، وما هو على القائمة.");
                $('#txt2').text("حدد زر في أسفل اليسار للبدء.");

                $('#market').text("سوق");
                $('#shop').text("محلات");

              });



                    $('#btn').hide();
                    //$('#leftmenu ul').hide();        
                    $('#leftmenu h3,h5').click( 
                        function() {
                            var $this = $(this);
                            //$this.next('ul').siblings('ul').slideUp();
                            //$this.next('ul').find('ul').slideUp();
                            //$this.next().slideToggle(300); 
                    });
    

          /*function display(data)
          {

            console.log(data);

                  for(var i=0; i<=6; i++){
                      function clickHandler_shop(num){
                        //For Eat 
                        $('#s'+i).text(data.Sheet1[num].NAME_BASE); 
                           $('#s'+i).click(function()
                           {      

                               $('#icon').hide();                          
                               var url = data.Sheet1[num].IMG_SRC;
                               //var url = "photo/submenu/buyuk/kingdom.jpg";
                                $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 53%"});
                                $('#title').text(data.Sheet1[num].NAME_BASE);
                                $('#location').text("Location : "+data.Sheet1[num].ADDRESS_BASE);
                                $('#desc').text(data.Sheet1[num].DETAIL_BASE);
                                $("#btn").show();
                            });
                      }//clickhandler ends here
                         clickHandler_shop(i);
                  } //for loop ends here

                   
                        //For Eat 
                        $('#s0').text(data.Sheet1[0].NAME_BASE); 
                           $('#s0').click(function()
                           {      

                               $('#icon').hide();                          
                               var url = data.Sheet1[0].IMG_SRC;
                               //var url = "photo/submenu/buyuk/kingdom.jpg";
                               $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"99% 127%"});
                                $('#title').text(data.Sheet1[0].NAME_BASE);
                                $('#location').text("Location : "+data.Sheet1[0].ADDRESS_BASE);
                                $('#desc').text(data.Sheet1[0].DETAIL_BASE);
                                $("#btn").show();
                              });
                         
          }


          function display_ar(data)
          {

            console.log(data);

                  for(var i=0; i<=6; i++){
                      function clickHandler_shop(num){
                        //For Eat 
                        $('#s'+i).text(data.Sheet1[num].NAME_LOCAL); 
                           $('#s'+i).click(function()
                           {      

                               $('#icon').hide();                          
                               var url = data.Sheet1[num].IMG_SRC;
                               //var url = "photo/submenu/buyuk/kingdom.jpg";
                                $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 53%"});
                                $('#title').text(data.Sheet1[num].NAME_LOCAL);
                                $('#location').text("Location : "+data.Sheet1[num].ADDRESS_LOCAL);
                                $('#desc').text(data.Sheet1[num].DETAIL_LOCAL);
                                $("#btn").show();
                              });
                         }//clickhandler ends here
                         clickHandler_shop(i);
                  } //for loop ends here

                   
                        //For Eat 
                        $('#s0').text(data.Sheet1[0].NAME_LOCAL); 
                           $('#s0').click(function()
                           {      

                               $('#icon').hide();                          
                               var url = data.Sheet1[0].IMG_SRC;
                               //var url = "photo/submenu/buyuk/kingdom.jpg";
                               $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"99% 127%"});
                                $('#title').text(data.Sheet1[0].NAME_LOCAL);
                                $('#location').text("Location : "+data.Sheet1[0].ADDRESS_LOCAL);
                                $('#desc').text(data.Sheet1[0].DETAIL_LOCAL);
                                $("#btn").show();
                              });
                         
          }*/

           /* $.ajax({
              type: "GET",

              url: "https://api.myjson.com/bins/c7j49",
            
              dataType: "JSON",
              success: function(data) {
                //display_ar(data);
                $('#change-us').click(function(event){
                   // display(data);
                  });
                
                $('#change-ar').click(function(event){
                 // display_ar(data);
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
  var dialogTop =  (maskHeight/3) - ($('#dialog-box').height());  
  var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
  
  document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="700" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
        

}