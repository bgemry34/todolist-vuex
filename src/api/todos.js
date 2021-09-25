import axios from 'axios';

export const _fetchTodos = async () => {
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
        const {data} = res;
        return data;
    }catch(error){
        return [];
    }
}

export const _CreateTodo = async (todo) => {
    try{
        const data = await axios.post('https://jsonplaceholder.typicode.com/todos', todo);
        if(data.status == 201){
            data.data.id = Date.now();
        }
        return data;
    }catch(error){
        return [];
    }
}

export const _DeleteTodo = async (id) => {
    try{
        const data = await axios.delete('https://jsonplaceholder.typicode.com/todos/'+id);
        return data;
    }catch(error){
        return [];
    }
}

