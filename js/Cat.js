let cat = {
  name: "猫后",
  // 姓名
  age: 6,
  // 年龄
  height: 5,
  // 体重
  sex: "female",
  // 性别
  food: 100,
  // 饱食度
  health: 100,
  // 健康值
  healthPoint: 600,
  // 生命值
  aggressivity: 100,
  // 攻击力
  MagicAttack: 200,
  // 法术攻击
  mana: 300,
  // 法力值
  defense: 100,
  // 防御力
  MagicResistance: 100,
  // 魔抗
  GoldCoin: 100,
  // 金币
  liveTimer: null,
  // 计时器
  islive: true,
  // 是否存活


  // bark2: function () {
  //   console.log("喵");
  // },
  // ask2: function () {
  //   return this.name;
  // },
  // setName2: function (newName) {
  //   this.name = newName;
  //   // newName = "发财";
  // },
  run2: function () {
    // if (!this.islive) {
    if (this.food > 20) {
      let speakT1 = document.getElementById("speakT");
      speakT1.innerHTML = "开心的到处跑....";
      this.food -= 10;
    } else {
      let speakT2 = document.getElementById("speakT");
      speakT2.innerHTML = "主人" + this.name + "饿了";
    };
    // } else {
    //   console.log("去了天堂");
    // }
  },
  feed2: function () {
    if (this.food > 90) {
      let speakT3 = document.getElementById("speakT");
      speakT3.innerHTML = "主人" + this.name + "不饿哦主人";
    } else {
      this.food += 10;
      let speakT4 = document.getElementById("speakT");
      speakT4.innerHTML = "嘿嘿嘿,啊香好";
    }
  },
  setI2: function () {
    let self = this;
    this.liveTimer = setInterval(function () {
      self.food--;
      self.checkfood2();
      self.checkhealth2();
      // console.log(self.food);
    }, 5000);
  },
  checkfood2: function () {
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
  checkhealth2: function () {
    if (this.health === 0) {
      // console.log(this.health);
      this.dead2();
    };
    if (this.health >= 100) {
      this.health = 100;
    }
  },
  dead2: function () {
    console.log("waooooo.......");
    let speakT6 = document.getElementById("speakT");
    speakT6.innerHTML = "waooooo.......";
    clearInterval(this.liveTimer);
    this.islive = false;
  },
  tellstatus2: function () {
    return "饱食度 : [" + this.food + "]" + " " + "健康值 : [" + this.health + "]" + " " + "是否存活 :" + (this.islive ? "存活" : "挂了") + " 金币 : [" + this.GoldCoin + "]";
  },
  // 复活
  resurgence2: function () {
    this.islive = true;
    this.food = 100;
    this.health = 100;
    let speakT7 = document.getElementById("speakT");
    speakT7.innerHTML = "！！！达巴斯吧斗战";
  },
  // 回蓝
  replymana: function () {
    this.mana += 50;
  },
  Catfire1: function () {
    // this.healthPoint -= 100;
    // let life = document.getElementById("haeS2");
    // life.style.width = this.healthPoint + "px"
    if (this.mana > 0) {
      this.healthPoint -= 100;
      this.mana -= 50;
      let life = document.getElementById("haeS");
      life.style.width = this.healthPoint + "px";
      let speak8 = document.getElementById("speakT");
      speak8.innerHTML = "天外飞仙";
    } else if (this.mana === 0) {
      let speak9 = document.getElementById("speakT");
      speak9.innerHTML = "蓝量不足，无法发动攻击";
    }
    CatCheckPicture();
  },
  Catfire2: function () {
    // this.healthPoint -= 100;
    // let life = document.getElementById("haeS2");
    // life.style.width = this.healthPoint + "px"
    if (this.mana > 0) {
      this.healthPoint -= 90;
      this.mana -= 50;
      let life = document.getElementById("haeS");
      life.style.width = this.healthPoint + "px";
      let speak8 = document.getElementById("speakT");
      speak8.innerHTML = "三阴蜈蚣抓";
    } else if (this.mana === 0) {
      let speak9 = document.getElementById("speakT");
      speak9.innerHTML = "蓝量不足，无法发动攻击";
    }
    CatCheckPicture2();
  },
  Catfire3: function () {
    // this.healthPoint -= 100;
    // let life = document.getElementById("haeS2");
    // life.style.width = this.healthPoint + "px"
    if (this.mana > 0) {
      this.healthPoint -= 80;
      this.mana -= 50;
      let life = document.getElementById("haeS");
      life.style.width = this.healthPoint + "px";
      let speak8 = document.getElementById("speakT");
      speak8.innerHTML = "打狗棍法";
    } else if (this.mana === 0) {
      let speak9 = document.getElementById("speakT");
      speak9.innerHTML = "蓝量不足，无法发动攻击";
    }
    CatCheckPicture3();
  },
  Catfire4: function () {
    // this.healthPoint -= 100;
    // let life = document.getElementById("haeS2");
    // life.style.width = this.healthPoint + "px"
    if (this.mana > 0) {
      this.healthPoint -= 70;
      this.mana -= 50;
      let life = document.getElementById("haeS");
      life.style.width = this.healthPoint + "px";
      let speak8 = document.getElementById("speakT");
      speak8.innerHTML = "凤舞九天";
    } else if (this.mana === 0) {
      let speak9 = document.getElementById("speakT");
      speak9.innerHTML = "蓝量不足，无法发动攻击";
    }
    CatCheckPicture4();
  },
};
let view2 = {
  displaydog: function () {
    //   let dogs = document.getElementById("dogPic");
    //   // console.log(dogs);
    //   dogs.setAttribute("class", "dog");
    let catss = document.getElementById("catPic2");
    catss.setAttribute("class", "cat");
    // console.log(dogs);
  },
  displaycheck: function () {
    setInterval(function () {
      // let catstatus = document.getElementById("status");
      // catstatus.innerHTML = cat.tellstatus2();
      let catss = document.getElementById("Catstatus");
      catss.innerHTML = cat.tellstatus2();
    }, 100)
  }
};

let CatPicture = document.getElementById("catPic2");
function CatCheckPicture() {
  let pluss = setInterval(function () {
    CatPicture.setAttribute("id", "cat2");
    console.log(CatPicture)
  }, 100);
  let reduce = setTimeout(function () {
    CatPicture.removeAttribute("id");
    CatPicture.setAttribute("class", "cat3");
    clearInterval(pluss);
    console.log(CatPicture)
  }, 1000)
};
function CatCheckPicture2() {
  let pluss = setInterval(function () {
    CatPicture.setAttribute("id", "cat4");
    console.log(CatPicture)
  }, 100);
  let reduce = setTimeout(function () {
    CatPicture.removeAttribute("id");
    CatPicture.setAttribute("class", "cat3");
    clearInterval(pluss);
    console.log(CatPicture)
  }, 1000)
};
function CatCheckPicture3() {
  let pluss = setInterval(function () {
    CatPicture.setAttribute("id", "cat5");
    console.log(CatPicture)
  }, 100);
  let reduce = setTimeout(function () {
    CatPicture.removeAttribute("id");
    CatPicture.setAttribute("class", "cat3");
    clearInterval(pluss);
    console.log(CatPicture)
  }, 1000)
};
function CatCheckPicture4() {
  let pluss = setInterval(function () {
    CatPicture.setAttribute("id", "cat6");
    console.log(CatPicture)
  }, 100);
  let reduce = setTimeout(function () {
    CatPicture.removeAttribute("id");
    CatPicture.setAttribute("class", "cat3");
    clearInterval(pluss);
    console.log(CatPicture)
  }, 1000)
};
function CatCheckPicture5() {
  let pluss = setInterval(function () {
    CatPicture.setAttribute("id", "cat7");
    console.log(CatPicture)
  }, 100);
  let reduce = setTimeout(function () {
    CatPicture.removeAttribute("id");
    CatPicture.setAttribute("class", "cat3");
    clearInterval(pluss);
    console.log(CatPicture)
  }, 4000)
};
// let fire = 600;
// let life = document.getElementById("haeS2");

// function fire1() {
//   fire -= 100;
//   haeS2.style.width = fire + "px";
//   let speak8 = document.getElementById("speak");
//   speak8.innerHTML = "龙象般若";
// }
// function fire2() {
//   fire -= 100;
//   haeS2.style.width = fire + "px";
//   let speak9 = document.getElementById("speak");
//   speak9.innerHTML = "混元霹雳";
// };

// function fire3() {
//   fire -= 150;
//   haeS2.style.width = fire + "px";
//   let speak10 = document.getElementById("speak");
//   speak10.innerHTML = "波爷把妈哄";
// };

// function fire4() {
//   fire -= 250;
//   haeS2.style.width = fire + "px";
//   let speak11 = document.getElementById("speak");
//   speak11.innerHTML = "大威天龙";
// };
// let dogstatus =  document.getElementById("status");
// // console.log(dogstatus)
// dogstatus.innerHTML = dog.tellstatus();

view2.displaydog();
view2.displaycheck();
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
console.log(cat.food);
cat.setI2();
console.log(cat.health);
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