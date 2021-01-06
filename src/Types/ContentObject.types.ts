type ContentObject = {
    [key: string]: ContentDetails;
};

type ContentDetails = {
    name: string;
    free: boolean;
    owned: boolean;
};

export default ContentObject;
