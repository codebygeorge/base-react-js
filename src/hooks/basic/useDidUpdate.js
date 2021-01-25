import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


const useDidUpdate = (callback, deps) => {
    const hasMount = useRef(false);

    useEffect(() => {
        if (hasMount.current) {
            callback();
        } else {
            hasMount.current = true;
        }
    }, deps);
};

useDidUpdate.propTypes = {
    callback: PropTypes.bool.isRequired,
    deps: PropTypes.array
}

export default useDidUpdate;