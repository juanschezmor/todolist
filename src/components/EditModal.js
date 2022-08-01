
import { Form } from "./Form";
export const EditModal = ({
  Estadomodal,
  closeModal,
  editTask,
  nowdate,
  activityid
}) => {
  
  
  return (
    <>
      <div className="bg-gray-600 bg-opacity-60 w-screen h-screen fixed z-40 flex p-8 items-center justify-center">
        <div className="w-3/6 min-h-min bg-white relative border-r-3 shadow-md p-5">
          <div className="flex flex-row justify-between items-center pb-2 mb-2 border-b-teal-400 border">
            <h1>Editar</h1>
            <button
              onClick={closeModal}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Form
            editTask={editTask}
            nowdate={nowdate}
            activityid={activityid}
            boton="Edit"
          />
        </div>
      </div>
    </>
  );
};
