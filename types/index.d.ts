// Type definitions for virtual-dom 2.1.1
// Project: https://github.com/Matt-Esch/virtual-dom
// Definitions by: Christopher Brown <https://github.com/chbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace AeVirtualDOM {
  interface VHook {
    hook(node: AeNode, propertyName: string): void;
    unhook(node: AeNode, propertyName: string): void;
  }

  type AeNode = AVItem | CompItem | FolderItem | FootageItem | AVLayer | CameraLayer | LightLayer | ShapeLayer | TextLayer | Property<any> | PropertyGroup

  type TagNames = ItemsTagNames | LayersTagNames

  enum ItemsTagNames {
    Root = 'root',
    Comp = 'comp',
    Folder = 'folder',
  }

  enum LayersTagNames {
    AVLayer = 'avLayer',
    Shape = 'shape',
    Text = 'text',
    Null = 'null',
    Solid = 'solid',
    Camera = 'camera',
    BoxText = 'boxText',
    Light = 'light',
  }

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

  type ChildsTagNames<T extends ItemsTagNames> = T extends 'folder' | 'root' ? ItemsTagNames : LayersTagNames 

  interface VNode<T extends TagNames> {
    tagName: TagNames;
    properties: VProperties[T];
    children: T extends ItemsTagNames ? VTree<ChildsTagNames<T>>[] : [];
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
      tagName: TagNames,
      properties: VProperties,
      children: typeof tagName extends ItemsTagNames ? VTree<ChildsTagNames<typeof tagName>>[] : [],
      key?: string
    ): VNode<typeof tagName>;
  }

  interface Widget {
    type: string; // 'Widget'
    init(): AeNode;
    update(previous: Widget, domNode: AeNode): void;
    destroy(node: AeNode): void;
  }

  interface Thunk<T extends TagNames> {
    type: string; // 'Thunk'
    vnode: VTree<T>;
    render(previous: VTree<T>): VTree<T>;
  }

  type VTree<T extends TagNames> = VNode<T> | Widget | Thunk<T>;

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
    vNode: VNode<TagNames>;
    patch: any;
    version: string;
    /**
    type is set to 'VirtualPatch' on the prototype, but overridden in the
    constructor with a number.
    */
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

  type VChild<T extends TagNames> = VTree<T>[] | VTree<T>;

  /**
  create() calls either document.createElement() or document.createElementNS(),
  for which the common denominator is Element (not HTMLElement).
  */
  function create(vnode: VNode<TagNames> | Widget | Thunk<TagNames>): AeNode;

  function h(
    tagName: TagNames,
    properties?: VProperties[typeof tagName],
    children?: typeof tagName extends ItemsTagNames ? VChild<ChildsTagNames<typeof tagName>>[] : undefined
  ): VNode<typeof tagName>;

  function h(
    tagName: TagNames,
    children?: typeof tagName extends ItemsTagNames ? VChild<ChildsTagNames<typeof tagName>>[] : undefined
  ): VNode<typeof tagName>;

  function diff(left: VTree<TagNames>, right: VTree<TagNames>): VPatch[];
  /**
  patch() usually just returns rootNode after doing stuff to it, so we want
  to preserve that type (though it will usually be just Element).
  */
  function patch<T extends AeNode>(rootNode: T, patches: VPatch[], renderOptions?: VPatchOptions<T>): T;

  function isVNode(vTree: VTree<TagNames>): vTree is VNode<TagNames>;
  function isWidget(vTree: VTree<TagNames>): vTree is Widget;
  function isThunk(vTree: VTree<TagNames>): vTree is Thunk<TagNames>;
}

declare module "virtual-dom-ae/h" {
  // export = VirtualDOM.h; works just fine, but the DT checker doesn't like it
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
