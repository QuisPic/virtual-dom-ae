declare namespace AeVirtualDOM {
  interface VPropertyBase {
    /** Name of the property. */
    name?: string
    
    /** When true, this property is enabled. */
    enabled?: boolean

    /** When true, this property is selected. */
    selected?: boolean

    /** Moves this property to a new position in its parent group. */
    moveTo?: number
  }

  interface VProperty<A> extends VPropertyBase {
    /** The expression string for this property. */
    expression?: string
    
    /** When true, the expression is used to generate values for the property. */
    expressionEnabled?: boolean

    /** When true, the property’s dimensions are represented as separate properties. */
    dimensionsSeparated?: boolean

    /** Sets the static value of the property. */
    setValue?: A

    /** Creates a keyframe for the property. */
    setValueAtTime?: [time: number, value: A]

    /** Creates a set of keyframes for the property. */
    setValuesAtTimes?: [times: number[], values: A[]]

    /** Finds a keyframe and sets the value of the property at that keyframe. */
    setValueAtKey?: [keyIndex: number, value: A]

    /** Adds a new keyframe to the property at a given time. */
    addKey?: number

    /** Removes a keyframe from the property. */
    removeKey?: number

    /** Sets the interpolation type for a key. */
    setInterpolationTypeAtKey?: [
      keyIndex: number,
      inValue: KeyframeInterpolationType,
      outValue?: KeyframeInterpolationType
    ]

    /** Sets the “in” and “out” tangent vectors for a key. */
    setSpatialTangentsAtKey?: [
      keyIndex: number,
      inTangent: number[],
      outTangent: number[]
    ]

    /** Sets the “in” and “out” temporal ease for a key. */
    setTemporalEaseAtKey?: [
      keyIndex: number, 
      inTemporalEase: KeyframeEase[],
      outTemporalEase?: KeyframeEase[]
    ]

    /** Sets whether a keyframe has temporal continuity. */
    setTemporalContinuousAtKey?: [keyIndex: number, value: boolean]

    /** Sets whether a keyframe has temporal auto-Bezier. */
    setTemporalAutoBezierAtKey?: [keyIndex: number, value: boolean]

    /** Sets whether a keyframe has spatial continuity. */
    setSpatialContinuousAtKey?: [keyIndex: number, value: boolean]

    /** Sets whether a keyframe has spatial auto-Bezier. */
    setSpatialAutoBezierAtKey?: [keyIndex: number, value: boolean]

    /** Sets whether a keyframe is roving. */
    setRovingAtKey?: [keyIndex: number, value: boolean]

    /** Sets whether a keyframe is selected. */
    setSelectedAtKey?: [keyIndex: number, value: boolean]

    /** Object providing info about keyframes. */
    keyframes?: {
      /** Keyframes times. */
      times?: number[]

      /** Keyfames value. */
      values?: A[]

      /** Sets the “in” and “out” temporal ease for keys. */
      temporalEase?: KeyframeEase[][] | { all: KeyframeEase[] }

      /** Sets whether keyframes have temporal continuity. */
      temporalContinuous?: boolean[] | { all: boolean }

      /** Sets whether keyframes have temporal auto-Bezier. */
      temporalAutoBezier?: boolean[] | { all: boolean }

      /** Sets the “in” and “out” tangent vectors for keys. */
      spatialTangents?: number[][] | { all: number[] }

      /** Sets whether keyframes have spatial auto-Bezier. */
      spatialAutoBezier?: boolean[] | { all: boolean }

      /** Sets whether keyframes have spatial continuity. */
      spatialContinuous?: boolean[] | { all: boolean }

      /** Sets the interpolation type for a key. */
      interpolationType?: (KeyframeInterpolationType | KeyframeInterpolationType[])[] | { all: number }

      /** Sets whether keyframes are roving. */
      roving?: boolean[] | { all: boolean }

      /** Sets whether keyframes are selected. */
      selected?: boolean[] | { all: boolean }
    }
  }

  interface VPropertyNotKeyframable<A> extends VPropertyBase {
    /** Sets the static value of the property. */
    setValue?: A
  }
}