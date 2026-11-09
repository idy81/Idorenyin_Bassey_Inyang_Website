// Digiforte Dynamic Application Scripts

document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            const nameInput = document.getElementById('fullName');
            const emailInput = document.getElementById('emailAddress');
            const phoneInput = document.getElementById('phoneNumber');
            const messageInput = document.getElementById('clientMessage');

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const phoneError = document.getElementById('phoneError');
            const messageError = document.getElementById('messageError');
            const successBanner = document.getElementById('successBanner');

            // Reset errors
            [nameError, emailError, phoneError, messageError].forEach(err => err.style.display = 'none');
            if (successBanner) successBanner.style.display = 'none';

            // Validate Full Name
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Please enter your full name.';
                nameError.style.display = 'block';
                isValid = false;
            }

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                emailError.style.display = 'block';
                isValid = false;
            }

            // Validate Phone Number (Only digits)
            const phoneRegex = /^\d+$/;
            if (!phoneInput.value.trim() || !phoneRegex.test(phoneInput.value.trim())) {
                phoneError.textContent = 'Phone number must contain digits only.';
                phoneError.style.display = 'block';
                isValid = false;
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Please enter your project or consultation message.';
                messageError.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                if (successBanner) {
                    successBanner.textContent = 'Thank you! Your inquiry has been submitted successfully to Digiforte Prime Properties.';
                    successBanner.style.display = 'block';
                }
                contactForm.reset();
            }
        });
    }

    // Interactive Operations & Academic Planner
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    // Initial Data Array
    let tasks = [
        { id: 1, title: "Review Monaco Hills Infrastructure Electrical Layout", category: "Real Estate Operations", priority: "High", completed: false },
        { id: 2, title: "Analyze Smart Building IoT Device Vulnerabilities", category: "Cybersecurity Research", priority: "High", completed: true },
        { id: 3, title: "Audit Digiforte City Estate Phase 1 Title Deeds", category: "Real Estate Operations", priority: "Medium", completed: false }
    ];

    function renderTasks() {
        if (!taskList) return;
        taskList.innerHTML = '';

        if (tasks.length === 0) {
            taskList.innerHTML = '<li class="task-item"><p style="color: var(--text-muted);">No active tasks in system. Add a new operation or study milestone above.</p></li>';
            return;
        }

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <div class="task-info">
                    <h4 class="task-title">${task.title}</h4>
                    <div class="task-meta">
                        <span><strong>Domain:</strong> ${task.category}</span>
                        <span><strong>Priority:</strong> ${task.priority}</span>
                        <span><strong>Status:</strong> ${task.completed ? 'Completed' : 'Pending'}</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button onclick="toggleTask(${task.id})" class="btn-sm btn-complete">
                        ${task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onclick="deleteTask(${task.id})" class="btn-sm btn-delete">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }

    if (taskForm) {
        taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const titleInput = document.getElementById('taskTitle');
            const categoryInput = document.getElementById('taskCategory');
            const priorityInput = document.getElementById('taskPriority');

            if (!titleInput.value.trim()) return;

            const newTask = {
                id: Date.now(),
                title: titleInput.value.trim(),
                category: categoryInput.value,
                priority: priorityInput.value,
                completed: false
            };

            tasks.push(newTask);
            titleInput.value = '';
            renderTasks();
        });
    }

    window.toggleTask = function(id) {
        tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
        renderTasks();
    };

    window.deleteTask = function(id) {
        tasks = tasks.filter(t => t.id !== id);
        renderTasks();
    };

    renderTasks();
});
