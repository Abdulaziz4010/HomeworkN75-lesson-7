// function random(arr, n) {
//     let result = [...arr];
//     let selected = [];

//         for (let i = 0; i < n; i++) {
//         const randomIndex = Math.floor(Math.random() * result.length);
        
//         selected.push(result.splice(randomIndex, 1)[0]);
//     }
    
//     return selected;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const n = 3;
// console.log(random(array, n));


// 

// function words(str) {
//     const words = str.split(" ");
    
//     const uniqueWords = [...new Set(words)];
    
//     return uniqueWords;
// }

// const input = "apple banana apple orange banana";
// console.log(words(input)); 


// 

// function array(arr) {
//     return arr.flat(Infinity); 
// }

// const num = [1, [2, 3], [4, 5, [6]]];
// console.log(array(num));

// 


// function big(matn) {
//     const sozlar = matn.split (" ");
    
//     const natija = sozlar.map(soz => soz.charAt(0).toUpperCase() + soz.slice(1)).join(" ");
    
//     return natija;
// }

// const kirish = "hello world from javascript";
// console.log(big(kirish)); 