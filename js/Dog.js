let dog = {
  name: "发财",
  // 姓名
  age: 7,
  // 年龄
  height: 5,
  // 体重
  sex: "male",
  // 性别
  food: 100,
  // 饱食度
  health: 100,
  // 健康值
  healthPoint: 600,
  // 生命值
  aggressivity: 200,
  // 攻击力
  MagicAttack: 100,
  // 法术攻击
  mana: 250,
  // 法力值
  defense: 150,
  // 防御力
  MagicResistance: 100,
  // 魔抗
  GoldCoin: 100,
  // 金币
  liveTimer: null,
  // 计时器
  islive: true,
  // 是否存活


  bark: function () {
    console.log("旺");
  },
  ask: function () {
    return this.name;
  },
  setName: function (newName) {
    this.name = newName;
    // newName = "发财";
  },
  run: function () {
    // if (!this.islive) {
    if (this.food > 20) {
      let speak1 = document.getElementById("speak");
      speak1.innerHTML = "开心的到处跑....";
      this.food -= 10;
    } else {
      let speak2 = document.getElementById("speak");
      speak2.innerHTML = "主人" + this.name + "饿了";
    };
    // } else {
    //   console.log("去了天堂");
    // }
  },
  feed: function () {
    if (this.food > 90) {
      let speak3 = document.getElementById("speak");
      speak3.innerHTML = "主人" + this.name + "不饿哦！";
    } else {
      this.food += 10;
      let speak4 = document.getElementById("speak");
      speak4.innerHTML = "好香啊，嘿嘿嘿";
    }
  },
  setI: function () {
    let self = this;
    this.liveTimer = setInterval(function () {
      self.food--;
      self.checkfood();
      self.checkhealth();
      // console.log(self.food);
    }, 5000);
  },
  checkfood: function () {
    if (this.food <= 0) {
      this.food = 0;
      this.health -= 5;
    } else if (this.food >= 80) {
      this.food = this.food >= 100 ? 100 : this.food;
      this.health += 5;
    };
    // console.log(this.health);
    // clearInterval(this.liveTimer);
  },
  checkhealth: function () {
    if (this.health === 0) {
      // console.log(this.health);
      this.dead();
    };
    if (this.health >= 100) {
      this.health = 100;
    }
  },
  dead: function () {
    console.log("waooooo.......");
    let speak6 = document.getElementById("speak");
    speak6.innerHTML = "waooooo.......";
    clearInterval(this.liveTimer);
    this.islive = false;
  },
  tellstatus: function () {
    return "饱食度 : [" + this.food + "]" + " " + "健康值 : [" + this.health + "]" + " " + "是否存活 : [" + (this.islive ? "存活" : "挂了") + "]" + " 金币 : [" + this.GoldCoin + "]";
  },
  // 复活
  resurgence: function () {
    this.islive = true;
    this.food = 100;
    this.health = 100;
    let speak7 = document.getElementById("speak");
    speak7.innerHTML = "战斗吧，斯巴达！！！";
  },
  // 回蓝
  replymana: function () {
    this.mana += 50;
  },
  // 回血
  replyhealthPoint: function () {
    this.healthPoint += 200;
    let doglife = document.getElementById("haeS")
    doglife.style.width = this.healthPoint + "px";
    this.checkhealthPoint();
  },
  // checkhealthPoint: function () {
  //   if(this.healthPoint >= 600){
  //     this.healthPoint = 600;
  //   }
  // },
  // DogPicture: function () {
  //   let DogPicture = document.getElementById("dogPic");
  //   let plus = setInterval(function () {
  //     DogPicture.setAttribute("id", "dog2");
  //     console.log(DogPicture)
  //   }, 1000);
  //   let reduce = setTimeout(function () {
  //     DogPicture.removeAttribute("id");
  //     DogPicture.setAttribute("class", "dog3");
  //     clearInterval(plus);
  //     console.log(DogPicture)
  //   }, 3000)
  // },
  Dogfire1: function () {
    // this.healthPoint -= 100;
    // let life = document.getElementById("haeS2");
    // life.style.width = this.healthPoint + "px"
    if (this.mana > 0) {
      this.healthPoint -= 50;
      this.mana -= 20;
      let life = document.getElementById("haeS2");
      life.style.width = this.healthPoint + "px";
      // let speakT9 = document.getElementById("speakT");
      // speakT9.innerHTML = "挥霍挥霍";
      let speak8 = document.getElementById("speak");
      speak8.innerHTML = "龙象般若";
    } else if (this.mana === 0) {
      let speak9 = document.getElementById("speak");
      speak9.innerHTML = "蓝量不足，无法发动攻击";
    }
    // this.DogPicture();
    DogCheckPicture();
  },
  Dogfire2: function () {
    // this.healthPoint -= 100;
    // let life = document.getElementById("haeS2");
    // life.style.width = this.healthPoint + "px"
    if (this.mana > 0) {
      this.healthPoint -= 80;
      this.mana -= 30;
      let life = document.getElementById("haeS2");
      life.style.width = this.healthPoint + "px";
      // let speakT9 = document.getElementById("speakT");
      // speakT9.innerHTML = "挥霍挥霍";
      let speak10 = document.getElementById("speak");
      speak10.innerHTML = "混元霹雳";
    } else if (this.mana === 0) {
      let speak11 = document.getElementById("speak");
      speak11.innerHTML = "蓝量不足，无法发动攻击";
    }
    DogCheckPicture2();
  },
  Dogfire3: function () {
    // this.healthPoint -= 100;
    // let life = document.getElementById("haeS2");
    // life.style.width = this.healthPoint + "px"
    if (this.mana > 0) {
      this.healthPoint -= 100;
      this.mana -= 40;
      let life = document.getElementById("haeS2");
      life.style.width = this.healthPoint + "px";
      // let speakT9 = document.getElementById("speakT");
      // speakT9.innerHTML = "挥霍挥霍";
      let speak12 = document.getElementById("speak");
      speak12.innerHTML = "波爷把妈哄";
    } else if (this.mana === 0) {
      let speak13 = document.getElementById("speak");
      speak13.innerHTML = "蓝量不足，无法发动攻击";
    }
    DogCheckPicture3();
  },
  Dogfire4: function () {
    // this.healthPoint -= 100;
    // let life = document.getElementById("haeS2");
    // life.style.width = this.healthPoint + "px"
    if (this.mana > 0) {
      this.healthPoint -= 120;
      this.mana -= 50;
      let life = document.getElementById("haeS2");
      life.style.width = this.healthPoint + "px";
      // let speakT9 = document.getElementById("speakT");
      // speakT9.innerHTML = "挥霍挥霍";
      let speak14 = document.getElementById("speak");
      speak14.innerHTML = "大威天龙";
    } else if (this.mana === 0) {
      let speak15 = document.getElementById("speak");
      speak15.innerHTML = "蓝量不足，无法发动攻击";
    }
    DogCheckPicture4();
  },
};
let view = {
  displaydog: function () {
    let dogs = document.getElementById("dogPic");
    // console.log(dogs);
    dogs.setAttribute("class", "dog");
    // let dogss = document.getElementById("dogPic2");
    // dogss.setAttribute("class", "dog2");
    // console.log(dogs);
  },
  displaycheck: function () {
    setInterval(function () {
      let dogstatus = document.getElementById("Dogstatus");
      dogstatus.innerHTML = dog.tellstatus();
    }, 100)
  }
}

