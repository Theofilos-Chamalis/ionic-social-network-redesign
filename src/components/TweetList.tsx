import React, { Component } from 'react';
import { IonList, IonListHeader, IonLabel, IonButton } from '@ionic/react';
import TweetCard from './TweetCard';

export default class TweetList extends Component<{}, {}> {
    constructor(props: any) {
        super(props)

        this.state = {}
    }

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
                    cardBody="This is my first tweet! Please do not reply to me before 15:30 since I will be on the lake fishing :("
                    cardTimestamp="Sent at 09:30"
                />
            </IonList>
        );
    }
}
