var ns = require('node-shooter');
window.onload = function(){
	(function() {
		var fileControl = document.getElementById('inputFile'),
		fileUploader = document.getElementById('divFile'),
		messageDiv = document.getElementById('messageDiv'),
		VIDEOEXTS = ['.avi','.mp4','.mkv','.rmvb','.rm','.asf','.divx','.mpg','.mpeg','.mpe','.wmv','.vob'];

		fileControl.addEventListener('change', function(e) {
			var files = fileControl.files, message = [];
			for (var i = 0; i < files.length; i++) {
				filterVideo(files[i]) && createDownloader(files[i]);
			}
		}, false);

		fileUploader.addEventListener('click', function(e) {
			fileControl.click();
		}, false);

		function createDownloader(file) {
			var d = document.createElement('div');
			d.innerText = file.name;
			d.className = 'loading';				

			ns.getSub(file.path, null, function(err){
				if(err){
					d.className = 'error';
					d.innerText = file.name + '字幕不存在';
				}else{
					d.className = 'success';
				}

			});
			messageDiv.appendChild(d);
		}

		function filterVideo(file){
			return file.size > 4194304 && checkExtension(file.name);
		}

		function checkExtension(fileName){
			var ext = fileName.split('.');
			ext = '.' + ext[ext.length - 1];
			return VIDEOEXTS.some(function(ele){
				return (ele == ext);
			});
		}
	})();
};