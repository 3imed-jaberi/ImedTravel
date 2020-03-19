$(document).ready(function () {
let edit = new URL(window.location.href).searchParams.get("edit");
  if ( edit === 'true' ){
    $('#dasboard').hide();
    $("#printFrom").hide();
    $('#add_update_forms').show();
  }else{
    $('#dasboard').show();
    $("#printFrom").hide();
    $('#add_update_forms').hide();

    $('#add_btn').click(function(){
      $('#dasboard').hide();
      $('#add_update_forms').show();
    });
  }

  $('#money_btn').click(function(){
    $("#msg").show();
    $.get("http://localhost/admin/crud%20api/sum.php", function(data, status){
     // console.log("Data: " + data + "\nStatus: " + status);
      $("#msg").text(" all money received : "+data);
      setTimeout(function(){
        $("#msg").hide();
      },2000);
    });
  });


  $('#print_btn').click(function(){
    $("#printFrom").show();
    setTimeout(function(){
      $("#printFrom").hide();
    },10000);
  });
  
});
