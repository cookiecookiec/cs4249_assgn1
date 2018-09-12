// Class used to track experiment
class ExperimentTracker {


	constructor() {
		this.trials = [];
		this.attempt = 0;
		this.trial = null;
		this.attempt = null;
		this.menuType = null;
		this.interactionType = null;
		this.menuDepth = null;
		this.targetItem = null;
		this.selectedItem = null;
		this.startTime = null;
		this.endTime = null;
		this.clicks = 0;
		this.userId = null;
	}
	
	resetTimers(){
		this.startTime = null;
		this.endTime = null;
	}

	startTimer() {
		this.startTime = Date.now();
	}

	recordSelectedItem(selectedItem) {
		this.selectedItem = selectedItem;
		this.stopTimer();
	}
	
	addClicks() {
		this.clicks++;
	}

	stopTimer() {
		
		this.endTime = Date.now();
		var t = (this.endTime - this.startTime) / 1000;
		this.trials.push([this.userId, this.trial, this.attempt, this.menuType, this.interactionType, this.menuDepth, this.targetItem, this.selectedItem, t, this.clicks])
		this.resetTimers();
		this.attempt++;
		this.clicks = 0;

	}

	newTrial() {
		this.attempt = 1;
	}

	toCsv() {
		var csvFile = "User Id,Trial,Attempt,Menu Type,Interaction Type,Menu Depth,Target Item,Selected Item,Time,Clicks\n";
		for (var i = 0; i < this.trials.length; i++) {
			csvFile += this.trials[i].join(',');
			csvFile += "\n";
		}

		var hiddenLink = document.createElement('a');
		hiddenLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvFile);
		hiddenLink.target = '_blank';
		hiddenLink.download = 'experiment.csv';
		document.body.appendChild(hiddenLink);
		hiddenLink.click();
	}


}
