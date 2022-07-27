const tasks = document.getElementById('tasks');
const taskForm = document.getElementById("comment-form");
const taskValue = document.getElementById ("task-input")
const submit = document.getElementById("submit");



taskForm.addEventListener ('submit', function (event){
    event.preventDefault();

    const newTask= document.createElement("li");
    let taskDetail = document.createTextNode (`${taskValue.value}`)
    newTask.appendChild(taskDetail)
    tasks.appendChild(newTask);
    taskForm.value = "";

})