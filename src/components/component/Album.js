import { Component } from "react";


class Album extends Component {
    state = {
        albums: []
    }
    getAlbums() {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => this.setState({albums: data}))
    }
    componentDidMount(){
        this.getAlbums()
    }
    render(){
        return(
            <div>
                <h1>Albums Page!</h1>
                <hr />
                {
                    this.state.albums ? 
                    this.state.albums.map(album => 
                        <div key={album.id}>
                            <h1>{album.userId}</h1>
                            <h3>{album.title}</h3>
                        </div>
                    ) : <h1>Loading...</h1>
                }
            </div>
        )
    }
}

export default Album;