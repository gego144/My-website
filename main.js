const links = [...document.querySelectorAll('.rail nav a')];
const sections = links.map(link => document.querySelector(link.hash));

const setActive = id => links.forEach(link => link.classList.toggle('active', link.hash === '#' + id));

// Active section is the last one whose top has scrolled past a line near the top of the viewport.
// At the bottom of the page the last section wins, since it may be too short to reach that line.
const LINE = 160;

const update = () => {
	const atBottom = scrollY > 0 && innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
	const passed = sections.filter(section => section.getBoundingClientRect().top <= LINE);
	setActive((atBottom ? sections.at(-1) : passed.at(-1) ?? sections[0]).id);
};

addEventListener('scroll', update, { passive: true });
addEventListener('resize', update);
update();
