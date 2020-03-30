import { Result } from "../core/result";
import { NumberUtils } from "./numberUtils";

interface Node {
  id: number
}

type GenericNodeList<T> = Node[];

export class PaginationUtils {
  public static filterByBeforeAndAfter<T> (
    items: GenericNodeList<T>,
    after?: string,
    before?: string,
  ) : GenericNodeList<T> {
    const isAfterSet = !!after === true;
    const isBeforeSet = !!before === true;

    if (isAfterSet) {
      const afterIndex = items.findIndex((t) => t.id === Number(after))
      const afterIndexFound = afterIndex !== -1;

      if (afterIndexFound) {
        items = items.slice(afterIndex + 1)
      }
    }

    if (isBeforeSet) {
      const beforeIndex = items.findIndex((t) => t.id === Number(after))
      const beforeIndexFond = beforeIndex !== -1;

      if (beforeIndexFond) {
        items = items.slice(0, beforeIndex)
      }
    }

    return items;
  }

  public static limitByFirstAndLast<T>(
    items: T[],
    first?: number,
    last?: number
  ): Result<T[]> {
    const isFirstSet = NumberUtils.isANumber(first);
    const isLastSet = NumberUtils.isANumber(last);

    if (isFirstSet) {
      const isFirstAPositiveNumber = NumberUtils.isANonNegativeNumber(first);

      if (!isFirstAPositiveNumber) {
        return Result.fail<T[]>("First has to be greater than 0");
      }

      if (items.length > first) {
        return Result.ok<T[]>(items.slice(0, first));
      }
    }

    if (isLastSet) {
      const isLastAPositiveNumber = NumberUtils.isANonNegativeNumber(last);

      if (!isLastAPositiveNumber) {
        return Result.fail<T[]>("Last has to be greater than 0");
      }

      if (items.length > last) {
        return Result.ok<T[]>(items.slice(0, last));
      }
    }

    return Result.ok<T[]>(items);
  }
}
