import React, { useState } from 'react'

const SelectFile = () => {

    const [shpFile, setShpFile] = useState("")

    const handleImageSelectLocal = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                if (e.target?.result) {
                    console.log(e.target.result as string)
                    setShpFile(e.target.result as string);
                }                
            };
            reader.readAsDataURL(e.target?.files[0]);
        }
    };

    return (
        <div>
            <label className=" bg-cyan-600 px-2 py-3 rounded-md text-xs ml-2  text-white cursor-pointer hover:opacity-60" htmlFor="file_input">{shpFile ? "Image Added!" : "Add Image"} </label>
            <input
                onChange={handleImageSelectLocal}
                className="hidden w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
            />
        </div>
    )
}

export default SelectFile