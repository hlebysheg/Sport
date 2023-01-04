import { createStore } from 'effector';

type image = {
    src: string;
    id: number;
}
export type galery = {
    theme: string;
    imgs: Array<image>;
}
export const $galleryImg = createStore<galery[]>([
    {
        theme: 'Тема фото', imgs: [{ src: 'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg', id: 1 },
        { src: 'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg', id: 1 },
        { src: 'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg', id: 1 },
        { src: 'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg', id: 1 },
        { src: 'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg', id: 1 }]
    },
    { theme: 'Тема фото', imgs: [{ src: 'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg', id: 2 }] },
    { theme: 'Тема фото', imgs: [{ src: 'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg', id: 3 }] }
])