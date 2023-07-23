import React, {useCallback, useEffect, useRef, useState} from "react";

function Section({children, reverse}) {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	const observerCallback = useCallback((entries) => {
		entries.forEach((entry) => {
			setIsVisible(entry.isIntersecting);
		});
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(observerCallback);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		// Cleanup function to disconnect the observer when the component unmounts
		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, [observerCallback]);

	return (
		<section
			ref={sectionRef}
			className={`${reverse ? 'reverse' : ''} fade-in-section ${isVisible ? 'is-visible' : ''}`}
		>
			{children}
		</section>
	);
}

export default Section;