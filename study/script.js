let lpierwsze = []
let tablica = []



function znajdzLiczbyPierwsze() {
    console.time('sprawdzanie liczb pierwszych')
    for (i = 10000; i <= 99999; i++) {
      let jestPierwsza = true
      for ( j = 2; j * j <= i; j++) {
        if (i % j === 0) {
          jestPierwsza = false
          break
        
        }
      }
      if (jestPierwsza) {
        lpierwsze.push(i);
      }
    }
    console.timeEnd('sprawdzanie liczb pierwszych')
    return lpierwsze;
  }
  znajdzLiczbyPierwsze()
  console.log(lpierwsze)




  const mnozenieLiczb = (tab) => {
    const newTab = []
    const length = tab.length

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            const liczba = tab[i] * tab[j]
            if (czyPalindrom(liczba)) {
                newTab.push(liczba)
            }
        }
    }

    return newTab;
}
const czyPalindrom = (liczba) => {
    const liczbaString = liczba.toString()
    const halfLength = Math.floor(liczbaString.length / 2)

    return liczbaString === liczbaString.split('').reverse().join('');
}

tablica = mnozenieLiczb(lpierwsze)
//let tabliczka = [1111,2222,3333,4444,5555,6666,78987]
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
let maxpalindrom =najwiekszyPalindrom(tablica)

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
    
    
    
    console.log(tablica2)
    
    
}
sprawdzanie(maxpalindrom)

