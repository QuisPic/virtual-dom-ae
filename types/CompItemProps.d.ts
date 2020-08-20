declare namespace AeVirtualDOM {
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
  }
}