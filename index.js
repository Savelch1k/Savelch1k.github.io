"use strict";

let all_items = {
    wooden_stick: {
        name: "Деревянная палочка",
        description: "Лучше простого кулака, но в любой момент может сломаться",
        break_chance: 30,
        strenght: 5,
        damage: 1,
        equipped: false
    },

    nettle: {
        name:"Крапива",
        description: "Жалит на не слабо, но ствол ломается от 1 удара",
        break_chance: 100,
        strenght: 1,
        damage: 3,
        equipped: false
    },

    iron_sword: {
        name: "Железный меч",
        description: "Железная классика, ничего не обычного, просто мечь.",
        break_chance: 10,
        strenght: 20,
        damage: 4,
        equipped: false
    },

    magic_ring: {
        name: "Волшебное кольцо",
        description: "Таинственно сияет и ты чувствуешь себя сильнее.",
        break_chance: 15,
        strenght: 10,
        damage: 2,
        equipped: false
    },

    rusty_dagger: {
        name: "Ржавый кинжал",
        description: "Хоть и ржавый, но все еще режет.",
        break_chance: 40,
        strenght: 8,
        damage: 2,
        equipped: false
    },

    stone_shield: {
        name: "Каменный щит",
        description: "Защищает на +2 к макс. здоровью, но с ним сражатся сложнее.",
        break_chance: 25,
        strenght: 15,
        damage: -1,
        max_hp: 2,
        equipped: false
    },

    crystal_sword: {
        name: "Кристальный меч",
        description: "Острый, как игла, но может треснуть при ударе.",
        break_chance: 50,
        strenght: 6,
        damage: 6,
        equipped: false
    },

    leather_armor: {
        name: "Кожаная броня",
        description: "Защищает не сильно, но зато прочная.",
        break_chance: 20,
        strenght: 20,
        max_hp: 1,
        equipped: false
    },

    fire_scroll: {
        name: "Свиток огня",
        description: "Одноразовый предмет, поджигающий врага.",
        break_chance: 100,
        strenght: 1,
        damage: 8,
        equipped: false
    },

    healing_herb: {
        name: "Лечебная трава",
        description: "Мгновенно восстанавливает 3 единицы здоровья.",
        break_chance: 100,
        strenght: 1,
        heal: 3,
        equipped: false
    },

    thunder_amulet: {
        name: "Амулет грома",
        description: "В противника может ударить молния.",
        break_chance: 50,
        strenght: 3,
        damage: 6,
        equipped: false
    },

    golden_spear: {
        name: "Золотое копьё",
        description: "Блестит ярче солнца, бьет сильнее молнии.",
        break_chance: 5,
        strenght: 25,
        damage: 5,
        equipped: false
    }
};

let enemies = {
    Petya: {
        name: "Петя", //Имя врага
        description: "Обычный человек, играет в камень-ножницы-бумага с друзьями, только когда нужно что-то/кого-то выбрать", // описание врага
        lvl: 1, // уровень, с которого тебе может выпасть этот враг
        win_percent: 60, //шанс выйграть
        health: 2, //здоровье врага
        damage: 1 // количество урона, которое наносит враг за удар
    },
    Sanya: {
        name: "Саня",
        description: "Он никогда не играл в камень-ножницы-бумага, поэтому путается и часто проигрывает",
        lvl: 1,
        win_percent: 70, //с шансом 70% выберет предмет, чтобы игрок выйграл
        health: 3,
        damage: 1
    },

    Vika: {
        name: "Вика",
        description: "Набирает опыт, иногда подстраивается.",
        lvl: 2,
        win_percent: 50,
        health: 4,
        damage: 1
    },

    Kolya: {
        name: "Коля",
        description: "Иногда везёт, иногда нет — обычный человек.",
        lvl: 2,
        win_percent: 65,
        health: 4,
        damage: 2
    },

    OldMan: {
        name: "Старик у колодца",
        description: "Знает пару трюков, но не напрягается.",
        lvl: 3,
        win_percent: 45,
        health: 5,
        damage: 2
    },

    Bandit: {
        name: "Бандит с большой дороги",
        description: "Хочет побеждать — не милосерден.",
        lvl: 3,
        win_percent: 50,
        health: 5,
        damage: 2
    },

    Ghost: {
        name: "Призрак",
        description: "Странный и непредсказуемый.",
        lvl: 4,
        win_percent: 35,
        health: 5,
        damage: 3,
    },

    Dragon: {
        name: "Маленький дракон",
        description: "Выглядит слабым, но если пыхнет огнем...",
        lvl: 5,
        win_percent: 30,
        health: 4,
        damage: 4
    },

    Troll: {
        name: "Тролль",
        description: "Большой и сильный, его лучше не злить.",
        lvl: 6,
        win_percent: 30,
        health: 7,
        damage: 3,
    },

    DarkKnight: {
        name: "Рыцарь тьмы",
        description: "Сражается за Повелителя демонов, очень силен.",
        lvl: 7,
        win_percent: 25,
        health: 8,
        damage: 5
    },

    Wizard: {
        name: "Маг",
        description: "Колдует так, что мало не покажется.",
        lvl: 8,
        win_percent: 15,
        health: 8,
        damage: 5
    },

    DemonLord: {
        name: "Повелитель демонов",
        description: "Чемпион мира по камень-ножницы-бумага.",
        lvl: 10,
        win_percent: 5,
        health: 10,
        damage: 6
    }
};

