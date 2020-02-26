import { GameUtils } from './GameUtils';

// StackOverFlow upgrade. Click to toggle whether to use SO, when using, have chance of reducing time between commits, but might lead to a 0 star commit due to "IM NOT ANSWERING YOUR QUESTION YOUR APPROACH IS BAD GO AND REWRITE YOUR ENTIRE COMPANY'S 100 GB CODE BASE TO USE MY APPROACH THATS MARGINALLY BETTER, etc"
class Player {
    stars: number;
    prestigeBonus: number;
    // by default one commit makes one star
    commitUpgradeLevel: number;
    constructor() {
        this.stars = 0;
        this.prestigeBonus = 0;
        this.commitUpgradeLevel = 1;
    }

    loadFromSave(): Player {
        // todo deserialize
        return new Player();
    }

    loseStars(amount: number) {
        this.stars -= amount;
        this.stars = Math.max(0, this.stars);
    }

    getCommitUpgradeCost(): number {
        return GameUtils.commitUpgradeCostScaling(this.commitUpgradeLevel);
    }

    canBuyCommitUpgrade() {
        return this.stars >= this.getCommitUpgradeCost();
    }

    buyCommitUpgrade() {
        if (this.canBuyCommitUpgrade()) {
            const cost = this.getCommitUpgradeCost();
            this.loseStars(cost);
            this.commitUpgradeLevel += 1;
        }
    }

    starsPerCommit(): number {
        return GameUtils.commitUpgradeMultiplierScaling(this.commitUpgradeLevel);
    }

    makeCommit() {
        const starsToGain = this.starsPerCommit();
        this.gainStars(starsToGain);
        console.log(starsToGain, this.stars);
    }

    gainStars(stars: number) {
        this.stars += stars;
    }
}

export default Player;
