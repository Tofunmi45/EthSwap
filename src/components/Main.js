import React, { Component } from 'react'
import BuyForm from './BuyForm'
import Sellform from './Sellform'


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            output: '0',
            currentForm: 'buy'
        }
    }

    render() {
        let content
        if (this.state.currentForm === 'buy') {
            content = <BuyForm
                ethBalance={this.props.ethBalance}
                tokenBalnce={this.props.tokenBalnce}
                buyTokens={this.props.buyTokens}
            />
        } else {
            content = <Sellform
                ethBalance={this.props.ethBalance}
                tokenBalnce={this.props.tokenBalnce}
                sellTokens={this.props.buyTokens}
            />
        }
        return (
            <div id='content' className='mt-3'>

                <div className="d-flex justify-content-between mb-3">
                    <button
                        className="btn btn-light"
                        onClick={(event) => {
                            this.setState({ currentForm: 'buy' })
                        }}
                    >
                        Buy
                    </button>
                    <span className="text-muted"> &lt; &nbsp; &gt;</span>
                    <button
                        className="btn btn-light"
                        onClick={(event) => {
                            this.setState({ currentForm: 'sell' })
                        }}
                    >
                        Sell
                    </button>
                </div>

                <div className="card mb-4" >

                    <div className="card-body">

                        {content}

                    </div>
                </div>
            </div>
        );
    }
}

export default Main;