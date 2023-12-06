import { makeObservable, observable, action } from "mobx";

class TaskStore {
  tasks = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      removeTask: action,
    });
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }
}

const taskStore = new TaskStore();
export default taskStore;
