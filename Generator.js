let result = document.querySelector('.pass');
let generate = document.querySelector('.generate')
let randomOne = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let randomTwo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let randomThree = ['$', '#', '%', '*', '&' ,'@']
let randomSix = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let randomSeven = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let randomEight = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


generate.addEventListener('click', generateHandler)

 function generateHandler(){
     for(let i = 0; i <= 8; i++){
    
        let randomFour = Math.floor(Math.random()* 10)
        let randomFive = Math.floor(Math.random()* 10)
        
        let pickerOne = randomOne[Math.floor(Math.random()*randomOne.length)]
        let pickerTWo = randomTwo[Math.floor(Math.random()*randomTwo.length)]
        let pickerThree = randomThree[Math.floor(Math.random()*randomThree.length)]
        let pickerSix = randomSix[Math.floor(Math.random()*randomSix.length)]
        let pickerSeven = randomSeven[Math.floor(Math.random()*randomSeven.length)]
        let pickerEight = randomEight[Math.floor(Math.random()*randomEight.length)]

        result.textContent = pickerOne.toUpperCase() + pickerTWo + pickerThree + randomFour + randomFive + pickerSix + pickerSeven.toUpperCase() + pickerEight;
        
     }
   
}