export default function callableList(...funcs) {
    return (...args) => funcs.forEach((func) => func(...args))
}