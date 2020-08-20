declare namespace AeVirtualDOM {
  interface ShapeLayerProps extends AVLayerBaseProps {
    /** Key for this element. */
    key?: string

    'ADBE Root Vectors Group'?: VectorsGroup
  }

  interface VectorsGroup {
    members: {
      'ADBE Vector Group'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Blend Mode'?: VPropertyNotKeyframable<number>
          'ADBE Vectors Group'?: VectorsGroup
          'ADBE Vector Transform Group'?: {
            selected?: boolean
            'ADBE Vector Anchor'?: VProperty<number[]>
            'ADBE Vector Position'?: VProperty<number[]>
            'ADBE Vector Scale'?: VProperty<number[]>
            'ADBE Vector Skew'?: VProperty<number>
            'ADBE Vector Skew Axis'?: VProperty<number>
            'ADBE Vector Rotation'?: VProperty<number>
            'ADBE Vector Group Opacity'?: VProperty<number>
          }
        }
      }
      'ADBE Vector Shape - Rect'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Shape Direction'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Rect Size'?: VProperty<number[]>
          'ADBE Vector Rect Position'?: VProperty<number[]>
          'ADBE Vector Rect Roundness'?: VProperty<number>
        }
      }
      'ADBE Vector Shape - Ellipse'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Shape Direction'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Ellipse Size'?: VProperty<number[]>
          'ADBE Vector Ellipse Position'?: VProperty<number[]>
        }
      }
      'ADBE Vector Shape - Star'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Shape Direction'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Star Type'?: VPropertyNotKeyframable<number>
          'ADBE Vector Star Points'?: VProperty<number>
          'ADBE Vector Star Position'?: VProperty<number[]>
          'ADBE Vector Star Rotation'?: VProperty<number>
          'ADBE Vector Star Inner Radius'?: VProperty<number>
          'ADBE Vector Star Outer Radius'?: VProperty<number>
          'ADBE Vector Star Inner Roundess'?: VProperty<number>
          'ADBE Vector Star Outer Roundess'?: VProperty<number>
        }
      }
      'ADBE Vector Shape - Group'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Shape Direction'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Shape'?: VProperty<Shape>
        }
      }
      'ADBE Vector Filter - Merge'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Merge Type'?: VPropertyNotKeyframable<1 | 2 | 3 | 4 | 5>
        }
      }
      'ADBE Vector Filter - Offset'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Offset Amount'?: VProperty<number>
          'ADBE Vector Offset Line Join'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Offset Miter Limit'?: VProperty<number>
          'ADBE Vector Offset Copies'?: VProperty<number>
          'ADBE Vector Offset Copy Offset'?: VProperty<number>
        }
      }
      'ADBE Vector Filter - PB'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector PuckerBloat Amount'?: VProperty<number>
        }
      }
      'ADBE Vector Filter - RC'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector RoundCorner Radius'?: VProperty<number>
        }
      }
      'ADBE Vector Filter - Trim'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Trim Start'?: VProperty<number>
          'ADBE Vector Trim End'?: VProperty<number>
          'ADBE Vector Trim Offset'?: VProperty<number>
          'ADBE Vector Trim Type'?: VPropertyNotKeyframable<1 | 2>
        }
      }
      'ADBE Vector Filter - Twist'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Twist Angle'?: VProperty<number>
          'ADBE Vector Twist Center'?: VProperty<number[]>
        }
      }
      'ADBE Vector Filter - Roughen'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Roughen Size'?: VProperty<number>
          'ADBE Vector Roughen Detail'?: VProperty<number>
          'ADBE Vector Roughen Points'?: VProperty<1 | 2>
          'ADBE Vector Temporal Freq'?: VProperty<number>
          'ADBE Vector Correlation'?: VProperty<number>
          'ADBE Vector Temporal Phase'?: VProperty<number>
          'ADBE Vector Spatial Phase'?: VProperty<number>
          'ADBE Vector Random Seed'?: VProperty<number>
        }
      }
      'ADBE Vector Filter - Wiggler'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Xform Temporal Freq'?: VProperty<number>
          'ADBE Vector Correlation'?: VProperty<number>
          'ADBE Vector Temporal Phase'?: VProperty<number>
          'ADBE Vector Spatial Phase'?: VProperty<number>
          'ADBE Vector Random Seed'?: VProperty<number>
          'ADBE Vector Wiggler Transform'?: {
            selected?: boolean
            'ADBE Vector Wiggler Anchor'?: VProperty<number>
            'ADBE Vector Wiggler Position'?: VProperty<number>
            'ADBE Vector Wiggler Scale'?: VProperty<number[]>
            'ADBE Vector Wiggler Rotation'?: VProperty<number>
          }
        }
      }
      'ADBE Vector Filter - Zigzag'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Zigzag Size'?: VProperty<number>
          'ADBE Vector Zigzag Detail'?: VProperty<number>
          'ADBE Vector Zigzag Points'?: VProperty<1 | 2>
        }
      }
      'ADBE Vector Graphic - G-Stroke'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Blend Mode'?: VPropertyNotKeyframable<number>
          'ADBE Vector Composite Order'?: VPropertyNotKeyframable<1 | 2>
          'ADBE Vector Grad Type'?: VPropertyNotKeyframable<1 | 2>
          'ADBE Vector Grad Start Pt'?: VProperty<number[]>
          'ADBE Vector Grad End Pt'?: VProperty<number[]>
          'ADBE Vector Grad HiLite Length'?: VProperty<number>
          'ADBE Vector Grad Colors'?: VProperty<undefined>
          'ADBE Vector Grad HiLite Angle'?: VProperty<number>
          'ADBE Vector Stroke Opacity'?: VProperty<number>
          'ADBE Vector Stroke Width'?: VProperty<number>
          'ADBE Vector Stroke Line Cap'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Stroke Line Join'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Stroke Miter Limit'?: VProperty<number>
          'ADBE Vector Stroke Dashes'?: {
            enabled?: boolean
            selected?: boolean
            'ADBE Vector Stroke Dash 1'?: VProperty<number>
            'ADBE Vector Stroke Gap 1'?: VProperty<number>
            'ADBE Vector Stroke Dash 2'?: VProperty<number>
            'ADBE Vector Stroke Gap 2'?: VProperty<number>
            'ADBE Vector Stroke Dash 3'?: VProperty<number>
            'ADBE Vector Stroke Gap 3'?: VProperty<number>
            'ADBE Vector Stroke Offset'?: VProperty<number>
          }
          'ADBE Vector Stroke Taper'?: {
            enabled?: boolean
            selected?: boolean
            'ADBE Vector Taper Length Units'?: VPropertyNotKeyframable<1 | 2>
            'ADBE Vector Taper Start Length'?: VProperty<number>
            'ADBE Vector Taper End Length'?: VProperty<number>
            'ADBE Vector Taper StartWidthPx'?: VProperty<number>
            'ADBE Vector Taper EndWidthPx'?: VProperty<number>
            'ADBE Vector Taper Start Width'?: VProperty<number>
            'ADBE Vector Taper End Width'?: VProperty<number>
            'ADBE Vector Taper Start Ease'?: VProperty<number>
            'ADBE Vector Taper End Ease'?: VProperty<number>
          }
          'ADBE Vector Stroke Wave'?: {
            enabled?: boolean
            selected?: boolean
            'ADBE Vector Taper Wave Amount'?: VProperty<number> 
            'ADBE Vector Taper Wave Units'?: VPropertyNotKeyframable<1 | 2> 
            'ADBE Vector Taper Wavelength'?: VProperty<number> 
            'ADBE Vector Taper Wave Cycles'?: VProperty<number> 
            'ADBE Vector Taper Wave Phase'?: VProperty<number> 
          }
        }
      }
      'ADBE Vector Graphic - G-Fill'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Blend Mode'?: VPropertyNotKeyframable<number>
          'ADBE Vector Composite Order'?: VPropertyNotKeyframable<1 | 2>
          'ADBE Vector Fill Rule'?: VPropertyNotKeyframable<1 | 2>
          'ADBE Vector Grad Type'?: VPropertyNotKeyframable<1 | 2>
          'ADBE Vector Grad Start Pt'?: VProperty<number[]>
          'ADBE Vector Grad End Pt'?: VProperty<number[]>
          'ADBE Vector Grad HiLite Length'?: VProperty<number>
          'ADBE Vector Grad HiLite Angle'?: VProperty<number>
          'ADBE Vector Grad Colors'?: VProperty<undefined> 
          'ADBE Vector Fill Opacity'?: VProperty<number>
       }
      }
      'ADBE Vector Graphic - Fill'?: {
        [name: string]: VPropertyBase & {
          "ADBE Vector Blend Mode"?: VPropertyNotKeyframable<number>
          "ADBE Vector Composite Order"?:VPropertyNotKeyframable<1 | 2>
          "ADBE Vector Fill Rule"?:VPropertyNotKeyframable<1 | 2>
          "ADBE Vector Fill Color"?: VProperty<number[]>
          "ADBE Vector Fill Opacity"?: VProperty<number>
        }
      }
      'ADBE Vector Graphic - Stroke'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Blend Mode'?: VPropertyNotKeyframable<number>
          'ADBE Vector Composite Order'?: VPropertyNotKeyframable<1 | 2>
          'ADBE Vector Stroke Color'?: VProperty<number[]>
          'ADBE Vector Stroke Opacity'?: VProperty<number>
          'ADBE Vector Stroke Width'?: VProperty<number>
          'ADBE Vector Stroke Line Cap'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Stroke Line Join'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Stroke Miter Limit'?: VProperty<number>
          'ADBE Vector Stroke Dashes'?: {
            enabled?: boolean
            selected?: boolean
            'ADBE Vector Stroke Dash 1'?: VProperty<number>
            'ADBE Vector Stroke Gap 1'?: VProperty<number>
            'ADBE Vector Stroke Dash 2'?: VProperty<number>
            'ADBE Vector Stroke Gap 2'?: VProperty<number>
            'ADBE Vector Stroke Dash 3'?: VProperty<number>
            'ADBE Vector Stroke Gap 3'?: VProperty<number>
            'ADBE Vector Stroke Offset'?: VProperty<number>
          }
          'ADBE Vector Stroke Taper'?: {
            enabled?: boolean
            selected?: boolean
            'ADBE Vector Taper Length Units'?: VPropertyNotKeyframable<1 | 2>
            'ADBE Vector Taper Start Length'?: VProperty<number>
            'ADBE Vector Taper End Length'?: VProperty<number>
            'ADBE Vector Taper StartWidthPx'?: VProperty<number>
            'ADBE Vector Taper EndWidthPx'?: VProperty<number>
            'ADBE Vector Taper Start Width'?: VProperty<number>
            'ADBE Vector Taper End Width'?: VProperty<number>
            'ADBE Vector Taper Start Ease'?: VProperty<number>
            'ADBE Vector Taper End Ease'?: VProperty<number>
          }
          'ADBE Vector Stroke Wave'?: {
            enabled?: boolean
            selected?: boolean
            'ADBE Vector Taper Wave Amount'?: VProperty<number> 
            'ADBE Vector Taper Wave Units'?: VPropertyNotKeyframable<1 | 2> 
            'ADBE Vector Taper Wavelength'?: VProperty<number> 
            'ADBE Vector Taper Wave Cycles'?: VProperty<number> 
            'ADBE Vector Taper Wave Phase'?: VProperty<number> 
          }
        }
      }
      'ADBE Vector Filter - Repeater'?: {
        [name: string]: VPropertyBase & {
          "ADBE Vector Repeater Copies"?: VProperty<number>
          "ADBE Vector Repeater Offset"?: VProperty<number>
          "ADBE Vector Repeater Order"?: VPropertyNotKeyframable<1 | 2>
          "ADBE Vector Repeater Transform"?: {
            "ADBE Vector Repeater Anchor"?: VProperty<number[]>
            "ADBE Vector Repeater Position"?: VProperty<number[]>
            "ADBE Vector Repeater Scale"?: VProperty<number[]>
            "ADBE Vector Repeater Rotation"?: VProperty<number>
            "ADBE Vector Repeater Opacity 1"?: VProperty<number>
            "ADBE Vector Repeater Opacity 2"?: VProperty<number>
          }
        }
      }
    }
  }
}