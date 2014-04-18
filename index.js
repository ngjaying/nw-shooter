(function(){
	var ns = require('node-shooter'),
	fileControl = document.getElementById('inputFile'),
	messageDiv = document.getElementById('divMessage');
	fileControl.addEventListener('change', function(e){
		var file = fileControl.value;
		ns.getSub(file, null, function(err){
			//Stop progress here
			if(err){
				messageDiv.innerHTML = 'Subtitle download fail for ' + file + '<br/>Error: ' + err;
			}else{
				messageDiv.innerHTML = 'Subtitle download successful for ' + file;
			}
			
		});
	});
})();