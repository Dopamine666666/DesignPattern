export class Singleton {

  private static _ins: Singleton;

  public static ins() {
    if(!Singleton._ins) Singleton._ins = new Singleton();
    return Singleton._ins;
  }

  constructor() {
    if(Singleton._ins) throw new Error('singleton should be created by use Singleton.ins()')
  }
}

// export const singleton = Singleton.ins();

// 单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点