let DogPicture = document.getElementById("dogPic");
function DogCheckPicture() {
  let plus = setInterval(function () {
    DogPicture.setAttribute("id", "dog2");
    console.log(DogPicture)
  }, 100);
  let reduce = setTimeout(function () {
    DogPicture.removeAttribute("id");
    DogPicture.setAttribute("class", "dog3");
    clearInterval(plus);
    console.log(DogPicture)
  }, 1000)
};
function DogCheckPicture2() {
  let plus = setInterval(function () {
    DogPicture.setAttribute("id", "dog4");
    console.log(DogPicture)
  }, 100);
  let reduce = setTimeout(function () {
    DogPicture.removeAttribute("id");
    DogPicture.setAttribute("class", "dog3");
    clearInterval(plus);
    console.log(DogPicture)
  }, 1000)
};
function DogCheckPicture3() {
  let plus = setInterval(function () {
    DogPicture.setAttribute("id", "dog5");
    console.log(DogPicture)
  }, 100);
  let reduce = setTimeout(function () {
    DogPicture.removeAttribute("id");
    DogPicture.setAttribute("class", "dog3");
    clearInterval(plus);
    console.log(DogPicture)
  }, 1000)
};
function DogCheckPicture4() {
  let plus = setInterval(function () {
    DogPicture.setAttribute("id", "dog6");
    console.log(DogPicture)
  }, 100);
  let reduce = setTimeout(function () {
    DogPicture.removeAttribute("id");
    DogPicture.setAttribute("class", "dog3");
    clearInterval(plus);
    console.log(DogPicture)
  }, 1000)
};
// let dogstatus =  document.getElementById("status");
// // console.log(dogstatus)
// dogstatus.innerHTML = dog.tellstatus();

view.displaydog();
view.displaycheck();
// dog.setName("facai");
// console.log(dog.ask());
// console.log(dog.run());
// dog.run();
// dog.run();
// dog.run();
// dog.run();
// dog.run();
// dog.run();
// dog.run();
// dog.run();
// dog.run();
// dog.feed();
// dog.feed();
// dog.feed();
// dog.feed();
// dog.feed();
console.log(dog.food);
dog.setI();
console.log(dog.health);
// console.log(dog.setName());

// setInterval(function(){
//   let a = 100;
//   if(a>0){

//   }
//   // console.log(a)
// },1000);

// setInterval(function(){
//   console.log("123");
// },100)