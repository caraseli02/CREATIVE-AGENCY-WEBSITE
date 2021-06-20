export type TodoItem = {
    id: number
    title: string
    description: string
    tag: string
    completed: boolean
  }
  
  export type State = {
    loading: boolean
    items: TodoItem[]
  }
  
  export const state: State = {
    loading: false,
    items: [],
  }