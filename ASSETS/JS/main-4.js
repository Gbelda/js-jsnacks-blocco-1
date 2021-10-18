//J snack 4 - Creare un array con nomi, chiedere il suo nome e comunicagli se puo partecipare oppure no

const partecipants = [
    `jay gatsby`,
    `nick carraway`,
    `daisy buchanan`,
    `tom buchanan`,
    `myrtle wilson`,
    `jordan baker`,
    `meyer wolfsheim`,
    `george wilson`,
]

const userName = prompt('What is your fullname?');
let access = false;

for (let i = 0; i < partecipants.length; i++) {
    const names = partecipants[i];

    if (userName == names) {
        access = true;

    }
}

if (access) {
    document.getElementById("snack-4").innerHTML = "WELCOME TO THE PARTY"

} else {
    document.getElementById("snack-4").innerHTML = "SORRY YOU ARE NOT INVITED"
}
