export class ApiResponse<T> {
    records: number | undefined;
    responseCode: number | undefined;
    message: string |undefined;
    isSuccess: boolean | undefined;
    data: T | undefined;
}