const rps = {1: '✊', 2: '✌', 3: '✋'};
var gamemode;
const enemyInfo = document.getElementById("enemyInfo");
const mainMenu = document.getElementById("mainMenu");
const playerInfo = document.getElementById("playerInfo");
playerInfo.style.display = 'none';

function Hero(name="player"){
    this.name = name;
    this.lvl = 1;
    this.max_health = 3;
    this.health = 3;
    this.strenght = 1;
    this.statistic = {
        win: 0,
        lose: 0,
        draw: 0,
        items_got: 0
    };
    this.abil = {
        damage: 0,
        max_hp: 0,
        luck: 0
    };
    this.inv = []

    this.addAbil = async function(i) {
        return new Promise(resolve => {
            if (i){
                mainMenu.innerHTML = `<h2>⭐ Повышение уровня! ⭐</h2>
                <h3>${this.name} поднял уровень до ${this.lvl}</h3>
                <h3>Здоровье восстановлено</h3>
                <h3>Выберите бонус:</h3>

                <button class="lvlBtn" data-type="damage" id="upgradeDamage" onmouseover="buttonHover(event, upgradeDamage)" onmouseout="buttonHover(event, upgradeDamage)"><h4>⚔ +1 к урону</h4></button><br><br>
                <button class="lvlBtn" data-type="max_hp" id="upgradeHealth" onmouseover="buttonHover(event, upgradeHealth)" onmouseout="buttonHover(event, upgradeHealth)"><h4>❤️ +1 к максимальному здоровью</h4></button><br><br>
                <button class="lvlBtn" data-type="luck" id="upgradeLuck" onmouseover="buttonHover(event, upgradeLuck)" onmouseout="buttonHover(event, upgradeLuck)"><h4>🍀 +5% к удаче</h4></button>
                <br><br>
                <button onclick="" id="nextMove" onmouseover="buttonHover(event, nextMove)" onmouseout="buttonHover(event, nextMove)"><h4>Дальше</h4></button>`;

                nextMove.style.display = 'none';
                const btns = document.querySelectorAll(".lvlBtn");
                for (let i = 0; i < btns.length; i++) {
                    btns[i].onclick = () => {
                        const type = btns[i].dataset.type;

                        if (type == "damage") {
                            this.abil.damage += 1;
                            this.strenght += 1;
                        }
                        else if (type == "max_hp") {
                            this.abil.max_hp += 1;
                            this.max_health += 1;
                            this.health += 1;
                        }
                        else if (type == "luck") {
                            this.abil.luck += 5;
                        }
                        this.showInfo(playerInfo);
                        resolve();

                        for (let i = 0; i <btns.length; i++){
                            btns[i].style.display = 'none';
                        }

                        nextMove.style.display = '';
                    };
                }
                i -= 1;
            }
        });
    };

    this.showInfo = function(elem=playerInfo) {
            let invList;

        if (this.inv.length > 0) {
            invList = "";

            for (let i = 0; i < this.inv.length; i++) {
                invList += this.inv[i].name;

                if (i < this.inv.length - 1) {
                    invList += ", ";
                }
            }

        }
        
        else {
            invList = "пусто";
        }

        elem.innerHTML = `<h2>Имя: ${this.name}</h2>
        <h4>Уровень: ${this.lvl}</h4>
        <h4>Здоровье: ${this.health} из ${this.max_health}</h4>
        <h4>Способности:</h4>
        <h4>    ⚔ Доп. урон: ${this.abil.damage}</h4>
        <h4>    ❤️ Макс. HP: ${this.abil.max_hp}</h4>
        <h4>    🍀 Удача: ${this.abil.luck}%</h4>
        <h4>Инвентарь: ${invList}</h4>`;

    
        // const InvButton = document.createElement("button");
        // invButton.innerHTML = "<h5>Открыть инвентарь</h5>";
        // invButton.onmouseover = buttonHover("onmouseover", invButton);
        // invButton.onmouseout = buttonHover("onmouseout", invButton);
        let invButton = `<button id="invBtn" onmouseover="buttonHover(event, invBtn)" onmouseout="buttonHover(event, invBtn)"><h5>Открыть инвентарь</h5></button>`;
        elem.innerHTML += invButton;
        

        elem.innerHTML += "<br><br>";

        // const statButton = document.createElement("button");
        // statButton.innerHTML = "<h5>Статисктика</h5>";
        // statButton.onmouseover = buttonHover("onmouseover", statButton);
        // statButton.onmouseout = buttonHover("onmouseout", statButton);
        // statButton.addEventListener("click", () => this.statistics(elem));
        let statButton = `<button id="statBtn" onmouseover="buttonHover(event, statBtn)" onmouseout="buttonHover(event, statBtn)"><h5>Статисктика</h5></button>`;
        elem.innerHTML += statButton;

        document.getElementById("invBtn").onclick = () => {
            this.invenory(elem);
        };
        document.getElementById("statBtn").onclick = () => {
            this.statistics(elem);
        };
    };

    this.statistics = function(elem){
        let text = `<h2>Статистика</h2><br>
        <h4>Победы: ${this.statistic.win}<br>
        Поражения: ${this.statistic.lose}<br>
        Ничьи: ${this.statistic.draw}<br>
        Получено предметов: ${this.statistic.items_got}`;

        elem.innerHTML = text;

        // const backButton = document.createElement("button");
        // backButton.innerHTML = "<h4>Назад</h4>";
        // backButton.onmouseover = buttonHover("mouseover", backButton);
        // backButton.onmouseout = buttonHover("mouseout", backButton);
        // backButton.addEventListener("click", () => this.showInfo(elem));
        let backButton = `<button id="backBtn" onmouseover="buttonHover(event, backBtn)" onmouseout="buttonHover(event, backBtn)"><h4>Назад</h4></button>`;
        elem.innerHTML += backButton;
        
        elem.innerHTML += `<br><br>`;
        
        let resetButton = `<button id="resetStatBtn" onmouseover="buttonHover(event, resetStatBtn)" onmouseout="buttonHover(event, resetStatBtn)"><h4>Сбросить статистику</h4></button>`;
        elem.innerHTML += resetButton;

        document.getElementById("backBtn").onclick = () => {
            this.showInfo(elem);
        };
        document.getElementById("resetStatBtn").onclick = () => {
            this.reset_stat(elem);
        };
    };

    this.reset_stat = function(elem){
        if (confirm('Вы уверены, что хотите сбросить статистику?')){
            this.statistic.draw = 0;
            this.statistic.win = 0;
            this.statistic.lose = 0;
            this.statistic.items_got = 0;

            this.statistics(elem);
        }
        
        else{
            return
        }
    };


    this.invenory = function(elem) {
        let backButton = `<button id="backBtn" onmouseover="buttonHover(event, backBtn)" onmouseout="buttonHover(event, backBtn)"><h4>Назад</h4></button>`;

        if (this.inv.length == 0) {
            elem.innerHTML = `<h2>Ваш инвентарь пуст</h2>`;
            elem.innerHTML += backButton;
            document.getElementById("backBtn").onclick = () => {
                this.showInfo(elem);
            };
            return;
        }

        let list = "<h2>Ваши предметы:</h2><br>";

        for (let i = 0; i < this.inv.length; i++) {
            const item = this.inv[i];
            list += `<div class="item">
                    <h4>${i + 1}. ${item.name}</h4>
                    <button class="infoBtn" data-id="${i}" id="infoBtnInv" onmouseover="buttonHover(event, infoBtnInv)" onmouseout="buttonHover(event, infoBtnInv)"><h4>Информация</h4></button>
                    <button class="useBtn" data-id="${i}" id="useBtnInv" onmouseover="buttonHover(event, useBtnInv)" onmouseout="buttonHover(event, useBtnInv)"><h4>Использовать</h4></button>
                </div>`;
        }

        elem.innerHTML = list;
        elem.innerHTML += "<br>";
        elem.innerHTML += backButton;

        let infoButtons = elem.querySelectorAll(".infoBtn");
        let useButtons = elem.querySelectorAll(".useBtn");

        document.getElementById("backBtn").onclick = () => {
            this.showInfo(elem);
        };

        for (let i = 0; i < infoButtons.length; i++) {
            let btn = infoButtons[i];
            btn.onclick = () => {
                let index = Number(btn.dataset.id);
                this.showItemInfo(index, elem);
            };
        }

        for (let i = 0; i < useButtons.length; i++) {
            let btn = useButtons[i];
            btn.onclick = () => {
                let index = Number(btn.dataset.id);
                this.useItem(this.inv[index], elem);
            };
        }
    };

    this.showItemInfo = function(index, elem) {
        let item = this.inv[index];

        let info = `<h2>${item.name}</h2>
            <h3>${item.description}</h3><br>`;

        if (item.damage){
            info += `<h4>⚔ Урон: ${item.damage}</h4>`;
        }
        if (item.max_hp){
           info += `<h4>❤️ Макс. HP: +${item.max_hp}</h4>`; 
        }
        if (item.heal){
            info += `<h4>💊 Лечение: +${item.heal}</h4>`;
        }
        if (item.break_chance){
            info += `<h4>💥 Шанс поломки: ${item.break_chance}%</h4>`;
        }

        info += `<br><button id="backToInv" onmouseover="buttonHover(event, backToInv)" onmouseout="buttonHover(event, backToInv)"><h4>Назад</h4></button>`;
        elem.innerHTML = info;
        document.getElementById("backToInv").onclick = () => {
            this.invenory(elem);
        };
    };

    this.useItem = function(item){
        if (item == undefined){
            alert("Вы ввели неверное значение (ErrCode: 1400)");
        }
        if (!item.equipped){
            let message = `Вы используете предмет: ${item.name} (`
            if(item.damage){
                message += `Урон: ${item.damage} `;
            }

            if(item.max_hp){
                message += `Макс. здоровье: +${item.max_hp} `;
            }
            if(item.heal){
                message += `Лечит: ${item.heal} здоровья`;
            }
            message += `)`;
            let msg_conf = confirm(message);
            if(msg_conf){
                item.equipped = true;
                if(item.damage){
                    this.abil.damage += item.damage;
                }

                if(item.max_hp){
                    this.abil.max_hp += item.max_hp;
                    this.max_health += item.max_hp;
                    this.health += item.max_hp;
                }
                if(item.heal){
                    this.health += item.heal;
                }
                alert("Характеристики обновлены!");
                this.invenory();
            }
            else{
                this.invenory();
            }
        }
        else{
            alert("Этот предмет уже используется!");
        }
        

    };

    this.addItem = function(item_name) {   
        if (item_name in all_items) {
            this.inv.push(cloner(all_items[item_name]));
            mainMenu.innerHTML += `<br><br><h4>Вы получили предмет: ${all_items[item_name].name}</h4>`;
            this.statistic.items_got += 1;
        }
        else if (item_name == undefined){
            alert("Вы отменили ввод (ErrCode: 201)")
        }
        else {
            alert("Вы ввели неверное значение (ErrCode: 200)");
            this.addItem(prompt("Введите название предмета еще раз"));
        }

        this.showInfo(playerInfo);
    };

    this.checkItemsStrenght = function() {
    if (this.inv.length === 0){
        return
    }

    for (let i = this.inv.length - 1; i >= 0; i--) {
        let item = this.inv[i];
        if (item.equipped){
            item.strenght = Math.max(0, item.strenght - 1);

            let breakChance = randomNum(1, 100);
            if (breakChance <= Math.min(item.break_chance - this.abil.luck, 5) || item.strenght <= 0) {
                mainMenu.innerHTML += `<br><br><h4>Ваш предмет "${item.name}" сломался!</h4>`;

                if (item.damage){
                    this.abil.damage -= item.damage;
                }
                if (item.max_hp) {
                    this.abil.max_hp -= item.max_hp;
                    this.max_health -= item.max_hp;
                    if (this.health > this.max_health){
                        this.health = this.max_health;
                    }
                }
                this.inv.splice(i, 1);
            }
        }
    }
};

    this.removeItem = function(item_name){
        if (item_name == undefined){
            alert("Вы отменили ввод (ErrCode: 301)")
        }

        else {
            let index = this.inv.findIndex(item => item.name === item_name);
            if (index !== -1) {
                alert(`Предмет "${this.inv[index].name}" успешно удален!`);
                this.inv.splice(index, 1);
            }
            else{
                alert("Вы ввели неверное значение (ErrCode: 300)");
                this.removeItem(prompt("Введите название предмета еще раз"));
            }
        }
        this.showInfo(playerInfo)
    };

    this.lvlUp = async function(count=1){
        this.lvl += count;
        this.health = this.max_health;

        for (let i = 0; i < count; i++) {
            await this.addAbil(count);
        }
    };

    this.enemy4player = function(){
        let possibleEnemies = Object.keys(enemies).filter(k => {
            let enem = enemies[k];
            return (enem.lvl <= this.lvl)
        })

        let chosenEnemy = possibleEnemies[randomNum(0, possibleEnemies.length - 1)];
        return cloner(enemies[chosenEnemy])
    };

    this.makeMove = async function(move=0){
        let answer = new Promise(resolve => {

            function finish(move) {
                document.removeEventListener("keydown", keyHandler);
                var buttons = document.querySelectorAll(".moveBtn");
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].onclick = null;
                }
                resolve(move);
            }

            mainMenu.innerHTML = `
            <h2>Ход ${this.name}!</h2>
            <br>
            <button class="moveBtn" data-move="1" id="stone" onmouseover="buttonHover(event, stone)" onmouseout="buttonHover(event, stone)"><h4>${rps[1]} Камень</h4></button>
            <button class="moveBtn" data-move="2" id="scissors" onmouseover="buttonHover(event, scissors)" onmouseout="buttonHover(event, scissors)"><h4>${rps[2]} Ножницы</h4></button>
            <button class="moveBtn" data-move="3" id="paper" onmouseover="buttonHover(event, paper)" onmouseout="buttonHover(event, paper)"><h4>${rps[3]} Бумага</h4></button>`;

            let buttons = document.querySelectorAll(".moveBtn");
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function() {
                    finish(Number(this.dataset.move));
                };
            }

            function keyHandler(event) {
                if (event.key == "1") {
                    finish(1);
                }
                if (event.key == "2") {
                    finish(2);
                }
                if (event.key == "3") {
                    finish(3);
                }
            }

            document.addEventListener("keydown", keyHandler);
        });
        return answer
    }
};

