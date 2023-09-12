interface Todo {
    title: string,
    description: string,
    completed: boolean
}

type test = {[key: string]: any}

type MyPick<T extends object, k extends keyof T> = {
    [key in k] : T[key]
}
type TodoPreview = MyPick<Todo, 'completed' | 'title' >

const todo: TodoPreview = {
    title : 'Clean room',
    completed: false
}
