
export default function DialogField({
    fieldName,
    field,
    setField,
    type = "text"
}){
    return(
    <div className="mb-4 flex flex-col">
        <label className="block mb-2 mr-2 text-sm font-medium" htmlFor={field}>{fieldName}</label>
        <input
        type={type}
        name={fieldName}
        value={field}
        className="block text-sm leading-5 w-full py-2 px-3 border-2 border-gray-300  
        rounded-lg shadow-sm focus:outline-none  focus:border-green-600 "
        onChange={ e => setField(e.target.value)}

        />
    </div>
    )
}