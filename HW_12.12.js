// Home Work 11.12.23

// String Task
// task1
let name='Жайдар'
let favoriteColor='Розовый'
let favoriteSong='Stay'
let favoriteMovie='Приключения Паддингтона'
let favoriteAnimal='Мысық'
console.log(`Менің атым ${name} .Менің жақсы көретін түсім ${favoriteColor}. Мен ${favoriteSong}деген музыканы жақсы көремін. Маған көптеген филмдар ұнайды соның ішінде ${favoriteMovie}
conso жақсы көремін. Сонымен қатар маған жануарлардан  ${favoriteAnimal} ұнайды. `)

let hasCoffee = true
if (hasCoffee) {
    console.log("I have coffee.");
} else {
    console.log("No, I dont have a coffe today ");
}

// Task2
let isWeekend = false
if (isWeekend) {
  console.log("Бүгін демалыс!");
} else {
  console.log("Бүгін демалыс емес!");
}



// Float Tasks:
let gravity = 9.8
let weight = 60


let forceOfGravity = weight * gravity

console.log(`Сила тяжести, действующая на человека массой ${weight} кг, равна ${forceOfGravity} N.`)

let temperatureInCelsius = 25.5; 

// formula: (Celsius * 9/5) + 32
let temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32;

console.log(`The temperature in Celsius is ${temperatureInCelsius}°C.`);
console.log(`Converted to Fahrenheit, it is ${temperatureInFahrenheit}°F.`);