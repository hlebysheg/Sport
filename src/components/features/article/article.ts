import { createStore } from 'effector';

type Article = {
    id: number,
    descriptipn: string;
    title: string;
    img: string;
    src?: string;
    ava?: string;
}

export const $article = createStore<Article[]>([
    {
        id: 0,
        title: 'title',
        descriptipn: 'placeholderplaceholder placeholder placeholder placeholder placeholderplaceholder placeholder placeholderplaceholder placeholder placeholder',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
    {
        id: 1,
        title: 'title',
        descriptipn: 'placeholder placeholder placeholder',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }
])