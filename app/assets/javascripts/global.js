//Clear search fields //Add <%= f.submit "Clear", :name => nil, :id => :q_reset %> to the bottom of your search form
$(function(){
  $("#q_reset").click(function(index, element){
    $("input,select").not(':submit').val('')
  });
});

//Append the 'required' class to any element with a required field in it so that css can prepend an asterisk to it
$(function(){
  $("[required]").each(function(index, element){
    $(element).parent().addClass("required");
    $(element).parents("form").addClass("with-required");
  });
});

//Allow multi-select, datepicker, and timepicker to work on all browsers
$(document).ready(function() {
    $('.selectpicker').selectpicker();

    $( ".datepicker" ).datetimepicker({
      format: 'YYYY-MM-DD',
      showTodayButton: true,
      showClear: true,
      showClose: true
    });

    $( ".timepicker" ).datetimepicker({
      format: 'h:mm A'
    });
});

//Toggle the loading div
//Give a form onsubmit: "toggle_loading()" to allow forms that submit to long actions to show the loading div
$(function(){
  $('#loading').hide();
});
function toggle_loading(){
  $('#loading').toggle();
}

//Toggle a forms submit button when a checkbox is checked/unchecked
function accept_and_enable(box)
{
    var submit = document.getElementById("TOC");
    alert($(box));
    console.log($(box).parent().parent().parent()[0]);

    if (box.checked === true)
    {
        submit.disabled = false;
    }
    else
    {
        submit.disabled = true;
    }
}
