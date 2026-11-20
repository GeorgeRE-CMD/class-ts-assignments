// * q1
class User {
    private id: number;
    protected name: string;
    email: string;
    private password: string;
    protected phone: string;
    protected age: number;
    constructor(private Id: number, protected Name: string, Email: string, private Password: string, protected Phone: string, protected Age: number) {
        this.id = Id;
        this.name = Name
        this.email = Email
        this.password = Password
        this.phone = Phone
        if (Age < 18) throw new Error('user must be 18')
        this.age = Age
    }
    displayInfo(): string {
        return `${this.id}, ${this.name}, ${this.email}, ${this.password}, ${this.phone}, ${this.age}`
    }
    get userId(): number {
        return this.id
    }
    set userId(value: number) {
        if (value == 0) throw new Error('invalid id');
        this.id = value
    }
}
const newUser = new User(1, 'a', 'ex@gmail.com', '1234', '1234', 18)
console.log(newUser)



// * q2
class AdminUser extends User {
    note: string[];
    constructor(Id: number, Name: string, Email: string, Password: string, Phone: string, Age: number, note: string[]) {
        super(Id, Name, Email, Password, Phone, Age)
        this.note = note
    }
    addNote(note: string[]) {
        this.note.push(...note)
    }
    removeNote(index: number) {
        if (index == 0 || index >= this.note.length) throw new Error('invalid index');
        this.note.splice(index, 1);
    }
}


// * q3
class Note {
    private id: number;
    protected title: string;
    protected content: string;
    private user: User
    constructor(private Id: number, protected Title: string, protected Content: string, user: User) {
        this.id = Id
        this.title = this.Title
        this.content = this.Content
        this.user = user
    }
    displayNote(): string {
        return `${this.id}, ${this.title}, ${this.content}, ${this.user.userId}`;
    }
}

// * q4
class Notes {
    private id: number;
    protected content: string;
    constructor(id: number, content: string) {
        this.id = id;
        this.content = content
    }
    get noteId(): number {
        return this.id;
    }
}
class NoteBook {
    private noteBook: Notes[] = [];
    addNote(id: number, content: string): void {
        const note = new Notes(id, content);
        this.noteBook.push(note);
    }
    removeNote(id: number): void {
        const index = this.noteBook.findIndex((note) => {
            return note.noteId === id;
        });

        if (index === -1) {
            throw new Error("Note not found");
        }

        this.noteBook.splice(index, 1);
    }
}
const notebook = new NoteBook()
notebook.addNote(1, "Learn TypeScript");
notebook.addNote(2, "Practice OOP");

// * q5
class user {
    private notebooks: NoteBook[] = [];

    addNotebook(notebook: NoteBook): void {
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
    private id: number;
    protected content: string;
    private author: User;

    constructor(id: number, content: string, author: User) {
        this.id = id;
        this.content = content;
        this.author = author;
    }

    get noteId(): number {
        return this.id;
    }

    get noteAuthor(): User {
        return this.author;
    }
}