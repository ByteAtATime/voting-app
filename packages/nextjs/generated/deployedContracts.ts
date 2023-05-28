const contracts = {
  31337: [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        Voter: {
          address: "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_question",
                  type: "string",
                },
                {
                  internalType: "string[]",
                  name: "_options",
                  type: "string[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "option",
                  type: "uint256",
                },
              ],
              name: "castVote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllOptionNames",
              outputs: [
                {
                  internalType: "string[]",
                  name: "",
                  type: "string[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllOptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Voter.Option[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "options",
              outputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "votes",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "question",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalVoters",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "voted",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  11155111: [
    {
      name: "sepolia",
      chainId: "11155111",
      contracts: {
        Voter: {
          address: "0xfF50A2F09699cDB7ce80f5c007861cEbCbbDE741",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_question",
                  type: "string",
                },
                {
                  internalType: "string[]",
                  name: "_options",
                  type: "string[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "option",
                  type: "uint256",
                },
              ],
              name: "castVote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllOptionNames",
              outputs: [
                {
                  internalType: "string[]",
                  name: "",
                  type: "string[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllOptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Voter.Option[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "options",
              outputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "votes",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "question",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalVoters",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "voted",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
