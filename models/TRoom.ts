export type Image = {
    src: string;
    vertical?: boolean;
}

export type Memory = {
    image?: Image;
    title: string;
    text: string
}

export type Room = {
    memos: Memory[];
    photos: Image[]
}