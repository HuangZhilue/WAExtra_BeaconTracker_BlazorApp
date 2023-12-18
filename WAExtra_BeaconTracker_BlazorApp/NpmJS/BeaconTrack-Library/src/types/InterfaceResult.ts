export type InterfaceResult = {
  Success: boolean;
  Message: string;
  Result: never;
  List: never[]; // 此处可以根据实际情况更改数组元素类型
};
