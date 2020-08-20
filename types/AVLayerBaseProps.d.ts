declare namespace AeVirtualDOM {
  interface AVLayerBaseProps extends LayerProps {
    /** When true, the layer's audio is enabled. */
    audioEnabled?: boolean

    /** When true, the layer's motion blur is enabled. */
    motionBlur?: boolean

    /** When true, the layer's effects are active. */
    effectsActive?: boolean

    /** When true, this is an adjustment layer. */
    adjustmentLayer?: boolean

    /** When true, this is a guide layer. */
    guideLayer?: boolean

    /** When true, this is a 3D layer. */
    threeDLayer?: boolean

    /** When true, this is an environment layer. */
    environmentLayer?: boolean

    /** When true, collapse transformation is on. */
    collapseTransformation?: boolean

    /** The type of frame blending for the layer. */
    frameBlendingType?: FrameBlendingType

    /** When true, time remapping is enabled on this layer. */
    timeRemapEnabled?: boolean

    /** The blending mode of the layer. */
    blendingMode?: BlendingMode

    /** When true, preserve transparency is enabled. */
    preserveTransparency?: boolean

    /** if layer has a track matte, specifies the way it is applied. */
    trackMatteType?: TrackMatteType

    /** The layer quality setting. */
    quality?: LayerQuality

    /** The layer sampling quality setting. */
    samplingQuality?: LayerSamplingQuality

    /** Changes the source item for this layer. */
    replaceSource?: [newSource: AVItem, fixExpressions: boolean]

    'ADBE Mask Parade'?: {
      members?: {
        'ADBE Mask Parade'?: {
          [name: string]: {
            name?: string
            selected?: boolean
            moveTo?: number
            color?: number[]
            inverted?: boolean
            locked?: boolean
            maskFeatherFalloff?: number
            maskMode?: number
            maskMotionBlur?: number
            rotoBezier?: boolean
            'ADBE Mask Shape'?: VProperty<Shape>
            'ADBE Mask Feather'?: VProperty<number[]>
            'ADBE Mask Opacity'?: VProperty<number>
            'ADBE Mask Offset'?: VProperty<number>
          }
        }
      }
    }
    'ADBE Effect Parade'?: {
      members: {
        [effectName: string]: VPropertyBase & {
          'ADBE Effect Built In Params'?: {
            'ADBE Effect Mask Parade'?: {
              members?: {
                'ADBE Effect Mask'?: {
                  [name: string]: {
                    'ADBE Effect Path Stream Ref'?: VPropertyNotKeyframable<number>
                  }
                }
              }
            }
            'ADBE Effect Mask Opacity'?: VProperty<number>
          }
          [propName: string]: any
        }
      }
    }
    'ADBE Transform Group'?: {
      selected?: boolean
      'ADBE Anchor Point'?: VProperty<number[]>
      'ADBE Position'?: VProperty<number[]>
      'ADBE Position_0'?: VProperty<number>
      'ADBE Position_1'?: VProperty<number>
      'ADBE Position_2'?: VProperty<number>
      'ADBE Scale'?: VProperty<number[]>
      'ADBE Rotate X'?: VProperty<number>
      'ADBE Rotate Y'?: VProperty<number>
      'ADBE Rotate Z'?: VProperty<number>
      'ADBE Orientation'?: VProperty<number[]>
      'ADBE Opacity'?: VProperty<number>
    }
    'ADBE Audio Group'?: {
      'ADBE Audio Levels'?: VProperty<number>
    }
  }
}