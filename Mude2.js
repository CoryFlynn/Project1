$("#P1").click(function() {
  var omniOsc = new Tone.OmniOscillator("D4", "pwm");
  var ampEnv = new Tone.AmplitudeEnvelope({
	"attack": 0.1,
	"decay": 0.2,
	"sustain": 1.0,
	"release": 0.8
  }).toMaster();
  var osc = new Tone.Oscillator().connect(ampEnv).start();
  ampEnv.triggerAttackRelease("8t");
});

$("#P2").click(function() {
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

$("#P3").click(function() {
  var omniOsc = new Tone.OmniOscillator("Eb2", "pwm");
  var ampEnv = new Tone.AmplitudeEnvelope({
	"attack": 0.1,
	"decay": 0.2,
	"sustain": 1.0,
	"release": 0.8
  }).toMaster();
  var osc = new Tone.Oscillator().connect(ampEnv).start();
  ampEnv.triggerAttackRelease("8t");
});

$("#P4").click(function() {
  var omniOsc = new Tone.OmniOscillator("C2", "pwm");
  var ampEnv = new Tone.AmplitudeEnvelope({
	"attack": 0.1,
	"decay": 0.2,
	"sustain": 1.0,
	"release": 0.8
  }).toMaster();
  var osc = new Tone.Oscillator().connect(ampEnv).start();
  ampEnv.triggerAttackRelease("8t");
});

$("#P5").click(function() {
  var omniOsc = new Tone.OmniOscillator("C2", "pwm");
  var ampEnv = new Tone.AmplitudeEnvelope({
	"attack": 0.1,
	"decay": 0.2,
	"sustain": 1.0,
	"release": 0.8
  }).toMaster();
  var osc = new Tone.Oscillator().connect(ampEnv).start();
  ampEnv.triggerAttackRelease("8t");
});

$("#P6").click(function() {
  var omniOsc = new Tone.OmniOscillator("C2", "pwm");
  var ampEnv = new Tone.AmplitudeEnvelope({
	"attack": 0.1,
	"decay": 0.2,
	"sustain": 1.0,
	"release": 0.8
  }).toMaster();
  var osc = new Tone.Oscillator().connect(ampEnv).start();
  ampEnv.triggerAttackRelease("8t");
});
