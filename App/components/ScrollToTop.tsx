import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const prevPathname = useRef(pathname);

    useLayoutEffect(() => {
        if (hash) {
            // Only jump to top if changing pages
            if (prevPathname.current !== pathname) {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }

            const id = hash.substring(1);

            const performScroll = () => {
                const element = document.getElementById(id);
                if (element) {
                    // Then, smooth scroll to the target section
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return true;
                }
                return false;
            };

            // Small delay to ensure the jump-to-top has taken effect
            const timer = setTimeout(() => {
                // Try initial scroll
                if (!performScroll()) {
                    // Retry for dynamic content
                    setTimeout(performScroll, 300);
                }

                // Cleanup hash after animation
                setTimeout(() => {
                    window.history.replaceState(null, '', window.location.pathname);
                }, 1000);
            }, 50);

            return () => clearTimeout(timer);
        } else {
            // Only scroll to top if changing pages (prevents jump on refresh/mount)
            if (prevPathname.current !== pathname) {
                window.scrollTo(0, 0);
            }
        }
        prevPathname.current = pathname;
    }, [pathname, hash]);

    return null;
};
