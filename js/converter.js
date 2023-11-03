const inputBPM = document.getElementById('input-bpm');
const inputTimeSigTop = document.getElementById('input-timesigtop');
const intputTimeSigBottom = document.getElementById('input-timesigbottom');
const outputMeasureDuration = document.getElementById('output-measureduration');
const calculateBtn = document.getElementById('calculate-btn');
var frm = document.getElementById('calculator');

function calculateMeasureDuration(bpm, timesigtop, timesigbottom) {
  return ((60/bpm)*timesigtop)/(timesigbottom/4);
}

calculateBtn.onclick = function() {
  const bpm = parseInt(inputBPM.value);
  const timesigtop = parseInt(inputTimeSigTop.value);
  const timesigbottom = parseInt(intputTimeSigBottom.value);

  const measureDuration = calculateMeasureDuration(bpm, timesigtop, timesigbottom);
  outputMeasureDuration.value = (Math.round(measureDuration * 100) / 100) + ' s';
};