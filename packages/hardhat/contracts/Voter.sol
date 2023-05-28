//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Voter {
    struct Option {
        string name;
        uint256 votes;
    }

    string public question;
    uint256 public totalVoters = 0;
    Option[] public options;
    mapping(address => bool) public voted;


    constructor(string memory _question, string[] memory _options) {
        require(_options.length >= 2, "Must have at least two options");
        question = _question;

        for (uint i = 0; i < _options.length; i++) {
            options.push(Option(_options[i], 0));
        }
    }

    function castVote(uint256 option) public {
        require(!voted[msg.sender], "You can only vote once!");
        
        voted[msg.sender] = true;
        options[option].votes++;
        totalVoters++;
    }

    function getAllOptionNames() public view returns (string[] memory) {
        string[] memory names = new string[](options.length);

        for (uint i = 0; i < options.length; i++) {
            names[i] = options[i].name;
        }

        return names;
    }

    function getAllOptions() public view returns (Option[] memory) {
        return options;
    }
}
