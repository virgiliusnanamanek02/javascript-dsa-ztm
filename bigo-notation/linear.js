const nemoes = ['Nemo', 'Nami', 'Nomu', 'Nono'];

function findNemo(array) {
	for (const element of array) {
		if (element === 'Nemo') {
			console.log('Find Nemo');
			break; // Optimize the run time
		}
	}
}

findNemo(nemoes);

// Rule number one Worst case --> The number of times the function is run until it finds the associated value
