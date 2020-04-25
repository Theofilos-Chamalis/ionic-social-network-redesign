import React, { Component } from 'react';
import { IonList, IonListHeader, IonLabel, IonButton } from '@ionic/react';
import axios from 'axios';
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

    generateLoremIpsum = async () => {
        const res = await axios.get("https://baconipsum.com/api/?type=all-meat&sentences=2&start-with-lorem=2");
        const loremText = res?.data[0];
        this.setState({
            loremIpsumTexts: [...this.state.loremIpsumTexts, loremText]
        });
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
                    cardTimestamp="Sent at 14:19"
                />
                <TweetCard
                    cardTitle="Gerard Du Pardieu"
                    cardSubtitle="Ruski"
                    cardBodyImage="https://picsum.photos/420"
                    cardBodyText={this.state.loremIpsumTexts.length > 0 ? this.state.loremIpsumTexts[0] : "Je ne pais patisserie"}
                    cardTimestamp="Sent at 16:38"
                />
                <TweetCard
                    cardTitle="Kastorikos"
                    cardSubtitle="Chef"
                    cardBodyImage="https://picsum.photos/410"
                    cardBodyText={this.state.loremIpsumTexts.length > 0 ? this.state.loremIpsumTexts[1] : "Oui bebe oui"}
                    cardTimestamp="Sent at 16:51"
                />
            </IonList>
        );
    }
}
