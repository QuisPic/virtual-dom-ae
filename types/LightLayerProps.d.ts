declare namespace AeVirtualDOM {
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
    }
  }
}