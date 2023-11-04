import { useRef, useEffect } from 'react';

/**
 * Custom hook that uses the IntersectionObserver API to add a class to an element when it comes into view.
 * @returns A ref object to be used on the element to be observed.
 */
const useIntersectionObserver = () => {
    const ref = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Add 'animate-on-scroll' class to the element when it comes into view
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        // Clean up
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return ref;
};

export default useIntersectionObserver;