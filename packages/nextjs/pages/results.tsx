import { BigNumber } from "ethers";
import { NextPage } from "next";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const Result = ({ vote, totalVotes }: { vote: { name: string, votes: BigNumber }, totalVotes: BigNumber }) => {
    const totalVotesNum = totalVotes.toNumber();
    const votesNum = vote.votes.toNumber();

    return (
        <div className="bg-base-200 px-4 py-2 rounded first:rounded-t-xl last:rounded-b-xl">
            <div>{vote.name} - {(votesNum / totalVotesNum * 100).toFixed(2)}%</div>
            <progress className="progress progress-info" value={votesNum / totalVotesNum} max="1" />
        </div>
    )
}

const Results: NextPage = () => {
    const { data: totalVotes } = useScaffoldContractRead({
        contractName: "Voter",
        functionName: "totalVoters",
    })

    const { data: votes } = useScaffoldContractRead({
        contractName: "Voter",
        functionName: "getAllOptions",
    });

    return (
        <div className="flex items-center justify-center flex-grow">
            <div className="bg-base-300 p-6 rounded-2xl w-full lg:w-2/3 m-4">
                <h1 className="font-bold text-4xl">Results</h1>
                <div className="flex flex-col gap-y-2 mt-4">
                    {totalVotes && totalVotes.gt(0) ? votes?.map(vote => <Result vote={vote} totalVotes={totalVotes} />) : <p>No one has voted!</p>}
                </div>
            </div>
        </div>
    )
}

export default Results;
