export interface Journey {
    id: number,
    title: string,
    country: {
        label: string,
        value: string,
    },
    month: string,
    duration: string,
    standard: string,
};