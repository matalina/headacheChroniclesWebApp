function Headache(obj) 
{
	if(obj.createdOn != undefined) {
		createdOn = obj.createdOn;
	} 
	else {
		createdOn = new Date();
	}

	if(obj.modifieddOn != undefined) {
		modifiedOn = obj.modifiedOn;
	} 
	else {
		modifiedOn = null;
	}

	// new Headache
    this.startTime = obj.startTime;
    this.endTime = null;
    this.intensity = obj.intensity;
    this.location = obj.location;
    this.painType = obj.PainType;
    this.symptoms = obj.symptoms;
    this.foodBefore = obj.foodBefore;
    this.sleep = obj.sleep;
    this.activitiesBefore = obj.activitiesBefore;
    this.treatment = obj.treatment;
    this.otherMedication = obj.otherMedication;
    this.dailyLife = obj.dailyLife
    this.other = obj.other;
    this.relief = null;
    this.createdOn = createdOn;
    this.modifiedOn = modifiedOn;

    this.set = function(obj) {
	    this.endTime = obj.endTime;
	    this.intensity = obj.intensity;
	    this.location = obj.location;
	    this.painType = obj.PainType;
	    this.symptoms = obj.symptoms;
	    this.foodBefore = obj.foodBefore;
	    this.sleep = obj.sleep;
	    this.activitiesBefore = obj.activitiesBefore;
	    this.treatment = obj.treatment;
	    this.otherMedication = obj.otherMedication;
	    this.dailyLife = obj.dailyLife
	    this.other = obj.other;
	    this.relief = obj.relief;
	    this.modifiedOn = new Date();
    };

    this.get = function() {
    	return {
    		"startTime": this.startTime,
		    "endTime": this.endTime,
		    "intensity": this.intensity,
		    "location": this.location,
		    "painType": this.painType,
		    "symptoms": this.symptoms,
		    "foodBefore": this.foodBefore,
		    "sleep": this.sleep,
		    "activitiesBefore": this.activitiesBefore,
		    "treatment": this.treatment,
		    "otherMediation": this.otherMedication,
		    "dailyLife": this.dailyLife,
		    "other": this.other,
		    "relief": this.relief,
		    "createdOn": this.createdOn,
		    "modifiedOn":this.modifiedOn
    	};
    }
}

headache = new Headache({

});

console.log(headache)