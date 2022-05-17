const tamogotchi = {
    name: 'мага',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus () {
        if (this.meal === 0 || this.energy === 0 || this.mood === 0) {
            return `${this.name} умер : \n Домой`
        }
        
        const meal11 =this.meal < 3 ? "Я голоден" : "Я не голоден"
        const energy11 =this.energy < 3 ? "Я хочу спать" : "Я не хочу спать"
        const mood11 =this.mood < 3 ? "Мне скучно" : "Мне весело"
        return `Имя: ${this.name}, Еда: ${meal11} (${this.meal}), Энергия: ${energy11} (${this.energy}), Настроение: ${mood11} (${this.mood}).`
    },
    setName(names) {
        this.name = names
    },
    mealName () {
        if (this.meal < 5){
            this.meal++
            this.mood--
        } else if ( this.meal === 5 && this.mood !== 0) {
        }
        
    },
    sleep () {
        if (this.energy < 5){
            this.energy++
            this.meal--
        } else if (this.energy === 5 && this.meal !== 0) {

        }
    },
    playing () {
        if (this.mood < 5){
            this.mood++
            this.energy--
        } else If (this.mood === 5 && this.energy !== 0) 
    }
  }
  tamogotchi.playing()
  console.log(tamogotchi.getStatus());

