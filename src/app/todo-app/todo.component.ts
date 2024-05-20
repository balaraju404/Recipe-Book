import { Component } from "@angular/core";

@Component({
    selector: "app-todo",
    templateUrl: "./todo.component.html"
})

export class TodoComponent {
    taskList = ["Learn Angular", "Learn Node Js"];
    completedList = [];
    taskData: string = "";
    validateStatus: boolean = false;
    editStatus: boolean = false;
    currentIndex: number = null;

    getTaskData(event: Event) {
        this.taskData = (<HTMLInputElement>event.target).value;
    }

    addTask() {
        if (this.taskData === "") {
            this.validateStatus = true;
        } else {
            this.validateStatus = false;
            this.taskList.push(this.taskData);
            this.taskData = "";
        }
    }

    deleteTask(index: number) {
        this.taskList.splice(index, 1)
    }

    editTask(index: number) {
        this.editStatus = true;
        this.taskData = this.taskList[index]
        this.currentIndex = index;
    }

    updateTask(index: number) {
        this.taskList[this.currentIndex] = this.taskData;
        this.editStatus = false;
        this.taskData = "";
    }

    completeTask(index: number) {
        this.completedList.push(this.taskList[index]);
        this.taskList.splice(index, 1);
    }

    deleteTaskPerminently(index: number) {
        this.completedList.splice(index, 1);
    }

    moveTask(index: number) {
        let currentTask = this.completedList[index]
        this.taskList.push(currentTask);
        this.completedList.splice(index, 1);
    }
}