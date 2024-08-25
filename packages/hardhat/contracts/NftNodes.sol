//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 < 0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NftNodes is ERC721, Ownable {
    uint256 private _nextTokenId;
    uint256 public constant PRICE = 50 * 10**18; // 50 AVAX (assuming 18 decimals)
    uint256 public constant MAX_PER_MINT = 10;

    constructor() ERC721("NftNodes", "NFTN") Ownable(msg.sender) {}

    function mint(uint256 numberOfTokens) public payable {
        require(numberOfTokens > 0 && numberOfTokens <= MAX_PER_MINT, "Can only mint 1 to 10 tokens at a time");
        require(msg.value >= PRICE * numberOfTokens, "Insufficient payment");

        for (uint256 i = 0; i < numberOfTokens; i++) {
            uint256 tokenId = _nextTokenId++;
            _safeMint(msg.sender, tokenId);
        }
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(owner()).transfer(balance);
    }
}