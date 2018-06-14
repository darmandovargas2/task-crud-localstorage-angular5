export interface Task {
    name: String;
    description: String;
    priority: String;
    dueDate: String;
    hide: boolean;
}

export const priorities = ['Top Priority', 'High', 'Normal', 'Low'];