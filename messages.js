console.log("Welcome to Mixed Messages!")
const names = ["Anne", "Marcy", "Sasha", "Pearl", "Garnet", "Amethyst", "Steven", "Luz", "Amity", "Eda", "Hooty"]
const places = ["Wartwood", "Toad Tower", "Newtopia", "Boiling Isles", "Bonesborough", "Los Angeles", "Homeworld", "Beach City"]
const things = ["Thai 2 Go", "Grub and Go", "Gertie's Gnatchos", "Night Market", "Bizarre Bazaar", "Fish Stew Pizza", "Beach Citywalk Fries"]
x = Math.floor(Math.random() * 10);
y = Math.floor(Math.random() * 7);
z = Math.floor(Math.random() * 6);
console.log(names[x] + "'s favorite place to portal to is " + places[y] + " but likes to eat at " + things[z])
//console.log(places[y])
//console.log(things[z])