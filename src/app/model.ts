export class Model {
    user;
    items;

    constructor() {
        this.user = "Your ToDo List";
        this.items = [
            new ToDoItem("Kahvaltı", false),
            new ToDoItem("Sinema", false),
            new ToDoItem("Spor", false),
            new ToDoItem("Fatura", false)
        ];
    }
}

export class ToDoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}