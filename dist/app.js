"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// * q1
class User {
    Id;
    Name;
    Password;
    Phone;
    Age;
    id;
    name;
    email;
    password;
    phone;
    age;
    constructor(Id, Name, Email, Password, Phone, Age) {
        this.Id = Id;
        this.Name = Name;
        this.Password = Password;
        this.Phone = Phone;
        this.Age = Age;
        this.id = Id;
        this.name = Name;
        this.email = Email;
        this.password = Password;
        this.phone = Phone;
        if (Age < 18)
            throw new Error('user must be 18');
        this.age = Age;
    }
    displayInfo() {
        return `${this.id}, ${this.name}, ${this.email}, ${this.password}, ${this.phone}, ${this.age}`;
    }
    get userId() {
        return this.id;
    }
    set userId(value) {
        if (value == 0)
            throw new Error('invalid id');
        this.id = value;
    }
}
const newUser = new User(1, 'a', 'ex@gmail.com', '1234', '1234', 18);
console.log(newUser);
// * q2
class AdminUser extends User {
    note;
    constructor(Id, Name, Email, Password, Phone, Age, note) {
        super(Id, Name, Email, Password, Phone, Age);
        this.note = note;
    }
    addNote(note) {
        this.note.push(...note);
    }
    removeNote(index) {
        if (index == 0 || index >= this.note.length)
            throw new Error('invalid index');
        this.note.splice(index, 1);
    }
}
// * q3
class Note {
    Id;
    Title;
    Content;
    id;
    title;
    content;
    user;
    constructor(Id, Title, Content, user) {
        this.Id = Id;
        this.Title = Title;
        this.Content = Content;
        this.id = Id;
        this.title = this.Title;
        this.content = this.Content;
        this.user = user;
    }
    displayNote() {
        return `${this.id}, ${this.title}, ${this.content}, ${this.user.userId}`;
    }
}
// * q4
class Notes {
    id;
    content;
    constructor(id, content) {
        this.id = id;
        this.content = content;
    }
    get noteId() {
        return this.id;
    }
}
class NoteBook {
    noteBook = [];
    addNote(id, content) {
        const note = new Notes(id, content);
        this.noteBook.push(note);
    }
    removeNote(id) {
        const index = this.noteBook.findIndex((note) => {
            return note.noteId === id;
        });
        if (index === -1) {
            throw new Error("Note not found");
        }
        this.noteBook.splice(index, 1);
    }
}
const notebook = new NoteBook();
notebook.addNote(1, "Learn TypeScript");
notebook.addNote(2, "Practice OOP");
// * q5
class user {
    notebooks = [];
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
}
const notebook1 = new NoteBook();
const notebook2 = new NoteBook();
const users = new user();
users.addNotebook(notebook1);
users.addNotebook(notebook2);
// * q6
class notes {
    id;
    content;
    author;
    constructor(id, content, author) {
        this.id = id;
        this.content = content;
        this.author = author;
    }
    get noteId() {
        return this.id;
    }
    get noteAuthor() {
        return this.author;
    }
}
//# sourceMappingURL=app.js.map