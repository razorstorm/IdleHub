import { Player } from "./player";

export class GameUtils {
    static commitUpgradeCostScaling(currLevel: number): number {
        return 2.2 * currLevel;
    }

    static commitUpgradeMultiplierScaling(currLevel: number): number {
        return 2 * currLevel;
    }
}
