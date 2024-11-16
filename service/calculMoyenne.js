export function calculMoyenne(grpFondTab, grpCompTab, grpAutreTab) {
    console.log("Grp Fond Tab Recent = ")
    console.log(grpFondTab)
    console.log("-----------------------------------")
    console.log(calculMoyenneParGrp(grpFondTab))
    console.log("-----------------------------------")
    const tabMoy = [calculMoyenneParGrp(grpFondTab), calculMoyenneParGrp(grpCompTab), calculMoyenneParGrp(grpAutreTab)]
    console.log("ààààààààà000000")
    console.log(...isValidSemesterAndGlobalMoy(tabMoy))
    console.log(isValidSemesterAndGlobalMoy(tabMoy))
    return [...tabMoy, ...isValidSemesterAndGlobalMoy(tabMoy)]
}
function calculMoyenneParGrp (grp) {
    let isOkayForNotePlanche = true;
    const noteWithECTsCoef = grp.filter(item => !(isNaN(item.Note) || isNaN(item.ECTs) || item.ECTs === "" ))
    for (let item in grp) {
        console.log('-------------------')
        console.log(item)
        console.log(isNaN(item.Note))
        console.log(isNaN(item.ECTs))
        console.log(item.ECTs === "")
        console.log("-------------------")
    }
    if (noteWithECTsCoef.length === 0){
        return [-1, 0, isOkayForNotePlanche]
    }
    let sumNote = 0;
    for (const item of noteWithECTsCoef) {
        console.log("For item : ")
        console.log(item)
        if (parseFloat(item.NPlanche) > parseFloat(item.Note)){
            console.log("CONDITION PASSED FOR NPlanché = " + item.NPlanche + " AND ITEM NOTE = " + item.Note);
            console.log(item.NPlanche > item.Note)
            isOkayForNotePlanche = false
        }
        item.Note = item.Note.replace(",", ".")
        sumNote += parseFloat(item.Note) * parseFloat(item.ECTs)
    }
    const sumECTsCoeff = (grp.map(line => (line.ECTs !== undefined && line.ECTs !== "") ? parseFloat(line.ECTs): 0)).reduce((acc, item) => acc + item)
    return [sumNote / sumECTsCoeff, sumECTsCoeff, isOkayForNotePlanche]
}
function isValidSemesterAndGlobalMoy(tabMoy) {
    let codeExplication = -1;
    const globalMoy = (tabMoy[0][0] * tabMoy[0][1] + tabMoy[1][0] * tabMoy[1][1] + tabMoy[2][0] * tabMoy[2][1]) / (tabMoy[0][1] + tabMoy[1][1] + tabMoy[2][1]);
    if (tabMoy[0][0] < 10 || tabMoy[2][0] < 10) {
        if (tabMoy[0][0] < 10) {
            codeExplication = 0
        } else {
            codeExplication = 1
        }
        return [false, globalMoy, codeExplication];
    }
    const denominateurMoyenneSuperGroupe = tabMoy[0][0] * tabMoy[0][1] + tabMoy[1][0] * tabMoy[1][1]
    const diviseurMoyenneSuperGroupe = tabMoy[0][1] + tabMoy[1][1]
    const moyenneSuperGroupe = denominateurMoyenneSuperGroupe / diviseurMoyenneSuperGroupe
    if (moyenneSuperGroupe < 10) {
        codeExplication = 2
    }
    if (tabMoy[0][2] && tabMoy[1][2] && tabMoy[2][2] === false) {
        codeExplication = 3
    }
    return [moyenneSuperGroupe >= 10 && tabMoy[0][2] && tabMoy[1][2] && tabMoy[2][2], globalMoy, codeExplication]  // tabMoy[0/1/2][2] parle de isOkayForNotePlanche pour chaque bloc
}