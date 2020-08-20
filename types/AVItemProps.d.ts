declare namespace AeVirtualDOM {
  interface AVItemProps extends ItemProps {
    /** The width of the item. */
    width?: number
    
    /** The height of the item. */
    height?: number

    /** The pixel aspect ratio of the item. */
    pixelAspect?: number

    /** The frame rate of the item. */
    frameRate?: number

    /** The frame duration for the item. */
    frameDuration?: number

    /** The total duration of the item. */
    duration?: number

    /** When true, a proxy source is used for this item. */
    useProxy?: boolean

    /** Current time of the item. */
    time?: number

    /** Sets a proxy for the item. */
    setProxy?: File

    /** Sets a sequence as a proxy for the item. */
    setProxyWithSequence?: [file: File, forceAlphabetical: boolean]

    /** Sets a solid as a proxy for the item. */
    setProxyWithSolid?: [
      color: [number, number, number],
      name: string,
      width: number,
      height: number,
      pixelAspect: number,
    ]

    /** Sets a placeholder as a proxy for the item. */
    setProxyWithPlaceholder?: [
      name: string,
      width: number,
      height: number,
      frameRate: number,
      duration: number,
    ]

    /** Removes the proxy for the item. */
    setProxyToNone?: []
  }
}