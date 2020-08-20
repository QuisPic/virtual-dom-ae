declare namespace AeVirtualDOM {
  interface SolidLayerProps extends AVLayerBaseProps {
    initial: [color: number[], name: string, width: number, height: number, pixelAspect: number, duration?: number]

    /** Key for this element. */
    key?: string
  }
}