function buttonHover(event, elem){
    if (event.type == 'mouseover' || event == "mouseover"){
        elem.style.backgroundColor = '#e2ff7aff'
    }
    else if (event.type == 'mouseout' || event == "mouseout"){
        elem.style.backgroundColor = '#7aff93'
    }
};

function playerMove (move=0){
        if (move == 'rock'){
            return 1
        }
        else if (move == "scis"){
            return 2
        }
        else if (move == 'paper'){
            return 3
        }
};

function takeDamage(smbdy, amount){
    amount = Number(amount);
    if (isNaN(amount) || amount <= 0){
        alert("Вы ввели неверное значение (ErrCode: 700)");
        takeDamage(prompt("Введите значение еще раз"));
    }
    else{
        smbdy.health -= amount;
        if (smbdy.health <= 0){
            return 'dead'
        }
        else if (smbdy.health >= 1){
            return 'alive'
        }
        else {
            alert("Вы ввели неверное значение (ErrCode: 701)");
            takeDamage(prompt("Введите значение еще раз"));
        }
    }
};

function enemyMove(player_choise, player_luck, enemy){
    let percent = randomNum(0, 100);
    if (percent <= Math.min(enemy.win_percent + player_luck, 95)){
        return moveToLose(player_choise)
    }
    else{
        let drawOrWin = randomNum(1, 5);
        if (drawOrWin == 1){
            return player_choise
        }
        else if (drawOrWin > 1){
            return moveToWin(player_choise)
        }
        else{
            alert("ВыВвели неверное значение (ErrCode: 900)");
        }
    }

};

