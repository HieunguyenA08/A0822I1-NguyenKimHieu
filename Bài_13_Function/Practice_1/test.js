let Constellation = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let Star = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
let a = 'Lyra'

function Find(Cons, Sta, char) {
    index = 100;
    for (let i = 0; i < Sta.length; i++) {
        if (char === Sta[i]) {
            index = i;
        }
    }
    console.log(Cons[index]);
}
Find(Constellation, Star, a);
