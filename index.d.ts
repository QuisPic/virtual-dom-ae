// Type definitions for virtual-dom 2.1.1
// Project: https://github.com/Matt-Esch/virtual-dom
// Definitions by: Christopher Brown <https://github.com/chbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace AeVirtualDOM {
  type VHook<T extends AeNode, A = object> = A & {
    hook?(this: A, node: T, propertyName: string, previous?: VHook<T, A>): void;
    unhook?(this: A, node: T, propertyName: string, previous?: VHook<T, A>): void;
  }

  type AeNode = AVItem | CompItem | FolderItem | FootageItem | AVLayer | CameraLayer | LightLayer | ShapeLayer | TextLayer | Property<any> | PropertyGroup

  type Tags = ItemsTags | LayersTags

  type ItemsTags = 
    | 'root'
    | 'comp'
    | 'folder'

  type LayersTags =
    | 'avLayer'
    | 'shape'
    | 'text'
    | 'null'
    | 'solid'
    | 'camera'
    | 'boxText'
    | 'light'

  interface VProperties {
    root: {}
    comp: CompItemProps
    folder: FolderItemProps
    avLayer: AVLayerProps
    shape: ShapeLayerProps
    text: TextLayerProps
    null: NullLayerProps
    solid: SolidLayerProps
    camera: CameraLayerProps
    boxText: BoxTextLayerProps
    light: LightLayerProps
  }

  interface ItemProps {
    /** The name of the object as shown in the Project panel. */
    name?: string

     /** A descriptive string. */
    comment?: string
    
    /** The parent folder of this item. */
    parentFolder?: FolderItem

    /** When true, this item is currently selected. */
    selected?: boolean

    /** The label color for the item. */
    label?: number

    /** Creates a new guide and adds it to the guides object of the Item. */
    addGuide?: [orientationType: 0 | 1, position: number]

    /** emoves an existing guide. Choose the guide based on its index inside the Item.guides object. */
    removeGuide?: number

    /** Modifies the position of an existing guide. Choose the guide based on its guideIndex inside the Item.guides array. */
    setGuide?: [position: number, guideIndex: number]
  }

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
            hooks?: {
              [name: string]: VHook<PropertyGroup>
            }
          }
        }
      }
      hooks?: {
        [name: string]: VHook<PropertyGroup>
      }
    }
    'ADBE Effect Parade'?: {
      members: {
        [effectName: string]:  {
          [effectKey: string]: VPropertyBase & {
            'ADBE Effect Built In Params'?: {
              'ADBE Effect Mask Parade'?: {
                members?: {
                  'ADBE Effect Mask'?: {
                    [name: string]: {
                      'ADBE Effect Path Stream Ref'?: VPropertyNotKeyframable<number>
                      hooks?: {
                        [name: string]: VHook<PropertyGroup>
                      }
                    }
                  }
                }
                hooks?: {
                  [name: string]: VHook<PropertyGroup>
                }
              }
              'ADBE Effect Mask Opacity'?: VProperty<number>
              hooks?: {
                [name: string]: VHook<PropertyGroup>
              }
            }
            hooks?: {
              [name: string]: VHook<PropertyGroup>
            }
            [propName: string]: any
          }
        }
      }
      hooks?: {
        [name: string]: VHook<PropertyGroup>
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
      hooks?: {
        [name: string]: VHook<PropertyGroup>
      }
    }
    'ADBE Audio Group'?: {
      'ADBE Audio Levels'?: VProperty<number>
      hooks?: {
        [name: string]: VHook<PropertyGroup>
      }
    }
  }

  interface AVLayerProps extends AVLayerBaseProps {
    /** Item id or the Item itself */
    initial: number | AVItem | CompItem | FootageItem

    /** Key for this element. */
    key?: string

    'ADBE Time Remapping'?: VProperty<number>

    hooks?: {
      [name: string]: VHook<AVLayer>
    }
  }

  interface BoxTextLayerProps extends TextBaseProps {
    initial?: [[width: number, height: number]]

    /** Key for this element. */
    key?: string

    hooks?: {
      [name: string]: VHook<TextLayer>
    }
  }

  interface CameraLayerProps extends LayerProps {
    initial: [name: string, centerPoint: number[]]

    /** Key for this element. */
    key?: string

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
      hooks?: {
        [name: string]: VHook<PropertyGroup>
      }
    }
    'ADBE Camera Options Group'?: {
      selected?: boolean
      "ADBE Camera Zoom"?: VProperty<number>
      "ADBE Camera Depth of Field"?: VProperty<boolean>
      "ADBE Camera Focus Distance"?: VProperty<number>
      "ADBE Camera Aperture"?: VProperty<number>
      "ADBE Camera Blur Level"?: VProperty<number>
      "ADBE Iris Shape"?: VProperty<1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10>
      "ADBE Iris Rotation"?: VProperty<number>
      "ADBE Iris Roundness"?: VProperty<number>
      "ADBE Iris Aspect Ratio"?: VProperty<number>
      "ADBE Iris Diffraction Fringe"?: VProperty<number>
      "ADBE Iris Highlight Gain"?: VProperty<number>
      "ADBE Iris Highlight Threshold"?: VProperty<number>
      "ADBE Iris Hightlight Saturation"?: VProperty<number>
      hooks?: {
        [name: string]: VHook<PropertyGroup>
      }
    }
    hooks?: {
      [name: string]: VHook<CameraLayer>
    }
  }

  interface CompItemProps extends AVItemProps {
    initial: [
      name: string,
      width: number,
      height: number, 
      pixelAspect: number,
      duration: number,
      frameRate: number,
    ]

    /** Key for this element. */
    key?: string

    /** When true, indicates that the composition uses drop-frame timecode. */
    dropFrame?: boolean

    /** The work area start time. */
    workAreaStart?: number

    /** The work area duration. */
    workAreaDuration?: number

    /** When true, shy layers are visible in the Timeline panel. */
    hideShyLayers?: boolean

    /** When true, motion blur is enabled for this composition. */
    motionBlur?: boolean

    /** When true, Draft 3D mode is enabled for the Composition panel. */
    draft3d?: boolean

    /** When true, time filtering is enabled for this composition. */
    frameBlending?: boolean

    /** When true, the frame rate of nested compositions is preserved. */
    preserveNestedFrameRate?: boolean

    /** When true, the resolution of nested compositions is preserved. */
    preserveNestedResolution?: boolean

    /** The background color of the composition. */
    bgColor?: [number, number, number]

    /** Changes the display of the start time in the Timeline panel. */
    displayStartTime?: number

    /** The frame value of the beginning of the composition. */
    displayStartFrame?: number

    /** The factor by which the x and y resolution of the Composition panel is downsampled. */
    resolutionFactor?: [number, number]

    /** The camera shutter angle. */
    shutterAngle?: number

    /** The camera shutter phase. */
    shutterPhase?: number

    /** The minimum number of motion blur samples per frame for Classic 3D layers, shape layers, and certain effects. */
    motionBlurSamplesPerFrame?: number

    /** The maximum number of motion blur samples of 2D layer motion. */
    motionBlurAdaptiveSampleLimit?: number

    /** The rendering plug-in module to be used to render this composition. */
    renderer?: string

    /** A PropertyGroup object that contains all a composition’s markers. Composition marker scripting has the same functionality as layer markers. */
    markerProperty?: VProperty<MarkerValue>

    /** The name in the Essential Graphics panel is used for the file name of an exported Motion Graphics template (ex., “My Template.mogrt”). */
    motionGraphicsTemplateName?: string

    /** Opens the composition in a Composition panel. */
    openInViewer?: Viewer | null

    /** Exports the composition as a Motion Graphics template. */
    exportAsMotionGraphicsTemplate?: [doOverWriteFileIfExisting: boolean, file_path?: string]

    /** Sets the name of a single property in the Essential Graphics panel. */
    setMotionGraphicsControllerName?: [index: number, newName: string]

    /** Opens the composition in the Essential Graphics panel. */
    openInEssentialGraphics?: []

    hooks?: {
      [name: string]: VHook<CompItem>
    }
  }

  interface FolderItemProps extends ItemProps {
    /** The name of this folder. */
    initial: string

    /** Key for this element. */
    key?: string

    hooks?: {
      [name: string]: VHook<FolderItem>
    }
  }

  interface ItemProps {
    /** The name of the object as shown in the Project panel. */
    name?: string

     /** A descriptive string. */
    comment?: string
    
    /** The parent folder of this item. */
    parentFolder?: FolderItem

    /** When true, this item is currently selected. */
    selected?: boolean

    /** The label color for the item. */
    label?: number

    /** Creates a new guide and adds it to the guides object of the Item. */
    addGuide?: [orientationType: 0 | 1, position: number]

    /** emoves an existing guide. Choose the guide based on its index inside the Item.guides object. */
    removeGuide?: number

    /** Modifies the position of an existing guide. Choose the guide based on its guideIndex inside the Item.guides array. */
    setGuide?: [position: number, guideIndex: number]
  }

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

  interface LightLayerProps extends LayerProps {
    initial: [name: string, centerPoint: number[]]

    /** Key for this element. */
    key?: string

    lightType?: LightType
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
      hooks?: {
        [name: string]: VHook<PropertyGroup>
      }
    }
    'ADBE Light Options Group'?: {
      selected?: boolean
      "ADBE Light Intensity"?: VProperty<number>
      "ADBE Light Color"?: VProperty<number[]>
      "ADBE Light Cone Angle"?: VProperty<number>
      "ADBE Light Cone Feather 2"?: VProperty<number>
      "ADBE Light Falloff Type"?: VProperty<1 | 2 | 3>
      "ADBE Light Falloff Start"?: VProperty<number>
      "ADBE Light Falloff Distance"?: VProperty<number>
      "ADBE Casts Shadows"?: VPropertyNotKeyframable<boolean>
      "ADBE Light Shadow Darkness"?: VProperty<number>
      "ADBE Light Shadow Diffusion"?: VProperty<number>
      hooks?: {
        [name: string]: VHook<PropertyGroup>
      }
    }
  }

  interface NullLayerProps extends AVLayerBaseProps {
    /** Duration of this layer. */
    initial?: number

    /** Key for this element. */
    key?: string

    hooks?: {
      [name: string]: VHook<AVLayer>
    }
  }

  interface ShapeLayerProps extends AVLayerBaseProps {
    /** Key for this element. */
    key?: string

    'ADBE Root Vectors Group'?: VectorsGroup

    hooks?: {
      [name: string]: VHook<ShapeLayer>
    }
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
            hooks?: {
              [name: string]: VHook<PropertyGroup>
            }
          }
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
        }
        hooks?: {
          [name: string]: VHook<PropertyGroup>
        }
      }
      'ADBE Vector Shape - Rect'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Shape Direction'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Rect Size'?: VProperty<number[]>
          'ADBE Vector Rect Position'?: VProperty<number[]>
          'ADBE Vector Rect Roundness'?: VProperty<number>
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
        }
      }
      'ADBE Vector Shape - Ellipse'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Shape Direction'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Ellipse Size'?: VProperty<number[]>
          'ADBE Vector Ellipse Position'?: VProperty<number[]>
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
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
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
        }
      }
      'ADBE Vector Shape - Group'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Shape Direction'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Shape'?: VProperty<Shape>
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
        }
      }
      'ADBE Vector Filter - Merge'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Merge Type'?: VPropertyNotKeyframable<1 | 2 | 3 | 4 | 5>
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
        }
      }
      'ADBE Vector Filter - Offset'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Offset Amount'?: VProperty<number>
          'ADBE Vector Offset Line Join'?: VPropertyNotKeyframable<1 | 2 | 3>
          'ADBE Vector Offset Miter Limit'?: VProperty<number>
          'ADBE Vector Offset Copies'?: VProperty<number>
          'ADBE Vector Offset Copy Offset'?: VProperty<number>
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
        }
      }
      'ADBE Vector Filter - PB'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector PuckerBloat Amount'?: VProperty<number>
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
        }
      }
      'ADBE Vector Filter - RC'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector RoundCorner Radius'?: VProperty<number>
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
        }
      }
      'ADBE Vector Filter - Trim'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Trim Start'?: VProperty<number>
          'ADBE Vector Trim End'?: VProperty<number>
          'ADBE Vector Trim Offset'?: VProperty<number>
          'ADBE Vector Trim Type'?: VPropertyNotKeyframable<1 | 2>
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
        }
      }
      'ADBE Vector Filter - Twist'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Twist Angle'?: VProperty<number>
          'ADBE Vector Twist Center'?: VProperty<number[]>
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
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
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
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
            hooks?: {
              [name: string]: VHook<PropertyGroup>
            }
          }
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
        }
      }
      'ADBE Vector Filter - Zigzag'?: {
        [name: string]: VPropertyBase & {
          'ADBE Vector Zigzag Size'?: VProperty<number>
          'ADBE Vector Zigzag Detail'?: VProperty<number>
          'ADBE Vector Zigzag Points'?: VProperty<1 | 2>
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
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
            hooks?: {
              [name: string]: VHook<PropertyGroup>
            }
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
            hooks?: {
              [name: string]: VHook<PropertyGroup>
            }
          }
          'ADBE Vector Stroke Wave'?: {
            enabled?: boolean
            selected?: boolean
            'ADBE Vector Taper Wave Amount'?: VProperty<number> 
            'ADBE Vector Taper Wave Units'?: VPropertyNotKeyframable<1 | 2> 
            'ADBE Vector Taper Wavelength'?: VProperty<number> 
            'ADBE Vector Taper Wave Cycles'?: VProperty<number> 
            'ADBE Vector Taper Wave Phase'?: VProperty<number> 
            hooks?: {
              [name: string]: VHook<PropertyGroup>
            }
          }
          hooks?: {
            [name: string]: VHook<PropertyGroup>
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
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
       }
      }
      'ADBE Vector Graphic - Fill'?: {
        [name: string]: VPropertyBase & {
          "ADBE Vector Blend Mode"?: VPropertyNotKeyframable<number>
          "ADBE Vector Composite Order"?:VPropertyNotKeyframable<1 | 2>
          "ADBE Vector Fill Rule"?:VPropertyNotKeyframable<1 | 2>
          "ADBE Vector Fill Color"?: VProperty<number[]>
          "ADBE Vector Fill Opacity"?: VProperty<number>
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
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
            hooks?: {
              [name: string]: VHook<PropertyGroup>
            }
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
            hooks?: {
              [name: string]: VHook<PropertyGroup>
            }
          }
          'ADBE Vector Stroke Wave'?: {
            enabled?: boolean
            selected?: boolean
            'ADBE Vector Taper Wave Amount'?: VProperty<number> 
            'ADBE Vector Taper Wave Units'?: VPropertyNotKeyframable<1 | 2> 
            'ADBE Vector Taper Wavelength'?: VProperty<number> 
            'ADBE Vector Taper Wave Cycles'?: VProperty<number> 
            'ADBE Vector Taper Wave Phase'?: VProperty<number> 
            hooks?: {
              [name: string]: VHook<PropertyGroup>
            }
          }
          hooks?: {
            [name: string]: VHook<PropertyGroup>
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
            hooks?: {
              [name: string]: VHook<PropertyGroup>
            }
          }
          hooks?: {
            [name: string]: VHook<PropertyGroup>
          }
        }
      }
    }
    hooks?: {
      [name: string]: VHook<PropertyGroup>
    }
  }

  interface SolidLayerProps extends AVLayerBaseProps {
    initial: [color: number[], name: string, width: number, height: number, pixelAspect: number, duration?: number]

    /** Key for this element. */
    key?: string

    hooks?: {
      [name: string]: VHook<AVLayer>
    }
  }

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
        hooks?: {
          [name: string]: VHook<PropertyGroup>
        }
      }
      'ADBE Text More Options'?: {
        selected?: boolean
        "ADBE Text Anchor Point Option"?: VPropertyNotKeyframable<1 | 2 | 3 | 4>
        "ADBE Text Anchor Point Align"?: VProperty<number[]>
        "ADBE Text Render Order"?: VPropertyNotKeyframable<1 | 2 | 3>
        "ADBE Text Character Blend Mode"?: VPropertyNotKeyframable<number>
        hooks?: {
          [name: string]: VHook<PropertyGroup>
        }
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
                        hooks?: {
                          [name: string]: VHook<PropertyGroup>
                        }
                      }
                      hooks?: {
                        [name: string]: VHook<PropertyGroup>
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
                      hooks?: {
                        [name: string]: VHook<PropertyGroup>
                      }
                    }
                  }
                  'ADBE Text Expressible Selector'?: {
                    [name: string]: {
                      "ADBE Text Range Type2"?: VPropertyNotKeyframable<1 | 2 | 3 | 4>
                      "ADBE Text Expressible Amount"?: VProperty<number[]>
                      hooks?: {
                        [name: string]: VHook<PropertyGroup>
                      }
                    }
                  }
                }
                hooks?: {
                  [name: string]: VHook<PropertyGroup>
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
                hooks?: {
                  [name: string]: VHook<PropertyGroup>
                }
              }
              hooks?: {
                [name: string]: VHook<PropertyGroup>
              }
            }
          }
        }
        hooks?: {
          [name: string]: VHook<PropertyGroup>
        }
      }
    }
  }

  interface TextLayerProps extends TextBaseProps {
    initial?: string

    /** Key for this element. */
    key?: string

    hooks?: {
      [name: string]: VHook<TextLayer>
    }
  }

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

    hooks?: {
      [name: string]: VHook<Property<A>>
    }
  }

  interface VPropertyNotKeyframable<A> extends VPropertyBase {
    /** Sets the static value of the property. */
    setValue?: A

    hooks?: {
      [name: string]: VHook<Property<A>>
    }
  }

  type ChildsTagNames<T extends ItemsTags> = T extends 'folder' | 'root' ? ItemsTags : LayersTags 

  interface VNode<T extends Tags> {
    tagName: Tags;
    properties: VProperties[T];
    children: T extends ItemsTags ? VTree<ChildsTagNames<T>>[] : [];
    key?: string;
    namespace?: string;
    count: number;
    hasWidgets: boolean;
    hasThunks: boolean;
    hooks: any[];
    descendantHooks: any[];
    version: string;
    type: string; // 'VirtualNode'
  }

  interface VNodeConstructor {
    new (
      tagName: Tags,
      properties: VProperties,
      children: typeof tagName extends ItemsTags ? VTree<ChildsTagNames<typeof tagName>>[] : [],
      key?: string
    ): VNode<typeof tagName>;
  }

  interface Widget {
    type: string; // 'Widget'
    init(): AeNode;
    update(previous: Widget, domNode: AeNode): void;
    destroy(node: AeNode): void;
  }

  interface Thunk<T extends Tags> {
    type: string; // 'Thunk'
    vnode: VTree<T>;
    render(previous: VTree<T>): VTree<T>;
  }

  type VTree<T extends Tags> = VNode<T> | Widget | Thunk<T>;

  // enum VPatch {
  //   NONE = 0,
  //   VTEXT = 1,
  //   VNODE = 2,
  //   WIDGET = 3,
  //   PROPS = 4,
  //   ORDER = 5,
  //   INSERT = 6,
  //   REMOVE = 7,
  //   THUNK = 8
  // }
  interface VPatch {
    vNode: VNode<Tags>;
    patch: any;
    version: string;
    type: number;
  }

  type PatchFn<T extends AeNode> = (rootNode: T, patches: VPatch[], renderOptions: VPatchOptions<T>) => T;

  interface VPatchOptions<T extends AeNode> {
    patch?: PatchFn<T>;
  }

  interface createProperties {
    key?: string;
    namespace?: string;
  }

  type VChild<T extends Tags> = VTree<T>[] | VTree<T>;

  function create(vnode: VNode<Tags> | Widget | Thunk<Tags>): AeNode;

  function h<T extends Tags>(
    tagName: T,
    properties?: VProperties[T],
    children?: T extends ItemsTags ? VChild<ChildsTagNames<T>>[] : undefined
  ): VNode<T>;

  // function h<T extends Tags>(
  //   tagName: T,
  //   children?: T extends ItemsTags ? VChild<ChildsTagNames<T>>[] : []
  // ): VNode<T>;

  function diff(left: VTree<Tags>, right: VTree<Tags>): VPatch[];

  function patch<T extends AeNode>(rootNode: T, patches: VPatch[], renderOptions?: VPatchOptions<T>): T;

  function isVNode(vTree: VTree<Tags>): vTree is VNode<Tags>;
  function isWidget(vTree: VTree<Tags>): vTree is Widget;
  function isThunk(vTree: VTree<Tags>): vTree is Thunk<Tags>;
}

declare module "virtual-dom-ae/h" {
  import h = AeVirtualDOM.h;
  export = h;
}
declare module "virtual-dom-ae/create-element" {
  import create = AeVirtualDOM.create;
  export = create;
}
declare module "virtual-dom-ae/diff" {
  import diff = AeVirtualDOM.diff;
  export = diff;
}
declare module "virtual-dom-ae/patch" {
  import patch = AeVirtualDOM.patch;
  export = patch;
}
declare module "virtual-dom-ae" {
  export = AeVirtualDOM;
}
declare module "virtual-dom-ae/vnode/vnode" {
  import VNodeConstructor = AeVirtualDOM.VNodeConstructor;
  const VNode: VNodeConstructor;
  export = VNode;
}
declare module "virtual-dom-ae/vnode/is-vnode" {
  import isVNode = AeVirtualDOM.isVNode;
  export = isVNode;
}
declare module "virtual-dom-ae/vnode/is-widget" {
  import isWidget = AeVirtualDOM.isWidget;
  export = isWidget;
}
declare module "virtual-dom-ae/vnode/is-thunk" {
  import isThunk = AeVirtualDOM.isThunk;
  export = isThunk;
}
