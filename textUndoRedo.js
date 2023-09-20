class TextEditor {
    constructor() {
        this.text = '';
        this.undoStack = [];
        this.redoStack = [];
    }

    setText(text) {
        this.text = text;
    }

    insertText(addedText) {
        this.undoStack.push(this.text);
        this.text += addedText;
        this.redoStack = [];
    }

    deleteText(deletedText) {
        this.undoStack.push(this.text);
        this.text = text.replace(deletedText, '')
        this.redoStack = [];
    }

    undo() {
        if(this.undoStack.length > 0){
            const previousText = this.undoStack.pop();
            this.redoStack.push(this.text);
            this.text = previousText;
        }
    }

    redo() {
        if(this.redoStack.length){
            const nextText = this.redoStack.pop();
            this.undoStack.push(this.text)
            this.text = nextText;
        }
    }
}


const editor = new TextEditor();
editor.setText('hf,tk,pk,ol')
console.log(editor.getText());

editor.insertText('aa')
editor.undo()
editor.redo();
