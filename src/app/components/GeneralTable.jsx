export default function GeneralTable({
    header,
    body,
    height = "max-h-110",
    scrollable = true
}){

    return(
        <div className="flex flex-col min-w-full ">
            <div className="">
                <div className="py-2 inline-block w-full sm:px-6 lg:px-8">
                    <div className={`${scrollable ? 'overflow-y-auto block' : ''}  ${height}`}>
                        <table className="w-full table-auto">
                            <thead className="border-b  sticky top-0 bg-gray-300 uppercase">
                                {header}
                            </thead>
                            <tbody className={`${scrollable ? 'overflow-y-auto' : ''}`}>
                             {body}
                             </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}