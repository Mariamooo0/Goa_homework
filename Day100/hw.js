// ელემენტების მიღება
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

// ფუნქცია დავალების დამატებისთვის
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); // ვიღებთ ტექსტს და ვაშორებთ ცარიელ სივრცეებს
    if (taskText === '') return; // თუ ველი ცარიელია, არაფერი მოხდეს

    // ახალი დავალების შექმნა
    const li = document.createElement('li');
    li.textContent = taskText;

    // წაშლის ღილაკის დამატება
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove(); // დავალების წაშლა სიიდან
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li); // დავალების დამატება სიაში
    taskInput.value = ''; // ველის გასუფთავება
});

// ყველა დავალების წაშლა
clearAllBtn.addEventListener('click', () => {
    taskList.innerHTML = ''; // სიის გასუფთავება
});