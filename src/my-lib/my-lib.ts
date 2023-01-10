class MyLib {
  public myFunc(): IMyInterface {
    const myObj: IMyObject = {
      justAny: "any",
    };

    const myInterface: IMyInterface = {
      name: "name",
      age: 18,
      isDone: true,
      date: new Date(),
      somethings: ["one", "two", "three"],
      obj: myObj,
      someobj: [myObj],
    };
    return myInterface;
  }
}

interface IMyInterface {
  name: string;
  age: number;
  isDone?: boolean;
  date: Date;
  somethings: string[];
  obj: IMyObject;
  someobj: IMyObject[];
}

interface IMyObject {
  justAny: any;
}

export { MyLib };
