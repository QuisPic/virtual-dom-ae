declare namespace AeVirtualDOM {
  interface BoxTextLayerProps extends TextBaseProps {
    initial?: [[width: number, height: number]]

    /** Key for this element. */
    key?: string
  }
}