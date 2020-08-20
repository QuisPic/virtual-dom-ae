declare namespace AeVirtualDOM {
  interface LayerProps {
    /** The name of the layer. */
    name?: string

    /** The parent of this layer. */
    parent?: Layer | null

    /** The start time of the layer. */
    startTime?: number

    /** The time stretch percentage of the layer. */
    stretch?: number

    /** The “in” point of the layer. */
    inPoint?: number

    /** The “out” point of the layer. */
    outPoint?: number

    /** When true, the layer is enabled. */
    enabled?: boolean

    /** When true, the layer is soloed. */
    solo?: boolean

    /** When true, the layer is shy. */
    shy?: boolean

    /** When true, the layer is locked. */
    locked?: boolean

    /** A descriptive comment for the layer. */
    comment?: string

    /** The label color for the layer. */
    label?: number

    /** The type of automatic orientation for the layer. */
    autoOrient?: AutoOrientType

    /** Copies the layer to the top (beginning) of another composition. */
    copyToComp?: CompItem

    /** Sets a new parent for this layer. */
    setParentWithJump?: Layer

    /** Applies a named collection of animation settings to the layer. */
    applyPreset?: File

    /** When true, this layer is selected. */
    selected?: boolean

    'ADBE Marker'?: VProperty<MarkerValue>
  }
}