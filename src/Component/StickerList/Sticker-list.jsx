import data from '../../stickers.json';
import { Component } from 'react';
import Choice from '../Choice/Choice';
import {StickerListStyled} from "./Sticker-list.styled";

class StickerList extends Component {
    state = {
        chosenSticker: null
    }

    handleClick = (url) => {
    console.log(url);
    this.setState({ chosenSticker: url });
  };


    render() {
            const stickers = data.map((sticker) => (
        <li className="sticker" key={sticker.id}>
            <button onClick={() => this.handleClick(sticker.img)}>
            <img src={sticker.img} alt={sticker.label} />
            </button>
        </li>
    ));

    const stickersList = ( <div>
        <StickerListStyled>
            {stickers}
        </StickerListStyled>
        <Choice Chosen={this.state.chosenSticker} />
        </div>
    );


        return (
            stickersList
        );
    }
}

export default StickerList; ;