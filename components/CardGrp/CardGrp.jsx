import {useEffect, useState} from "react";
import {TextInput, View} from "react-native";
import {useContext} from "react"
import uuid from 'react-native-uuid';

import {s} from './CardGrp.style'
import {TabLine} from '../TabLine/TabLine'
import {Parameters} from '../Parameters/Parameters'
import {AddButton} from "../AddButton/AddButton";
import {BookContext} from "../../contexts/isIsCleanTabLineRender";

export function CardGrp({Tab}){
    const {isCleanTabLineRender, setIsCleanTabLineRender} = useContext(BookContext)
    const [currentTab, setCurrentTab] = Tab;

    function updateLine (ue, newText, modifType) {
        let lineUpdated = {}
        switch (modifType) {
            case 'ECTs' :
                if (newText !== "" && (ue.Note === undefined || ue.Note === "")){
                    lineUpdated = {
                        ...ue,
                        ECTs : newText,
                        Note : "10"
                    }
                } else {
                    lineUpdated = {
                        ...ue,
                        ECTs : newText,
                    }
                }
                break;
            case 'Note' :
                if (newText !== "" && (ue.ECTs === undefined || ue.ECTs === "")){
                    lineUpdated = {
                        ...ue,
                        Nçte : newText,
                        ECTs : "1"
                    }
                } else {
                    lineUpdated = {
                        ...ue,
                        Note : newText,
                    }
                }
                break;
            case 'Name' :
                lineUpdated = {
                    ...ue,
                    Name : newText,
                }
                break;
            case 'NPlanche' :
                lineUpdated = {
                    ...ue,
                    NPlanche : newText,
                }
                break;
        }
        const updatedTab = [...currentTab];
        let index = currentTab.findIndex(item => ue.id === item.id)
        updatedTab[index] = lineUpdated;
        setCurrentTab(updatedTab);
    }

    function deleteLine(ue){
        if (currentTab.length > 1) {
            const filterTab = currentTab.filter((item) => { return ue !== item})
            setCurrentTab(filterTab)
        }
    }

    function addLines (){
        let newLine = { id : uuid.v4(), Name: '', ECTs: undefined, Note: undefined, NPlanche : undefined }
        setCurrentTab([...currentTab, newLine])
    }

    function renderTab(){
        return currentTab.map((ueItem) => {
            return <View style={s.lineContainer} key={ueItem.id}>
                <TabLine ue={ueItem} updateLine={updateLine} deleteLine={deleteLine}/>
            </View>
        });
    }

    return <>
        <View style={s.tabContainer}>
            <Parameters />
            {renderTab()}
        </View>
        <AddButton addLine={addLines}/>
    </>
}