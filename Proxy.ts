interface Subject {
  doAction();
}

class RealSubject implements Subject {
  doAction() {
    console.log('real subject do action');
  }
}

export class Proxy implements Subject {
  private realSubject: RealSubject;

  constructor() {

  }

  doAction() {
    if(!this.realSubject) this.realSubject = new RealSubject();
    this.realSubject.doAction();
  }
}

// 代理模式：为一个对象提供一个代理，以便控制对他的访问