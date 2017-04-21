var cssChange = document.getElementById('cssChange');
var cssLink = document.getElementById('cssLoad');
var hrefIni = cssLink.href;
var styleChange = false;
cssLink.href = hrefIni+'stylesheet.css'

cssChange.addEventListener('click',cssChanger);

function cssChanger(){
	if(styleChange){
		cssLink.href = hrefIni+'stylesheet.css';
		styleChange = false;
	}else{
		cssLink.href = hrefIni+'stylesheet2.css';
		styleChange = true;
	}
}