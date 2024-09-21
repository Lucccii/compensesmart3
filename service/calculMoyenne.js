export function calculMoyenne(grpFondTab, grpCompTab, grpAutreTab) {

    const tabMoy = [calculMoyenneParGrp(grpFondTab), calculMoyenneParGrp(grpCompTab), calculMoyenneParGrp(grpAutreTab)]
    console.log("tabMoy = ", tabMoy)
    console.log("JUST RIGHT THEREEEEEEEE", isValidSemesterAndGlobalMoy(tabMoy))
    return [...tabMoy, ...isValidSemesterAndGlobalMoy(tabMoy)]
}

function calculMoyenneParGrp (grp) {
    let isOkayForNotePlanche = true;
    const noteWithECTsCoef = grp.filter(item => !(isNaN(item.Note) || isNaN(item.ECTs) || item.ECTs === "" ))
    if (noteWithECTsCoef.length === 0){
        return [0, 0, isOkayForNotePlanche]
    }
    let sumNote = 0;
    for (const item of noteWithECTsCoef) {
        //console.log("In const item of .... executed with note nd ECTs like = ", item.Note, item.ECTs)
        if (item.NPlanche > item.Note){
            isOkayForNotePlanche = false
        }
        sumNote += parseFloat(item.Note) * parseFloat(item.ECTs)
    }
    //console.log("SumNote = ", sumNote)

    const sumECTsCoeff = (grp.map(line => (line.ECTs !== undefined && line.ECTs !== "") ? parseFloat(line.ECTs): 0)).reduce((acc, item) => acc +item)
    return [sumNote / sumECTsCoeff, sumECTsCoeff, isOkayForNotePlanche]
}

function isValidSemesterAndGlobalMoy(tabMoy) {
    //tabMoy[0] = moyenne du groupe de fond / tabMoy[1] = moyenne du groupe complémentaire / tabMoy[2] = moyenne groupe autre
    //console.log("DENOMINATEUR GRP 1 + 2 + 3: ", tabMoy[0][0] * tabMoy[0][1] + tabMoy[1][0] * tabMoy[1][1])
    const globalMoy = (tabMoy[0][0] * tabMoy[0][1] + tabMoy[1][0] * tabMoy[1][1] + tabMoy[2][0] * tabMoy[2][1]) / (tabMoy[0][1] + tabMoy[1][1] + tabMoy[2][1]);
    //console.log("MEGA DENOM ===", tabMoy[0][0] * tabMoy[0][1] + tabMoy[1][0] * tabMoy[1][1] + tabMoy[2][0] * tabMoy[2][1])
    //console.log("MEGA DIV ===", tabMoy[0][1] + tabMoy[1][1] + tabMoy[2][1])
    //console.log("from js, 230 / 21 : ", globalMoy)
    if (tabMoy[0][0] < 10 || tabMoy[2][0] < 10) {
        return [false, globalMoy];
    }
    const denominateurMoyenneSuperGroupe = tabMoy[0][0] * tabMoy[0][1] + tabMoy[1][0] * tabMoy[1][1]
    const diviseurMoyenneSuperGroupe = tabMoy[0][1] + tabMoy[1][1]
    const moyenneSuperGroupe = denominateurMoyenneSuperGroupe / diviseurMoyenneSuperGroupe
    //console.log("moyenneSuperGroupe >= 10 && tabMoy[0][2] && tabMoy[1][2] && tabMoy[2][2]", moyenneSuperGroupe >= 10 && tabMoy[0][2] && tabMoy[1][2] && tabMoy[2][2])
    return [moyenneSuperGroupe >= 10 && tabMoy[0][2] && tabMoy[1][2] && tabMoy[2][2], globalMoy]
}
