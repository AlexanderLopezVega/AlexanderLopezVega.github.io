//  Interfaces
export interface TechDemo {
    readonly name: string;
    readonly description?: string | undefined;
    readonly genre?: string | undefined;
    readonly canView: boolean = true;
}