import { interval, Subscription } from "rxjs";

const MATRIX_RAIN_LETTERS: string = 'あかさたなはまやらわいきしちにひみりうくすつぬふむゆるえけせてねへめれおこそとのほもよろをABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * 该方法用定时随机地绘制雨滴的内容和位置。
 * @param context 画布渲染器
 * @param width 画布宽度
 * @param height 画布高度
 * @param size 雨滴文字大小
 * @param flag 是否为黑夜模式
 */
export const drawMatrixRainEffectOnCanvas = (context: CanvasRenderingContext2D | null, width: number, height: number, size: number, flag: boolean): Subscription => {
    const columns: number = Math.floor(width / size);
    const offsets: number[] = Array.from<number>({ length: columns }).map(() => Math.floor(Math.random() * height * 0.125));
    const letterSize: number = MATRIX_RAIN_LETTERS.length;
    return interval(100).subscribe(() => {
        if (context) {
            context.fillStyle = flag ? '#00000026' : '#ffffff26';
            context.fillRect(0, 0, width, height);

            for (let i = 0, length = offsets.length; i < length; i++) {
                context.font = `bold ${size}px serif`;
                context.fillStyle = flag ? '#d4d4d459' : '#40404059';
                context.fillText(MATRIX_RAIN_LETTERS.charAt(Math.floor(Math.random() * letterSize)), size * i, size * offsets[i]);

                offsets[i] += 1;

                if (offsets[i] * size > height && Math.random() > 0.95)
                    offsets[i] = 0;
            }
        }
    });
}
