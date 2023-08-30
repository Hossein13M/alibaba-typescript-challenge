// Implement the built-in Pick<T, K> generic without using it.

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

interface Todo{
    title: string,
    description: string,
    completed: boolean
}

type TodoPreview = MyPick<Todo,'title' | 'completed'>

const todo: TodoPreview = {
    title: 'clean room',
    completed: false
}