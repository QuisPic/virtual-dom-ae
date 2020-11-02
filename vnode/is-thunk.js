export function isThunk(t) {
    return t && t.type === "Thunk"
}
