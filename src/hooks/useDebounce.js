//debounce
function useDebounce(cd, delay = 1000){
    let timerid;

    return(...args) => {
        clearTimeout(timerid);
        timerid = setTimeout(()=>{
            cd(...args);
        }, delay)
    }
}

export default useDebounce;