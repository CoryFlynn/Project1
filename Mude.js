$(document).ready(function() {
  $("#tab_bar").show();
  $("#H_page").show();
  $("#K_page").hide();
  $("#P_page").hide();
});

$("#H_tab").click(function() {
  $("#tab_bar").show();
  $("#H_page").show();
  $("#K_page").hide();
  $("#P_page").hide();
});

$("#K_tab").click(function() {
  $("#tab_bar").show();
  $("#H_page").hide();
  $("#K_page").show();
  $("#P_page").hide();
});

$("#P_tab").click(function() {
  $("#tab_bar").show();
  $("#H_page").hide();
  $("#K_page").hide();
  $("#P_page").show();
});
