export class GameUtils {
    static commitUpgradeCostScaling(currLevel: number): number {
        return Math.ceil(2 ** currLevel);
    }

    static commitUpgradeMultiplierScaling(currLevel: number): number {
        return Math.ceil(1.4 ** (currLevel - 1));
    }
}
