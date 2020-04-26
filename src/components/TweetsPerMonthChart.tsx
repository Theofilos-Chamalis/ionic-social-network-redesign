import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class TweetsPerMonthChart extends Component<{}, { dataArray: number[] }> {
    constructor(props: any) {
        super(props)

        this.state = {
            dataArray: [0]
        }
    }

    componentDidMount = () => {
        this.setState({
            dataArray: this.createRandomDataSet(7, 22, 98)
        })
    };

    createRandomDataSet = (dataSetSize: number, minValue: number, maxValue: number) => {
        return new Array(dataSetSize).fill(0).map((n) => {
            return Math.floor(Math.random() * (maxValue - minValue) + minValue);
        });
    };

    render() {
        return (
            <React.Fragment>
                {
                    this.state.dataArray.length > 1 ?
                        (
                            <Bar
                                data={{
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                        {
                                            label: 'Tweets Per Month',
                                            backgroundColor: '#4c8dff',
                                            borderColor: '#3880ff',
                                            borderWidth: 1,
                                            hoverBackgroundColor: '#50c8ff',
                                            hoverBorderColor: '#3dc2ff',
                                            data: this.state.dataArray
                                        }
                                    ]
                                }}
                                width={110}
                                height={110}
                                legend={{
                                    display: true,
                                    position: 'bottom',
                                    fullWidth: true
                                }}
                            />
                        ) : null
                }
            </React.Fragment>
        );
    }
}
