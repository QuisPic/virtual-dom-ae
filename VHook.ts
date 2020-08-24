type AeNode = AVItem | CompItem | FolderItem | FootageItem | AVLayer | CameraLayer | LightLayer | ShapeLayer | TextLayer | Property<any> | PropertyGroup

interface VHook<T extends AeNode> {
  [key: string]: any
  [key: number]: any

  hook?(node: T, propertyName: string, previous?: VHook<T>): void;
  unhook?(node: T, propertyName: string, previous?: VHook<T>): void;
}