import { IVersion } from './IVersion.ts';

export class SemVer implements IVersion<SemVer> {
  public static ofString(str: string): SemVer {
    // TODO
  }

  public gt(other: SemVer): boolean {
    // TODO
  }

  public gte(other: SemVer): boolean {
    // TODO
  }

  public lt(other: SemVer): boolean {
    // TODO
  }

  public lte(other: SemVer): boolean {
    // TODO
  }

  public eq(other: SemVer): boolean {
    // TODO
  }
}
