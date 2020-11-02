import { version } from './version'

export function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}
