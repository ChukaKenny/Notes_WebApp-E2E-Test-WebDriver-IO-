
class notesPage {

get addButton(){
    return $("#add")
}

get createdNote(){
    return $("div.note")
}

get textArea(){
    return $("textarea")
}

get deleteButton(){
    return $(".delete")
}

async openBrowser(){
    await browser.url("https://adrii-x.github.io/50_Projects_in_Javascript/33_Note%20app/dummy.html")
    await browser.maximizeWindow()
}

async createNewNote(){
    await this.addButton.click()
    await browser.pause(1000)
    await expect(await this.createdNote).toBeExisting()
}

async inputData(data){
    await this.textArea.setValue(data)
    await browser.pause(2000)
}

async clearData(){
    await this.textArea.clearValue()
    await browser.pause(2000)
}

async deleteNote(){
    await this.deleteButton.click() 
    await expect(this.createdNote).not.toBeExisting()
}

}

export default new notesPage()