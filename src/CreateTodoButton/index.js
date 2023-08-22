import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal, openModal }) {
   return (
        <button 
        className='mi-boton'
        onClick={(event) => {
            openModal ? 
            setOpenModal(false) :
            setOpenModal(true) 

        }}>
            +
        </button>
    );
}

export { CreateTodoButton };
