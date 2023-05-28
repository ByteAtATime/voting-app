import { BigNumber } from "ethers";
import { NextPage } from "next";
import { useState } from "react";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Option = ({ children, index, setChecked }: { children: string, index: number, setChecked: (index: number) => void }) => {
    return (
        <label className="bg-base-200 px-4 py-2 rounded first:rounded-t-xl last:rounded-b-xl flex items-center gap-x-1.5">
            <input type="radio" value={index} name="vote" onChange={() => setChecked(index)} />
            {children}
        </label>
    )
}

const Vote: NextPage = () => {
    const [selected, setSelected] = useState<number|null>(null);
    const [submittedEmpty, setSubmittedEmpty] = useState(false);

    const { data: question } = useScaffoldContractRead({
        contractName: "Voter",
        functionName: "question",
    });

    const { data: optionNames } = useScaffoldContractRead({
        contractName: "Voter",
        functionName: "getAllOptionNames",
    });

    const { writeAsync } = useScaffoldContractWrite({
        contractName: "Voter",
        functionName: "castVote",
        args: [BigNumber.from(selected ?? 0)],
    });

    const submit = async () => {
        if (selected == null) {
            setSubmittedEmpty(true);
            return;
        }

        await writeAsync();
    }

    return (
        <div className="flex items-center justify-center flex-grow">
            <div className="bg-base-300 p-6 rounded-2xl w-full lg:w-2/3 m-4">
                <h1 className="font-bold text-4xl">{question}</h1>

                <div className="flex flex-col gap-y-2 mt-4">
                    {optionNames?.map((option, i) => <Option index={i} setChecked={(value) => { setSelected(value); setSubmittedEmpty(false); }} key={i}>{option}</Option>)}
                </div>

                {submittedEmpty && <p className="text-color text-center">Please select a value!</p>}

                <button className="block mx-auto bg-primary mt-4 font-bold text-lg rounded-lg focus:bg-primary-focus text-primary-content px-4 py-2" onClick={submit}>Vote!</button>
            </div>
        </div>
    )
}

export default Vote