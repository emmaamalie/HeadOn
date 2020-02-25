function parallax(){
	var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
	prlx_lyr_1.style.top = -(window.pageYOffset / 10)+'px';

}
window.addEventListener("scroll", parallax, false);
