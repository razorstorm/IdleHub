import { GameUtils } from './GameUtils';

// StackOverFlow upgrade. Click to toggle whether to use SO, when using, have chance of reducing time between commits, but might lead to a 0 star commit due to "IM NOT ANSWERING YOUR QUESTION YOUR APPROACH IS BAD GO AND REWRITE YOUR ENTIRE COMPANY'S 100 GB CODE BASE TO USE MY APPROACH THATS MARGINALLY BETTER, etc"
export class Player {
    stars: number;
    prestigeBonus: number;
    // by default one commit makes one star
    commitUpgradeLevel: number;
    constructor() {
        this.stars = 0;
        this.prestigeBonus = 0;
        this.commitUpgradeLevel = 0;
    }

    loadFromSave(): Player {
        // todo deserialize
        return new Player();
    }

    loseStars(amount: number) {
        this.stars -= amount;
        this.stars = Math.max(0, this.stars);
    }

    buyCommitUpgrade() {
        const cost = GameUtils.commitUpgradeCostScaling(this.commitUpgradeLevel);
        this.loseStars(cost);
    }

    makeCommit() {
        const starsToGain = GameUtils.commitUpgradeMultiplierScaling(this.commitUpgradeLevel);
        this.gainStars(starsToGain);
    }

    gainStars(stars: number) {
        this.stars = stars;
    }
}
