export type ContentObject = {
    [key: string]: ContentDetails;
};
export type ContentDetails = {
    name: string;
    free: boolean;
    owned: boolean;
};
