$(document).ready(function() {
  $("#tab_bar").show();
  $("#H_page").hide();
  $("#P_page").show();
});

$("#H_tab").click(function() {
  $("#tab_bar").show();
  $("#H_page").show();
  $("#P_page").hide();
});

$("#P_tab").click(function() {
  $("#tab_bar").show();
  $("#H_page").hide();
  $("#P_page").show();
});
