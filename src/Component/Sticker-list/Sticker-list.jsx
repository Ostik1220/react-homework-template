import { Sticker } from "../Sticker/Sticker";
import {StickerListStyled} from "./Sticker-list.styled";
import { Component } from "react";

class StickerList extends Component {

    render(){
        return (
        <StickerListStyled>
            <Sticker />
        </StickerListStyled>)
    }
}

export default StickerList;