function moveToWin(move) {
    if (move == 1){
        return 3 //если камень, то бумага
    }
    else if (move == 3){
        return 2 //если бумага, то ножницы
    }
    else if (move == 2){
        return 1 //если ножницы, то бумага
    };
};

function moveToLose(move) {
    if (move == 1){
        return 2 //если камень, то ножницы
    }
    else if (move == 3){
        return 1 //если бумага, то камень
    }
    else if (move == 2){
        return 3 //если ножницы, то бумага
    };
};

function roundResult(moveA, moveB) {
    let sub = moveA - moveB;

    if (sub == 0){
        return 0 //ничья
    }
    else if (sub == -1 || sub == 2){
        return 1 //победа А
    }
    else if (sub == 1 || sub == -2){
        return 2 //победа Б
    };
};

function cloner(object){
    let clone = {};

    if (typeof(object) == "object"){
        for (let key in object){
            clone[key] = object[key];
        }
        return clone
    }

    else{
        alert("Вы ввели неверное значение (ErrCode: 800)");
    }
};

function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomKey(obj){
    const keys = Object.keys(obj);
    return keys[randomNum(0, keys.length - 1)];
};

function chanceDropItem(player, enemy){
    let chance = (60 + player.abil.luck + (enemy.lvl * 2)) / 2;
    if (randomNum(0, 100) <= chance){
        return true
    }
    else{
        return false
    }
};

