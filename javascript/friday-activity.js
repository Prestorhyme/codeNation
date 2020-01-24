// class Car
// {
//     constructor(regnum)
//     {
//         this._regnum = regnum;
//         this._hours = 0;
//         this._charge = 0.00;
//     }
//     get regnum()
//     {
//         return this._regnum;
//     }
//     get hours()
//     {
//         return this._hours;
//     }
//     get charge()
//     {
//         return this._charge;
//     }
//     increaseHours()
//     {
//         this._hours++;
//         this._charge += 1.50;
//     }
// }
//     const pay = (reg, hr) => 
//     {
//         const car = new Car(reg) ;
//         for (i = 0; i < hr; i++)
//         {
//             car.increaseHours();
//             if (credits <= 0)
            
//             console.log()
//         }
//             console.log(`You need to pay £${car.charge} for ${car.hours} hours.`);
//     }

//     const Staff = (reg, hr, credits) => 
//     {
//         if( staffNumber = 1)
//         {
//         for (i = 0; i < hr; i++)
//         {
//             car.increaseHours();
//             if (credits <= 0)
            
//             console.log()
//         }
//             console.log(`You need to pay £${car.charge} for ${car.hours} hours. You have ${this.credits} left`);
        
//         }
//         else{

//         }
//     }

//     pay("M7 CAR", 5);

//     class Staff extends Car()
//     {
//         constructor(regnum, staffNumber)
//         {
//             super(regnum);
//             this.staffNumber = staffNumber;
//             this.credits = 0;

//         }

//         get credits()
//         {
//             return this._credits;
//         }

//     }  


// class Pet
// {

//     constructor(name, type)
//     {
//         this.petName = name;
//         this.petType = type;
//         this.petHunger = 100;
//         this.petThirst = 100; 
//     }

//     choose()
//     {
//         console.log(`you choose ${this.petName} the ${this.petType} to be your pet!`)
//     }

//     play()
//     {
//         console.log(`you play with ${this.petName} the ${this.petType}`);
//         if (this.petEnergy  >= 0 ) 
//         {
//             this.petEnergy = this.petEnergy - 10;
//             this.play();
//             console.log(this.petEnergy)
//         } else
//         {
//             this.sleep();
//         }
//     }

//     feed()
//     {
//         if (this.petEnergy < 20){
//             this.petEnergy ++;
//             console.log(this.petEnergy)
//         }
//         console.log(`you feed ${this.petName} the ${this.petType}`);
//     }

//     leave()
//     {
//         if (this.petEnergy = this.petEnergy)
//         {
//             this.petEnergy++;
//         }
//         console.log(`${this.petName} is getting bored...${this.petEnergy}`);
//     }

//     sleep()
//     {
        
//             if (this.petEnergy < 10)
//             {
//                 this.petEnergy+=10;
//                 this.sleep();
//                 console.log(this.petEnergy);
//             }
//             else if(this.petEnergy = 10);
//             {
//                 this.feed();
//             }
//             console.log(`${this.petName} is sleeping zzz`)
            
        
        
//     }

//     eat()
//     {
//         this._hunger--;
//     }
//         drink()
//     {
//         this.thirst--;
//     }
// }
        
//         const George = new Pet("George", "Rabbit")
//         const Maddy = new Pet("Maddy", "dog")
//         const Francis = new Pet("Francis", "Cat")

//         Maddy.play();




        


class Animal{
    constructor(name){
    this._name = name;
    this._hunger = 100;
    this._thirst = 100;
    }
    get name(){
    return this._name;
    }
    get hunger(){
    return this._hunger;
    }
    get thirst(){
    return this._thirst;
    }
    eat(){
    this._hunger--;
    }
    drink(){
    this.thirst--;
    }
    }

    class Bunny extends Animal {
        constructor(name, lovesCarrot, favFood){
        super(name);
        this._lovesCarrot = lovesCarrot;
        this._favFood = favFood;
        }
        get lovesCarrots(){
        return this._lovesCarrot;
        }
        get favFood(){
        return this._favFood;
        }
        }
        const rosie = new Bunny(
        "Rosie",
        true,
        ["basil", "rockets", "broccoli"]
        );

      