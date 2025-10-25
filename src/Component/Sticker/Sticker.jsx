import data from '../../stickers.json';

export const Sticker = () => {
    console.log(data[0]);
    const stickers = data.map((sticker) => (
        <li className="sticker">
            <img src={sticker.img} alt={sticker.label} />
        </li>
    ));
    return stickers
}