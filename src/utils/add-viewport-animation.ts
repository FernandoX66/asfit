export const addViewportAnimation = (
	element: Element,
	animationClass: string
): void => {
	const observer = new IntersectionObserver((entries) => {
		element.classList.toggle(animationClass, entries[0].isIntersecting);
	});

	observer.observe(element);
};
