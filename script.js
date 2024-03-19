const catering1 = (pocetOsob) => {
    const cenaOsoba = 800
    const cenaCelkem = pocetOsob * cenaOsoba
    return `Catering od Just Food pro ${pocetOsob} lidí za ${cenaCelkem} Kč.`
}

const catering2 = (pocetOsob) => {
    const cenaOsoba = 1500
    const cenaCelkem = pocetOsob * cenaOsoba 
    return `Catering od Your Mama pro ${pocetOsob} lidí za ${cenaCelkem} Kč.`
}

const catering3 = (pocetOsob) => {
    const cenaOsoba = 3000
    const cenaCelkem = pocetOsob * cenaOsoba 
    return `Catering od Flavour Haven pro ${pocetOsob} lidí za ${cenaCelkem} Kč.`
}

console.log(catering1(1000))
console.log(catering2(500))
console.log(catering3(100))

const createEvent = (nazev, pocetOsob, fceCatering) => {
    return `Událost ${nazev} s ${fceCatering(pocetOsob)}`
 }

console.log(createEvent("Koncert", 1000, catering1))
console.log(createEvent("Ples", 500, catering2))
console.log(createEvent("Inaugurace prezidenta", 100, catering3))