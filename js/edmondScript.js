$(document).ready(function() {
	$("#estimationModeBtn").click(function () {
		$(".estimationMode").toggle();
		//plusminus1 = $("#expand").text();
		//if (plusminus1 === "+") {
		//	$("#expand").text("-");
		//} else {
		//	$("#expand").text("+");
		//}
	});
	
	$("#pretrainedBtn").click(function () {
		$(".pretrainedMode").toggle();
	});
	
	$("#trainTestSameBtn").click(function () {
		$(".trainTestSame").toggle();
	});
	
	$("#TDABtn").click(function () {
		$(".TDA").toggle();
	});
	
	$("#STDABtn").click(function () {
		$(".STDA").toggle();
	});
	
	$("#localSynthBtn").click(function () {
		$(".localSynth").toggle();
	});
});