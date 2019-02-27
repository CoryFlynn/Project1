
const synth = new Tone.MembraneSynth().toMaster();
const synthPart = new Tone.Sequence(
  function(time, note) {
    synth.triggerAttackRelease(note, "10hz", time);
  },
  notes,
  "4n"
);
synthPart.start();
