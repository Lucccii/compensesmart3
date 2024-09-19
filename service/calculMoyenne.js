export function calculMoyenne(grpFondTab, grpCompTab, grpAutreTab) {

    const tabMoy = [calculMoyenneParGrp(grpFondTab), calculMoyenneParGrp(grpCompTab), calculMoyenneParGrp(grpAutreTab) ]
    console.log(isValidSemesterAndGlobalMoy(tabMoy))
    return [...tabMoy, ...isValidSemesterAndGlobalMoy(tabMoy)]
}

function calculMoyenneParGrp (grp) {
    console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
    console.log("For grp : ", grp)

    console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
    const noteWithECTsCoef = grp.map(line => ((line.ECTs === undefined || line.ECTs ==="") && (line.Note === undefined || line.Note==="")) ? parseFloat(line.Note) * parseFloat(line.ECTs): 0)
    if (noteWithECTsCoef.every(item => item === 0)) {
        return 0
    }
    const sumNote = noteWithECTsCoef.reduce((acc, item) => {return acc + item})
    console.log("for ", grp, " sumNote = ", sumNote)
    const sumECTsCoeff = (grp.map(line => line.ECTs !== undefined ? parseFloat(line.ECTs): 0)).reduce((acc, item) => acc +item)
    return [sumNote / sumECTsCoeff, sumECTsCoeff]
}

function isValidSemesterAndGlobalMoy(tabMoy) {
    //tabMoy[0] = moyenne du groupe de fond / tabMoy[1] = moyenne du groupe complémentaire / tabMoy[2] = moyenne groupe autre
    console.log("DENOMINATEUR GRP 1 + 2 + 3: ", tabMoy[0][0] * tabMoy[0][1] + tabMoy[1][0] * tabMoy[1][1])
    const globalMoy = (tabMoy[0][0] * tabMoy[0][1] + tabMoy[1][0] * tabMoy[1][1] + tabMoy[2][0] * tabMoy[2][1]) / (tabMoy[0][1] + tabMoy[1][1] + tabMoy[2][1]);
    if (tabMoy[0][0] < 10 || tabMoy[2][0] < 10) {
        return [false, globalMoy];
    }
    const denominateurMoyenneSuperGroupe = tabMoy[0][0] * tabMoy[0][1] + tabMoy[1][0] * tabMoy[1][1]
    const diviseurMoyenneSuperGroupe = tabMoy[0][1] + tabMoy[1][1]
    const moyenneSuperGroupe = (tabMoy[0][0] * tabMoy[0][1]) / (tabMoy[0][1] + tabMoy[1][1])
    return [moyenneSuperGroupe >= 10, globalMoy]
}
