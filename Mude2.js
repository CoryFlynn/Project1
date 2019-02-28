
$("#P1").click(function() {
  var sy = new Tone.Synth().toMaster();
  sy.triggerAttackRelease("C4", "8t");
});

$("#P2").click(function() {
  var sy = new Tone.Synth().toMaster();
  sy.triggerAttackRelease("D4", "8t");
});

$("#P3").click(function() {
  var omniOsc = new Tone.OmniOscillator("D3", "pwm");
  var ampEnv = new Tone.AmplitudeEnvelope().toMaster();
  var osc = new Tone.OmniOscillator().connect(ampEnv).start();
  ampEnv.triggerAttackRelease("4t");
});

$("#P4").click(function() {
  var sy = new Tone.Synth().toMaster();
  sy.triggerAttackRelease("E4", "8t");
});

$("#P5").click(function() {
  var sy = new Tone.Synth().toMaster();
  sy.triggerAttackRelease("F#4", "8t");
});

$("#P6").click(function() {
  var omniOsc = new Tone.OmniOscillator("C4", "pwm");
  var ampEnv = new Tone.AmplitudeEnvelope({
	"attack": 0.1,
	"decay": 0.2,
	"sustain": 1.0,
	"release": 0.8
  }).toMaster();
  var osc = new Tone.Oscillator().connect(ampEnv).start();
  ampEnv.triggerAttackRelease("4t");
});
