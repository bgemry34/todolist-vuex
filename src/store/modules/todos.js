import {_fetchTodos, _CreateTodo, _DeleteTodo} from './../../api/todos'

const state = {
    todos:[
    ]
};
const getters = {
    allTodos: (state) => state.todos
};
const actions = {
    async fetchTodos({commit}){
        const res = await _fetchTodos();
        commit('setTodos', res);
    },
    async addTodo({commit}, todo){
        const res = await _CreateTodo(todo);
        if(res.status == 201){
            commit('addTodos', res.data)
        }
    },
    async deleteTodo({commit}, id){
        const res = await _DeleteTodo(id);
        if(res.status == 200){
            commit('deleteTodos', id)
        }
    },
    async onComplete({commit}, todo){
        todo.completed = !todo.completed;
        commit('OnComplete', todo)
    }
};
const mutations = {
    setTodos:(state, todos) => (state.todos = todos),
    addTodos:(state, todo) => state.todos.unshift(todo),
    deleteTodos:(state, id) => state.todos = state.todos.filter(todo=>todo.id!=id),
    OnComplete: (state, _todo) => state.todos = state.todos.map(todo=>{
        return todo.id == _todo.id ? _todo : todo
    })

};

export default {
    state,
    getters,
    actions,
    mutations
}