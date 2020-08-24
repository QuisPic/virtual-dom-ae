module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" || typeof hook.unhook === "function")
}
