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

$("#play").click(function() {
  var omniOsc = new Tone.OmniOscillator("C#4", "pwm");
  var ampEnv = new Tone.AmplitudeEnvelope({
	"attack": 0.1,
	"decay": 0.2,
	"sustain": 1.0,
	"release": 0.8
  }).toMaster();
  var osc = new Tone.Oscillator().connect(ampEnv).start();
  ampEnv.triggerAttackRelease("8t");
});

$("#P1").click(function() {
  synth.triggerAttackRelease("C4", "8n");
});

$("#P2").click(function() {

});

$("#P3").click(function() {

});

$("#P4").click(function() {

});

$("#P5").click(function() {

});

$("#P6").click(function() {

});
