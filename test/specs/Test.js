import {expect} from "@wdio/globals"
import notesPage from "../pageobjects/notesPage"

describe ("NotesApp",()=>{

    it("E2E Test",async()=>{
        
        const dummyWords = "Hello,\nMy name is Chukwuka\nI am a QA Engineer"

        await notesPage.openBrowser()

        await notesPage.createNewNote()

        await notesPage.inputData(dummyWords)

        await notesPage.clearData()

        await notesPage.deleteNote()

    })

})   