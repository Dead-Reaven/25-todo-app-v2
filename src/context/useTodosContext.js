import React from 'react'

const useTodosContext = React.createContext({
	todos: [],
	setTodos: () => {},
})

export default useTodosContext
