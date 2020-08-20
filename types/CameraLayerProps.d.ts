declare namespace AeVirtualDOM {
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
    }
  }
}