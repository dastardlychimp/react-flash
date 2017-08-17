export default function callIfFunction(func, ...args) {
    if ( typeof func === 'function' ) {
        func.apply(...args)
    }
}