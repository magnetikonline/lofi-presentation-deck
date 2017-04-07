(() => {

	'use strict';

	function init() {

		// fetch footer page elements
		let pageElList = document.querySelectorAll('.slide > .slide-footer > .page'),
			totalPageCount = pageElList.length;

		// number slides
		let pageNumber = 1;
		for (let pageEl of pageElList) {
			pageEl.appendChild(
				document.createTextNode(`${pageNumber++}/${totalPageCount}`)
			);
		}
	}

	if (document.readyState == 'loading') {
		document.addEventListener('DOMContentLoaded',init);

	} else {
		init();
	}
})();
