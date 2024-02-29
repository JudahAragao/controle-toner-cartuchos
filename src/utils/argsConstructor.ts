type Constructor<T = {}> = new (...args: any[]) => T;

interface WithNoArgsConstructor<T> {
  new (): T;
}

function noArgsConstructor<T>(Base: Constructor): Constructor<WithNoArgsConstructor<T>> & T {
  return class extends (Base as any) {
    constructor() {
      super();
    }
  } as Constructor<WithNoArgsConstructor<T>> & T;
}

export function WithNoArgsConstructor<T>() {
    return function (target: Constructor): Constructor<WithNoArgsConstructor<T>> & T {
        return noArgsConstructor(target);
    };
}

interface WithAllArgsConstructor<T> {
    new (...args: any[]): T;
}
  
function allArgsConstructor<T>(Base: Constructor): Constructor<WithAllArgsConstructor<T>> & T {
    return class extends (Base as any) {
        constructor(...args: any[]) {
            super(...args);
        }
    } as Constructor<WithAllArgsConstructor<T>> & T;
}
  
export function WithAllArgsConstructor<T>() {
    return function (target: Constructor): Constructor<WithAllArgsConstructor<T>> & T {
        return allArgsConstructor(target);
    };
}