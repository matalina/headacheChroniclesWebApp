function required(data) {
	var pattern = /^.+$/;
	
	if(pattern.exec(data) == null) {
		return false;
	}

	return true;
}

function validDate(date) 
{
	var pattern = /^([1|2][9|0][0-9]{2})\-(0[0-9)|1[0-2])\-([0-2][0-9]|3[0-1])$/;
	
	if(pattern.exec(date) == null) {
		return false;
	}

	return true;
}

function validTime(time) 
{
	var pattern = /^([0|1][0-9]|2[0-3]):([0-5][0-9])$/;
	
	if(pattern.exec(time) == null) {
		return false;
	}

	return true;
}

function oneToTen(number) 
{
	if(number >= 1 && number <= 10) {
		return true;
	}

	return false;
}

function validText(text) 
{
	var pattern = /^[0-9a-zA-z \.\?!&,]*$/;
	
	if(pattern.exec(text) == null) {
		return false;
	}

	return true;
}