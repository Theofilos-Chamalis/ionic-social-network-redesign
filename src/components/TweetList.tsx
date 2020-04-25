import React, { Component } from 'react';
import { IonList, IonListHeader, IonLabel, IonButton } from '@ionic/react';
import TweetCard from './TweetCard';

export default class TweetList extends Component<{}, { loremIpsumTexts: Array<string>, loremIpsumTextNumber: number }> {
    constructor(props: any) {
        super(props)

        this.state = {
            loremIpsumTexts: [],
            loremIpsumTextNumber: 2
        }
    }

    componentDidMount = () => {
        for (let i = 0; i < this.state.loremIpsumTextNumber; i++) {
            this.generateLoremIpsum();
        }
    };

    generateLoremIpsum = () => {
        const loremText = 'random text lalala';
        this.state.loremIpsumTexts.push(loremText);
    };

    render() {
        return (
            <IonList className="ion-padding">
                <IonListHeader lines="none">
                    <IonLabel>New tweets</IonLabel>
                    <IonButton>See All</IonButton>
                </IonListHeader>
                <TweetCard
                    cardTitle="John Travolta"
                    cardSubtitle="Fisherman"
                    cardBodyImage="none"
                    cardBodyText="This is my first tweet! Please do not reply to me before 15:30 since I will be on the lake fishing :("
                    cardTimestamp="Sent at 09:30"
                />
                <TweetCard
                    cardTitle="Jimmy Falon"
                    cardSubtitle="none"
                    cardBodyImage="https://picsum.photos/400"
                    cardBodyText="This is the first photo I have taken !!!"
                    cardTimestamp="Sent at 09:30"
                />
            </IonList>
        );
    }
}