function randomItem(){
    let items = Object.keys(all_items);
    let item = items[randomNum(0, items.length - 1)];
    return item
};

function itemToPlayer(player, enemy){
    if (chanceDropItem(player, enemy)){
        player.addItem(randomItem());
    }
};

async function waitNextMove(i, player, enemy) {
    return new Promise(resolve => {
        if (i === 0) {
            player.makeMove().then(choice => resolve(choice));
            return;
        }

        const btn = document.getElementById("nextMove");
        btn.onclick = () => {
            player.showInfo(playerInfo);
            enemyInfo.innerHTML = `<h2>Ваш враг: ${enemy.name}</h2>
                <h4>${enemy.description}<br>
                <br>
                💡Уровень: ${enemy.lvl}<br>
                ❤️Здоровье: ${enemy.health}<br>
                ⚔Урон: ${enemy.damage}</h4>`;
            let choice = player.makeMove();  // .then(choice => resolve(choice));
            resolve(choice);
        };  
    });
};

async function battleSolo(player){
    let i = 0;
    while(72){
        if (player.health > 0){
            var enemy = player.enemy4player();
            enemyInfo.innerHTML = `<h2>Ваш враг: ${enemy.name}</h2>
                <h4>${enemy.description}<br>
                <br>
                💡Уровень: ${enemy.lvl}<br><br>
                ❤️Здоровье: ${enemy.health}<br><br>
                ⚔Урон: ${enemy.damage}</h4>`;
        }

        while(player.health > 0 && enemy.health > 0){
            let player_choise = await waitNextMove(i, player, enemy);
            let enemy_choise = enemyMove(player_choise, player.abil.luck, enemy);
            let result = roundResult(player_choise, enemy_choise);
            if (result == 0){
                mainMenu.innerHTML = `<h2>Ничья!</h2>
                <h4>${player.name} - ${rps[player_choise]}:${rps[enemy_choise]} - ${enemy.name}</h4>
                <br>
                <button onclick="" id="nextMove" onmouseover="buttonHover(event, nextMove)" onmouseout="buttonHover(event, nextMove)"><h4>Дальше</h4></button>`;
                player.statistic.draw += 1;
                player.checkItemsStrenght();
                i++;
            }
            else if (result == 1){
                mainMenu.innerHTML = `<h2>Вы выйграли!</h2>
                <h4>${player.name} - ${rps[player_choise]}:${rps[enemy_choise]} - ${enemy.name}</h4>
                <br>
                <button onclick="" id="nextMove" onmouseover="buttonHover(event, nextMove)" onmouseout="buttonHover(event, nextMove)"><h4>Дальше</h4></button>`;
                player.statistic.win += 1;
                let enemy_state = takeDamage(enemy, player.strenght + player.abil.damage);
                player.checkItemsStrenght();
                i++;
                if (enemy_state == 'dead'){
                    mainMenu.innerHTML += `<br><h4>Вы победили ${enemy.name}!</h4>`;
                    itemToPlayer(player, enemy);
                    player.showInfo(playerInfo);
                }
                else if (enemy_state == 'alive'){
                    mainMenu.innerHTML += `<br><h4>У врага осталось ${enemy.health} здоровья!<h4>`;
                }
                else{
                    alert("Вы ввели неверное значение (ErrCode: 1000)");
                }
                if ((player.statistic.win % 5) == 0){
                    await player.lvlUp(1);
                }
            }
            else if (result == 2){
                mainMenu.innerHTML = `<h2>Вы проиграли!</h2>
                <h4>${player.name} - ${rps[player_choise]}:${rps[enemy_choise]} - ${enemy.name}</h4>
                <br>
                <button onclick="" id="nextMove" onmouseover="buttonHover(event, nextMove)" onmouseout="buttonHover(event, nextMove)"><h4>Дальше</h4></button>`;
                player.statistic.lose += 1;
                let player_state = takeDamage(player, enemy.damage);
                player.checkItemsStrenght();
                i++;
                if (player_state == 'dead'){
                    mainMenu.innerHTML = `<br><h3>Вы умерли💀<br>Перезагрузите страницу, чтобы начать сначала</h3>`
                    return
                }
                else if(player_state == 'alive'){
                    mainMenu.innerHTML += `<br><h4>Враг ударил вас на ${enemy.damage}, теперь у вас здоровье ${player.health} из ${player.max_health}!</h4>`;
                }
            }
            else{
                alert("Вы ввели неверное значение (ErrCode: 1001)");
            }
        }
    }   
};

