const links = [...document.querySelectorAll('.rail nav a')];
const sections = links.map(link => document.querySelector(link.hash));

const setActive = id => links.forEach(link => link.classList.toggle('active', link.hash === '#' + id));

const observer = new IntersectionObserver(entries => {
	const visible = entries.filter(e => e.isIntersecting);
	if (visible.length) {
		setActive(visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0].target.id);
	}
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach(section => observer.observe(section));
setActive('about');
