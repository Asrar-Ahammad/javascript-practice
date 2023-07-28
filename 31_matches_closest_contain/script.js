let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1.matches(".box")) // To chenck the element matches the css selector.

console.log(sp1.closest(".box"))
console.log(sp1.closest("#sp1"))

console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))
