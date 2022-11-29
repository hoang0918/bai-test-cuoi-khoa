const x = Math.floor(Math.random() * 10);
console.log(x);
let count = 0;
function resetCount() {
    window.location.reload()
}
function guessFunction(){
    let y = document.getElementById("input").value
    console.log(typeof(y))
    console.log(typeof(x))
    if (parseInt(y) != x) {
        console.log("Wrong!");
        count += 1;
        console.log("Count: " + count)
        let node = document.createElement("li")
            let text = document.createTextNode("Wrong guess! Try again!")
            node.appendChild(text)
            document.getElementById("list").appendChild(node)
        if (count == 3) {
            console.log("You've run out of guesses! Try again!")
            let node = document.createElement("li")
            let text = document.createTextNode("You've run out of guesses! Try again!")
            node.appendChild(text)
            document.getElementById("list").appendChild(node)
            setTimeout(resetCount(), 5000);
        }
    } else if (parseInt(y) == x) {
        console.log("Right!")
        let node = document.createElement("li")
            let text = document.createTextNode("You're truly lucky today!")
            node.appendChild(text)
            document.getElementById("list").appendChild(node)
        setTimeout(resetCount(), 5000);
    }
    console.log(x)
}