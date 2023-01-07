export default function DeleteDialog({
    icon,
    title,
    text,
    confirmText,
    handleAction,
    handleShow,
    error,
    item
}){

    return(
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-600 sm:mx-0 sm:h-10 sm:w-10">
                                        {icon}
                                    </div>

                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                                            {title}
                                        </h3>

                                        {error &&
                                        <div className="mt-4 text-red-600 flex">
                                            <h3 className="mr-2 font-medium">ERROR: </h3>
                                            <p>{error}</p>
                                        </div>
                                        }

                                        <div className="mt-4">
                                         {text} <p className="font-black">{item}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button onClick={handleAction} className="inline-flex w-full justify-center rounded-md border border-transparent btn-delete  sm:ml-3 sm:w-auto sm:text-sm">
                                    {confirmText}
                                </button>
                                <button onClick={handleShow} className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    CANCEL
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