function battleDuo(player1, player2){
    while(player1.health > 0 & player2.health > 0){
        let player1_choise = player1.makeMove();
        let player2_choise = player2.makeMove();
        let result = roundResult(player1_choise, player2_choise);
        if (result == 0){
            alert(`Ничья!\n${player1.name} - ${rps[player1_choise]}:${rps[player2_choise]} - ${player2.name}`);
            player1.statistic.draw += 1;
            player2.statistic.draw += 1;
        }
        else if(result == 1) {
            alert(`Игрок ${player1.name} выйграл!\n${player1.name} - ${rps[player1_choise]}:${rps[player2_choise]} - ${player2.name}`);
            player1.statistic.win += 1;
            player2.statistic.lose += 1;
            let player2_state = takeDamage(player2, player1.strenght + player1.abil.damage);
            if (player2_state == 'alive'){
                alert(`Игрок ${player1.name} ударил вас на ${player1.strenght + player1.abil.damage}! Теперь у вас здоровье ${player2.health} из ${player2.max_health}`);
            }
            else if (player2_state == 'dead'){
                alert(`Вы пали от руки ${player1.name}!`);
            }
            else{
                alert("Вы ввели неверное значение (ErrCpde: 1101)");
            }
        }
        else if(result == 2) {
            alert(`Игрок ${player2.name} выйграл!\n${player1.name} - ${rps[player1_choise]}:${rps[player2_choise]} - ${player2.name}`);
            player2.statistic.win += 1;
            player1.statistic.lose += 1;
            let player1_state = takeDamage(player1, player2.strenght + player2.abil.damage);
            if (player1_state == 'alive'){
                alert(`Игрок ${player2.name} ударил вас на ${player2.strenght + player2.abil.damage}! Теперь у вас здоровье ${player1.health} из ${player1.max_health}`);
            }
            else if (player1_state == 'dead'){
                alert(`Вы пали от руки ${player2.name}!`);
            }
            else{
                alert("Вы ввели неверное значение (ErrCode: 1102)");
            }
        }
        else{
            alert("Вы ввели неверное значение (ErrCode: 1100)");
        }
    }
}

async function game(){
    gamemode = prompt(`Выберите режим игры:\n"1" - одиночный   "2" - с другим человеком (W.I.P.)`);
    if (gamemode == '1'){
        let player = new Hero(prompt("Введите имя игрока"));
        playerInfo.style.display = "";
        player.showInfo(playerInfo);
        await battleSolo(player);
    }
    else if (gamemode == '2'){
        let player1 = new Hero(prompt("Введите имя первого игрока"));
        let player2 = new Hero(prompt("Введите имя второго игрока"));
        player1.showInfo(enemyInfo);
        player2.showInfo(playerInfo);
        battleDuo(player1, player2);
    }
    else if(gamemode == undefined){
        alert('Вы отменили ввод (ErrCode: 601)');
    }
    else{
        alert("Вы ввели неверное значение (ErrCode: 600)");
    }
};

game()