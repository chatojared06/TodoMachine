import React from 'react';
import { TodoList } from '../TodoList';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { EmpyTodos } from '../EmpyTodos';
import { TodosError } from '../TodosError';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';

function AppUi() {
const {
  loading,
  error,
  searchedTodos,
  completedTodos, 
  totalTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal,
} = React.useContext(TodoContext);




  return (
    <TodoContext.Consumer>
      {() => {
        const tareasCompletadas = completedTodos === totalTodos;
        const sinTareas = totalTodos === 0;

        return (
          <>
            {sinTareas ? (
              <h1>Agrega una nueva Tarea </h1>
            ) : tareasCompletadas ? (
              <h1>Felicitaciones, completaste todas tus tareas.</h1>
            ) : (
              <TodoCounter />
            )}

            <TodoSearch />

            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmpyTodos />}

            <TodoList>
              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>

            <CreateTodoButton setOpenModal={setOpenModal} />

            {openModal && (
                <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                  <TodoForm/>
                </Modal>
            )}
          </>
        );
      }}
    </TodoContext.Consumer>
  );
}

export { AppUi };