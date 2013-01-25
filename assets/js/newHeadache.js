$().ready(function () {
	// Show New Headache Form
	$('body').on('click', 'a[href=#newHeadacheForm]', function (e) {
		e.preventDefault();

		var id = $(this).attr('href');

		$(id).slideDown(800);

		$(this).parent().hide();
	});

	// Process New Headache Form
	$('body').on('click', '[name=create]', function (e) {
		e.preventDefault();

		var $form = $('#newHeadacheForm'),
			error = false;

		// clear errors if any
		$form.find('.formError').remove();

		// validate form
		var newDate = $form.find('#newDate').val(),
			newTime = $form.find('#newTime').val(),
			newIntensity = $form.find('#newIntensity').val(),
			newLocation = $form.find('#newLocation').val(),
			newPainType = $form.find('#newPainType').val(),
			newSymptoms = $form.find('#newSymptoms').val(),
			newFoodBefore = $form.find('#newFoodBefore').val(),
			newSleep = $form.find('#newSleep').val(),
			newActivitiesBefore = $form.find('#newActivitiesBefore').val(),
			newTreatment = $form.find('#newTreatment').val(),
			newOtherMedication = $form.find('#newOtherMedication').val(),
			newDailyLife = $form.find('#newDailyLife').val(),
			newOther = $form.find('#newOther').val();

		if(!required(newDate)) {
			$form.find('#newDate').after('<div class="formError">Required.</div>');
			error = true;
		}
		else if(!validDate(newDate)) {
			$form.find('#newDate').after('<div class="formError">Invalid Format (YYYY-MM-DD)</div>');
			error = true;
		}

		if(!required(newTime)) {
			$form.find('#newTime').after('<div class="formError">Required.</div>');
			error = true;
		}
		else if(!validTime(newTime)) {
			$form.find('#newTime').after('<div class="formError">Invalid Format (HH:MM)</div>');
			error = true;
		}

		if(!required(newIntensity)) {
			$form.find('#newIntensity').after('<div class="formError">Required.</div>');
			error = true;
		}
		else if(!oneToTen(newIntensity)) {
			$form.find('#newIntensity').after('<div class="formError">Can only be one through ten.</div>');
			error = true;
		}

		if(!required(newLocation)) {
			$form.find('#newLocation').after('<div class="formError">Required.</div>');
			error = true;
		}
		else if(!validText(newLocation)) {
			$form.find('#newLocation').after('<div class="formError">You may only use the following characters: a-z A-Z 0-9, space and .?!,&</div>');
			error = true;
		}

		if(!required(newPainType)) {
			$form.find('#newPainType').after('<div class="formError">Required.</div>');
			error = true;
		}
		else if(!validText(newPainType)) {
			$form.find('#newPainType').after('<div class="formError">You may only use the following characters: a-z A-Z 0-9, space and .?!,&</div>');
			error = true;
		}

		if(!validText(newSymptoms)) {
			$form.find('#newSymptoms').after('<div class="formError">You may only use the following characters: a-z A-Z 0-9, space and .?!,&</div>');
			error = true;
		}

		if(!validText(newFoodBefore)) {
			$form.find('#newFoodBefore').after('<div class="formError">You may only use the following characters: a-z A-Z 0-9, space and .?!,&</div>');
			error = true;
		}	

		if(!validText(newSleep)) {
			$form.find('#newSleep').after('<div class="formError">You may only use the following characters: a-z A-Z 0-9, space and .?!,&</div>');
			error = true;
		}

		if(!validText(newActivitiesBefore)) {
			$form.find('#newActivitiesBefore').after('<div class="formError">You may only use the following characters: a-z A-Z 0-9, space and .?!,&</div>');
			error = true;
		}

		if(!validText(newTreatment)) {
			$form.find('#newTreatment').after('<div class="formError">You may only use the following characters: a-z A-Z 0-9, space and .?!,&</div>');
			error = true;
		}

		if(!validText(newOtherMedications)) {
			$form.find('#newOtherMedications').after('<div class="formError">You may only use the following characters: a-z A-Z 0-9, space and .?!,&</div>');
			error = true;
		}

		if(!validText(newDailyLife)) {
			$form.find('#newDailyLife').after('<div class="formError">You may only use the following characters: a-z A-Z 0-9, space and .?!,&</div>');
			error = true;
		}

		if(!validText(newOther)) {
			$form.find('#newOther').after('<div class="formError">You may only use the following characters: a-z A-Z 0-9, space and .?!,&</div>');
			error = true;
		}
		
		if(!error) {
			// store data
			
			// reset form
			$form.find('[type=text]').val('');
			$form.find('textarea').val('');
			$form.find('[type=date]').val('');
			$form.find('[type=number]').val('');
			$form.find('[type=time]').val('');
			$form.find('.formError').remove();
			// hide form and show link if there are no errors
			$form.hide();
			$('a[href=#newHeadacheForm]').parent().show();
		}

	});

});