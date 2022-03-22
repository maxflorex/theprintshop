// import { useState, useCallback, useEffect } from 'react';

// export const useMediaQuery = (width) => {
//     const [targetReached, setTargetReached] = useState(false);

//     const updateTarget = useCallback((e) => {
//         if (e.matches) {
//             setTargetReached(true);
//         } else {
//             setTargetReached(false);
//         }
//     }, []);

//     useEffect(() => {
//         const media = window.matchMedia(`(max-width: ${width}px)`);
//         media.addEventListener('change', (e) => updateTarget(e));

//         // Check on mount (callback is not called until a change occurs)
//         if (media.matches) {
//             setTargetReached(true);
//         }

//         return () =>
//             media.removeEventListener('change', (e) => updateTarget(e));
//     }, []);

//     return targetReached;
// };

// const userWindow = () => {
//     const isBreakpointXl = useMediaQuery(1024);
//     const isBreakpoint = useMediaQuery(768);

//     return (
//         <>
//             <div>{isBreakpoint ? 100 : isBreakpointXl ? 50 : 33.333}</div>
//         </>
//     );
// };

// export default userWindow;
