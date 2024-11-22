const Return = () => {
    return (
        <div className=" ml-10 p-5">
            <h1 className="text-3xl font-bold  mb-[10px] text-red-400">
                Return Item(s)
            </h1>
            <p className="text-[16px]  text-[#666] mb-[20px]">
                Let{ "'" }s get this taken care of
            </p>
            <div className="border-2 rounded p-[20px] mb-20px] flex">
                <div className="flex items-start gap-[20px]">
                    <input type="checkbox" />
                    <div className="w-20 h-20 ">
                        <img
                            src="https://yt3.googleusercontent.com/05lhMeAH6tZrPIUsp2yHNz3DwzhKbDUQcxcY0_qeXVyZttR_pktBzw0FcLUSR6D4fVqsEgL3ZO0=s900-c-k-c0x00ffffff-no-rj"
                            alt="product"
                            className="rounded"
                        />
                    </div>
                    <div>
                        <h2 className="text-[18px] font-bold  mb-[5px]">Apple</h2>
                        <p className="font-[6px] mb-[5px]">817032 | 64267101</p>
                        <p className="font-[16px] mb-[5px]">$4.98</p>
                        <p className="font-[13px] text-green-500">Return by Jan 16, 2024</p>
                    </div>
                </div>
                <div className="flex gap-[10px] mt-[15px] items-center justify-center">
                    <input
                        type="number"
                        className="w-[50px] h-[50px] border-2 rounded outline-none p-2"
                    />
                    <select className="border-2 rounded p-[5px]">
                        <option value="">Reason for return</option>
                        <option value="defective">Defective product</option>
                        <option value="wrong-item">Wrong item received</option>
                        <option value="no-longer-needed">No longer needed</option>
                    </select>
                </div>
            </div>

            <button className=" border-2 w-[100%] p-[10px] font-[16px] hover:bg-red-400 mt-4 rounded ">
                Proceed to Return Method
            </button>
        </div>
    )
}

export default Return