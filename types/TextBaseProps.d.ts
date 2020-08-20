declare namespace AeVirtualDOM {
  interface TextBaseProps extends AVLayerBaseProps {
    /** When true, 3D is set on a per-character basis in this text layer. */
    threeDPerChar?: boolean

    'ADBE Text Properties'?: {
      selected?: boolean
      'ADBE Text Document'?: VProperty<TextDocument>
      'ADBE Text Path Options'?: {
        enabled?: boolean
        selected?: boolean
        "ADBE Text Path"?: VPropertyNotKeyframable<number>
        "ADBE Text Reverse Path"?: VProperty<boolean>
        "ADBE Text Perpendicular To Path"?: VProperty<boolean>
        "ADBE Text Force Align Path"?: VProperty<boolean>
        "ADBE Text First Margin"?: VProperty<number>
        "ADBE Text Last Margin"?: VProperty<number>
      }
      'ADBE Text More Options'?: {
        selected?: boolean
        "ADBE Text Anchor Point Option"?: VPropertyNotKeyframable<1 | 2 | 3 | 4>
        "ADBE Text Anchor Point Align"?: VProperty<number[]>
        "ADBE Text Render Order"?: VPropertyNotKeyframable<1 | 2 | 3>
        "ADBE Text Character Blend Mode"?: VPropertyNotKeyframable<number>
      }
      'ADBE Text Animators'?: {
        members?: {
          'ADBE Text Animator': {
            [name: string]: VPropertyBase & {
              'ADBE Text Selectors'?: {
                members?: {
                  'ADBE Text Selector'?: {
                    [name: string]: VPropertyBase & {
                      "ADBE Text Percent Start"?: VProperty<number>
                      "ADBE Text Percent End"?: VProperty<number>
                      "ADBE Text Percent Offset"?: VProperty<number>
                      "ADBE Text Index Start"?: VProperty<number>
                      "ADBE Text Index End"?: VProperty<number>
                      "ADBE Text Index Offset"?: VProperty<number>
                      'ADBE Text Range Advanced'?: {
                        selected?: boolean
                        "ADBE Text Range Units"?: VPropertyNotKeyframable<1 | 2>
                        "ADBE Text Range Type2"?: VPropertyNotKeyframable<1 | 2 | 3 | 4>
                        "ADBE Text Selector Mode"?: VProperty<1 | 2 | 3 | 4 | 5 | 6>
                        "ADBE Text Selector Max Amount"?: VProperty<number>
                        "ADBE Text Range Shape"?: VPropertyNotKeyframable<1 | 2 | 3 | 4 | 5 | 6>
                        "ADBE Text Selector Smoothness"?: VProperty<number>
                        "ADBE Text Levels Max Ease"?: VProperty<number>
                        "ADBE Text Levels Min Ease"?: VProperty<number>
                        "ADBE Text Randomize Order"?: VPropertyNotKeyframable<boolean>
                        "ADBE Text Random Seed"?: VProperty<number>
                      }
                    }
                  }
                  'ADBE Text Wiggly Selector'?: {
                    [name: string]: VPropertyBase & {
                      "ADBE Text Selector Mode"?: VProperty<1 | 2 | 3 | 4 | 5 | 6>
                      "ADBE Text Wiggly Max Amount"?: VProperty<number>
                      "ADBE Text Wiggly Min Amount"?: VProperty<number>
                      "ADBE Text Range Type2"?: VPropertyNotKeyframable<1 | 2 | 3 | 4>
                      "ADBE Text Temporal Freq"?: VProperty<number>
                      "ADBE Text Character Correlation"?: VProperty<number>
                      "ADBE Text Temporal Phase"?: VProperty<number>
                      "ADBE Text Spatial Phase"?: VProperty<number>
                      "ADBE Text Wiggly Lock Dim"?: VProperty<boolean>
                      "ADBE Text Wiggly Random Seed"?: VProperty<number>
                    }
                  }
                  'ADBE Text Expressible Selector'?: {
                    [name: string]: {
                      "ADBE Text Range Type2"?: VPropertyNotKeyframable<1 | 2 | 3 | 4>
                      "ADBE Text Expressible Amount"?: VProperty<number[]>
                    }
                  }
                }
              }
              'ADBE Text Animator Properties'?: {
                "ADBE Text Anchor Point 3D"?: VProperty<number[]>
                "ADBE Text Position 3D"?: VProperty<number[]>
                "ADBE Text Scale 3D"?: VProperty<number[]>
                "ADBE Text Skew"?: VProperty<number>
                "ADBE Text Skew Axis"?: VProperty<number>
                "ADBE Text Rotation X"?: VProperty<number>
                "ADBE Text Rotation Y"?: VProperty<number>
                "ADBE Text Rotation"?: VProperty<number>
                "ADBE Text Opacity"?: VProperty<number>
                "ADBE Text Fill Opacity"?: VProperty<number>
                "ADBE Text Stroke Opacity"?: VProperty<number>
                "ADBE Text Fill Color"?: VProperty<number[]>
                "ADBE Text Stroke Color"?: VProperty<number[]>
                "ADBE Text Fill Hue"?: VProperty<number>
                "ADBE Text Stroke Hue"?: VProperty<number>
                "ADBE Text Fill Saturation"?: VProperty<number>
                "ADBE Text Stroke Saturation"?: VProperty<number>
                "ADBE Text Fill Brightness"?: VProperty<number>
                "ADBE Text Stroke Brightness"?: VProperty<number>
                "ADBE Text Stroke Width"?: VProperty<number>
                "ADBE Text Line Anchor"?: VProperty<number>
                "ADBE Text Track Type"?: VProperty<1 | 2 | 3>
                "ADBE Text Tracking Amount"?: VProperty<number>
                "ADBE Text Character Change Type"?: VPropertyNotKeyframable<1 | 2 | 3 | 4>
                "ADBE Text Character Range"?: VPropertyNotKeyframable<1 | 2>
                "ADBE Text Character Replace"?: VProperty<number>
                "ADBE Text Character Offset"?: VProperty<number>
                "ADBE Text Line Spacing"?: VProperty<number[]>
                "ADBE Text Blur"?: VProperty<number[]>
              }
            }
          }
        }
      }
    }
  }
}