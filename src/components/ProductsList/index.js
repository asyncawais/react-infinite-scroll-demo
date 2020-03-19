import React from 'react'
import axios from 'axios'
import Outfit from '../Outfit'

const OutfitCollection = (props) => {
    return (<div className="outfit-collection">
        {props.outfits.map((outfit, index) => <Outfit key={index} outfit={outfit} />)}
    </div>)
}

class ProductsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            isLoading: false,
            isFinished: false,
            outfitsColl: [],
        }

        this.onScroll = this.onScroll.bind(this)
        this.loadMoreOutfits = this.loadMoreOutfits.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false)
        this.loadMoreOutfits()
    }
    
    onScroll() {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)) {
            this.loadMoreOutfits()
        }
    }

    loadMoreOutfits() {

        if (this.state.isFinished) {
            return
        }

        if (this.state.isLoading) {
            return
        }

        this.setState({
            isLoading: true 
        })

        axios.get(`https://www.thread.com/api/winter-outfits/98/${this.state.currentPage}`)
            .then(res => {
                
                let outfitsColl = [ ...this.state.outfitsColl ]
                outfitsColl.push(res.data.outfits)

                this.setState({
                    outfitsColl: outfitsColl,
                    isLoading: false,
                    currentPage: (this.state.currentPage + 1),
                })
            }).catch(error => {
                if (error.response.status === 404) {
                    this.setState({
                        isLoading: false,
                        isFinished: true,
                    })
                }
            })
    }

    render() {
        return (    
            <div className="products-list">
                {this.state.outfitsColl.map((outfits, index) => {
                    return <OutfitCollection key={index} outfits={outfits} />
                })}
            </div>
        )
    }
}

export default ProductsList