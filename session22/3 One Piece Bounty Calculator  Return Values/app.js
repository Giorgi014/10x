function calculateBounty(currentBounty, increase) {
    return `${currentBounty}, ${increase}`;
}
let result = calculateBounty("current bounty: 1_500_000_000", "increase: 500_000_000")

console.log(result);
