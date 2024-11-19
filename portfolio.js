let infoSectionElem = document.querySelectorAll('.info-section');
let infoLinkElem = document.querySelectorAll('.info-link');

infoLinkElem.forEach(link => {
	link.addEventListener('click', ()=>{
		//removes all red underlines
		infoLinkElem.forEach(link=> {
			link.classList.remove('selected');
		})

		//adds red underline for the link that was clicked
		link.classList.add('selected');

		//gets link innerHTML (ie. Skills, Experiences, Education) whicbh will be used to get the relevant text
		let linkInnerHtml = link.innerHTML;

		//loops through the sections to display the relavant and info using the innerHTML that we just got
		infoSectionElem.forEach(section => {

			//removes the info-section that was on display
			if (section.classList.contains(`show`)) {
				section.classList.remove('show');
				section.classList.add('hide');
			}

			// This part dynamically displays the relevant information section based on the link that was clicked. 
			// It does this by comparing the innerHTML of the clicked link with the class names of the info sections.
			if(section.classList.contains(`${linkInnerHtml}`)) {
				section.classList.remove('hide');
				section.classList.add('show');
			}
		})
	})
});