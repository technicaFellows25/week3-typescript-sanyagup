// Create your interfaces and enum below:
interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
}

enum Priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high'
}

interface TaskWithPriority extends Task {
    priority: Priority;
}

// Create your task below:
const task: TaskWithPriority = {
    id: 1,
    title: 'Complete TypeScript Exercise',
    description: 'Implement interfaces and enums in TypeScript.',
    dueDate: new Date('2025-7-6'),
    priority: Priority.HIGH
};

// ONCE DONE, UNCOMMENT THE LINE BELOW AND RUN THE FILE
console.log(task);