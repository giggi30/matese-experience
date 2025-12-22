import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'auto' });
                // Remove hash from URL without triggering a refresh or scroll
                window.history.replaceState(null, '', window.location.pathname);
            } else {
                // Fallback for elements that might load slightly later
                requestAnimationFrame(() => {
                    const el = document.getElementById(hash.substring(1));
                    if (el) {
                        el.scrollIntoView({ behavior: 'auto' });
                        window.history.replaceState(null, '', window.location.pathname);
                    }
                });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};
