export class GameUtils {
    static commitUpgradeCostScaling(currLevel: number): number {
        return Math.ceil(2 ** currLevel);
    }

    static commitUpgradeMultiplierScaling(currLevel: number): number {
        return Math.ceil(1.4 ** (currLevel - 1));
    }

    static devCostScaling(currLevel: number): number {
        return Math.ceil(2 ** currLevel + 1.5 * currLevel + 130);
    }

    static devTimeScaling(currLevel: number): number {
        return 10 * 1000 / currLevel;
    }
}
