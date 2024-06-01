abstract class Enemy {
  abstract doAction();
}

// interface Enemy {
//   doAction();
// }

class Zombie01Enemy implements Enemy {
  doAction() {
    
  }
}

class Zombie02Enemy implements Enemy {
  doAction() {

  }
}
// 抽象类或者接口
abstract class EnemyFactory {
  abstract createEnemy();
}

export class Zombie01Factory implements EnemyFactory {
  createEnemy() {
    return new Zombie01Enemy();
  }
}

export class Zombie02Factory implements EnemyFactory {
  createEnemy() {
    return new Zombie02Enemy();
  }
}

//抽象工厂模式