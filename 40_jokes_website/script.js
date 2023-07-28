let jokes = [
        {
           
           "joke": `The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?`,
       },
       {
           
           "joke": "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.",
       },
       {
          
           "joke": `Eight bytes walk into a bar.\nThe bartender asks, \"Can I get you anything?\"\n\"Yeah,\" reply the bytes.\n\"Make us a double.\"`,
       },
       {
           
           "joke": "Debugging: Removing the needles from the haystack.",
       },
       {
          
           "joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
       },
       {
          
           "joke": `Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.`,
       },
       {
          
           "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works.",
       },
       {
           
           "joke": `Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\"`,
       },
       {
           "joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
       }
]

let index = Math.floor(Math.random()*jokes.length-1)
console.log(index)
// console.log(jokes.length)
// console.log(jokes[0])
joke.innerHTML = jokes[index].joke
