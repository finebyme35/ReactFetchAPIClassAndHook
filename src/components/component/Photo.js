import { Component } from "react";


class Photo extends Component {
    state = {
        photos: []
    }
    
    getPhoto() {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => this.setState({photos: data}))
    }
    componentDidMount() {
        this.getPhoto()
    }
    render() {
        return (
            <>
            <h1>Photos Page!</h1>
            <hr />
            {
                this.state.photos ?
                this.state.photos.map(photo => 
                    <div key={photo.id}>
                        <h1>{photo.title}</h1>
                        <p>{photo.url}</p>
                    </div>
                )  : <h1>Loading...</h1>
            }
            </>
        )
    }
}
export default Photo;