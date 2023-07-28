let first = document.getElementById("first")

first.className = "red"

first.classList.add("text-black")

first.classList.toggle("text-black") //lagi hai to hata do hati hai to laga do

first.classList.remove("red")

console.log(first.classList.contains("red"))