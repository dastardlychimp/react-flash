export function arrayDifference(arr, arrDiff)  {
    return arr.filter((value) => ! arrDiff.includes(value))
}

export function arrayDelete(arr, verifier) {
    const deleted = arr.filter(verifier)
    return arrayDifference(arr, deleted)
}

export function arrayDeleteByIndex(arr, idx) {
    return [
        ...arr.slice(0, idx),
        ...arr.slice(idx)
    ]
}

export function arrayDeleteByProp(arr, prop, expect) {
    return arrayDelete(arr, (value) => value[prop] == expect)
}

export function arrayDeleteById(arr, id) {
    return arrayDeleteByProp(arr, 'id', id)
}

export function arrayAdd(arr, value) {
    return [
        value,
        ...arr
    ]
}

export function arrayModify(arr, idx, transform) {
    return [
        ...sets.slice(0, idx),
        transform(arr[idx]),
        ...sets.slice(idx)
    ]
}

export function objectAdd(obj, prop, value) {
    return {
        [prop]: value,
        ...obj
    }
}

export function objectCombine(obj1, obj2) {
    return {
        ...obj2,
        ...obj1
    }
}

export function generateTestId() {
    return Math.floor(Math.random() * Math.pow(10, 7))
} 