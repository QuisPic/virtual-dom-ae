declare namespace AeVirtualDOM {
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
}