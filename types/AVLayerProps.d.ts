declare namespace AeVirtualDOM {
  interface AVLayerProps extends AVLayerBaseProps {
    /** Item id or Item itself */
    initial: number | AVItem | CompItem | FootageItem

    /** Key for this element. */
    key?: string

    'ADBE Time Remapping'?: VProperty<number>
  }
}