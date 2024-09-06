let lpierwsze = []
let tablica = []

let dzielnik = 0
let i = 1000;
while(i<10000){
    for(j=1;j<=i;j++){
        if(i%j==0){
            dzielnik++
        }
        
    }
    if(dzielnik == 2&& i>1000){
        lpierwsze.push(i)

    }
i++
dzielnik=0

}



/*const mnozenieLiczb = (tab) => {
    const lengthTab = tab.length
    let newTab = []
    let i = 0
    let liczba
    
    let odwroconaLiczba
    while(i<=lengthTab-1){
        for(j=0;j<=lengthTab-1;j++){
            liczba = tab[i]*tab[j]
            const liczbaStr =liczba.toString()
            
            odwroconaLiczba = liczbaStr.split('').reverse().join('')
            if(liczba === odwroconaLiczba)
                {
                    newTab.push(liczba)
                } 
        }
    }
    return newTab

}*/

//tablica = mnozenieLiczb(lpierwsze)
let tabliczka = [1111,2222,3333,4444,5555,6666,78987]
const najwiekszyPalindrom = (tab) =>{
    const lengthTab = tab.length
    let max = tab[0]
    for (i=1;i<=lengthTab-1;i++){
        if(tab[i]>max){
            max = tab[i]
        }
    }
    
    return max;

}
let maxpalindrom =najwiekszyPalindrom(tabliczka)

console.log(maxpalindrom)

const sprawdzanie = (liczba) =>{
    let tablica = []
    let tablica2 = []
    let liczba2
    while (liczba > 0){
        liczba2= liczba % 10
        tablica.push(liczba2)
        liczba = Math.floor(liczba/10)
    }
    let dzielnik = 0
    for(i=0;i<=tablica.length-1;i++){
        for(j=1;j<tablica[i];j++){
            if(tablica[i]%j==0){
                dzielnik++
            }
        }
        if(dzielnik == 2-1){
            tablica2.push(tablica[i])
        }
        dzielnik = 0
        
    }
    
    
    console.log(tablica)
    console.log(tablica2)
    
    
}
sprawdzanie(maxpalindrom)

