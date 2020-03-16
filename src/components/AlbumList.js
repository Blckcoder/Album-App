import React, { Component } from "react";
import {
    View,
    StyleSheet,ScrollView,
} from "react-native";
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {

    state = { albums: [] };  //initialize the state//


    // lifecycle method //
    UNSAFE_componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')

            .then(response => this.setState({ albums: response.data })); //update the component's state//

    }
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} record={album} />
        )
    }
    render() {
        console.log(this.state);
        return (

            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
export default AlbumList;

